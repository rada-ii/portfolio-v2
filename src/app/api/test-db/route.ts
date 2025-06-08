import { NextRequest, NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";

export async function GET(request: NextRequest) {
  try {
    console.log("🔍 Testing MongoDB connection...");

    // Test connection
    const client = await clientPromise;
    console.log("✅ MongoDB client connected!");

    // Test database access
    const db = client.db("portfolio");
    console.log("✅ Database 'portfolio' accessed!");

    // Test collection access
    const collection = db.collection("messages");
    console.log("✅ Collection 'messages' accessed!");

    // Count existing documents
    const count = await collection.countDocuments();
    console.log(`📊 Found ${count} messages in collection`);

    // List all documents
    const messages = await collection.find({}).toArray();
    console.log("📋 All messages:", messages);

    return NextResponse.json({
      success: true,
      connection: "✅ Connected",
      database: "portfolio",
      collection: "messages",
      messageCount: count,
      messages: messages,
    });
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
