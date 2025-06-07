// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ContactMessage } from "@/types/contact";

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
    const db = client.db("portfolio"); // Ime baze
    const collection = db.collection<ContactMessage>("messages"); // Ime kolekcije

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

    console.log("Message saved to database:", {
      id: result.insertedId,
      from: email,
      subject: subject,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        message: "Message sent successfully!",
        id: result.insertedId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET endpoint da možeš da vidiš poruke (optional)
export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");
    const collection = db.collection<ContactMessage>("messages");

    // Get all messages, newest first
    const messages = await collection
      .find({})
      .sort({ timestamp: -1 })
      .limit(50) // Limit na 50 najnovijih
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
