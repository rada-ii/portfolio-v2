import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    console.log("CV downloaded at:", new Date().toISOString());

    const baseUrl =
      process.env.NODE_ENV === "production"
        ? `https://${request.headers.get("host")}`
        : "http://localhost:3000";

    const cvUrl = `${baseUrl}/cv/rada-ivankovic-cv.pdf`;

    return NextResponse.redirect(cvUrl);
  } catch (error) {
    console.error("Error serving CV:", error);
    return NextResponse.json({ error: "CV not found" }, { status: 404 });
  }
}
