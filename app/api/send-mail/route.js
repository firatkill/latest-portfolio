import { transporter } from "@/lib/nodemailer";
import { NextResponse } from "next/server";

const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function fail(message, status = 400) {
  return NextResponse.json({ success: false, message }, { status });
}

export async function POST(req) {
  let data;
  try {
    data = await req.json();
  } catch {
    return fail("Invalid request.");
  }

  // Honeypot field: real visitors never see it.
  if (data.company) return NextResponse.json({ success: true });

  const name = String(data.senderName ?? "").trim().slice(0, 100);
  const email = String(data.senderEmail ?? "").trim().slice(0, 200);
  const message = String(data.message ?? "").trim().slice(0, 5000);

  if (!name || !message || !EMAIL_RE.test(email)) {
    return fail("Please fill in your name, a valid email and a message.");
  }

  const sentAt = new Date().toLocaleString("en-GB", { timeZone: "Europe/Istanbul" });

  try {
    const info = await transporter.sendMail({
      from: `"Portfolio contact" <${process.env.SENDER_EMAIL}>`,
      to: "firatkill.is@gmail.com",
      replyTo: { name, address: email },
      subject: `Portfolio message from ${name.replace(/[\r\n]/g, " ")}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}\n\nSent ${sentAt} (Istanbul time)`,
      html: `<div style="font-family:system-ui,sans-serif;line-height:1.6;color:#222;max-width:560px">
  <p><strong>${escapeHtml(name)}</strong> &lt;${escapeHtml(email)}&gt;</p>
  <p style="white-space:pre-wrap;border-left:3px solid #ccc;padding-left:12px">${escapeHtml(message)}</p>
  <p style="color:#888;font-size:12px">Sent ${sentAt} (Istanbul time)</p>
</div>`,
    });
    if (!info.accepted?.length) return fail("The message could not be sent. Please email me directly.", 502);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("send-mail failed", error);
    return fail("The message could not be sent. Please email me directly.", 502);
  }
}
