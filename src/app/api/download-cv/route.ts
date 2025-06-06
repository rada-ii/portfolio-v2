import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // You can either:
    // 1. Serve a static CV file from public folder
    // 2. Generate CV dynamically
    // 3. Redirect to external CV link

    // Option 1: Serve static file (recommended)
    // Make sure to add your CV file to public/cv/rada-ivankovic-cv.pdf
    const cvPath = "/cv/rada-ivankovic-cv.pdf";

    return NextResponse.redirect(new URL(cvPath, request.url));

    // Option 2: If you want to track downloads, use this instead:
    /*
    const response = NextResponse.redirect(new URL(cvPath, request.url));
    
    // Log download (optional)
    console.log('CV downloaded at:', new Date().toISOString());
    
    return response;
    */
  } catch (error) {
    console.error("Error serving CV:", error);
    return NextResponse.json({ error: "CV not found" }, { status: 404 });
  }
}
