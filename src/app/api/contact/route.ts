import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: NextRequest) {
  console.log("🔔 Contact API hit");

  if (!resend) {
    console.error("❌ Resend client not configured. Missing RESEND_API_KEY.");
    return NextResponse.json(
      { ok: false, error: "Email service not configured. Please set RESEND_API_KEY." },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    console.log("📥 Raw body:", body);

    const { name, email, message, website } = body;

    // Honeypot check
    if (website) {
      console.warn("⚠️ Honeypot triggered — spam bot attempt.");
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Basic validation
    if (!name || !email || !message) {
      console.error("❌ Validation failed: missing field(s)", { name, email, message });
      return NextResponse.json(
        { ok: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("❌ Invalid email format:", email);
      return NextResponse.json(
        { ok: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    console.log("📤 Sending email via Resend:", {
      to: process.env.CONTACT_TO,
      from: process.env.CONTACT_FROM,
      replyTo: email,
      subject: `Portfolio Inquiry from ${name}`,
    });

    const response = await resend.emails.send({
      to: process.env.CONTACT_TO!,
      from: process.env.CONTACT_FROM!,
      replyTo: email, // ✅ correct for Node SDK
      subject: `Portfolio Inquiry from ${name}`,
      html: `
        <h2>New Portfolio Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    console.log("✅ Resend response:", response);

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("🔥 Unexpected error in /api/contact:", error);
    return NextResponse.json(
      { ok: false, error: error.message || "Something went wrong." },
      { status: 500 }
    );
  }
}
