import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ContactMessage } from "../contact//route";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("portfolio");
    const collection = db.collection<ContactMessage>("messages");

    // Create message object
    const contactMessage: Omit<ContactMessage, "_id"> = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      timestamp: new Date(),
      read: false,
    };

    // Insert message into database
    const result = await collection.insertOne(contactMessage);

    console.log("✅ REAL MESSAGE SAVED:", {
      id: result.insertedId,
      from: email,
      subject: subject,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        message: "Message sent successfully! I'll get back to you soon.",
        messageId: result.insertedId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}

// GET endpoint za pregled poruka
export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");
    const collection = db.collection<ContactMessage>("messages");

    const messages = await collection
      .find({})
      .sort({ timestamp: -1 })
      .limit(50)
      .toArray();

    return NextResponse.json({ messages }, { status: 200 });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
