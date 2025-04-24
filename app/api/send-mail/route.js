import { transporter } from "@/lib/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();

    // Format the date and time
    const formattedDate = new Date().toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const formattedTime = new Date().toLocaleTimeString("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <${data.senderEmail}>`,
      to: "firatkill.is@gmail.com",
      subject: "Portfolio Website Contact Form",
      text: `
Name: ${data.senderName}
Email: ${data.senderEmail}
Message: ${data.message}

Submitted on: ${formattedDate} at ${formattedTime}
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #eee;
      border-radius: 10px;
    }
    .header {
      background-color: #f5f5f5;
      padding: 15px;
      border-radius: 8px 8px 0 0;
      border-bottom: 2px solid #ddd;
    }
    .content {
      padding: 20px 15px;
    }
    .field {
      margin-bottom: 15px;
    }
    .label {
      font-weight: bold;
      color: #555;
    }
    .value {
      margin-top: 5px;
    }
    .message-box {
      background-color: #f9f9f9;
      border-left: 4px solid #ccc;
      padding: 10px 15px;
      margin-top: 5px;
    }
    .footer {
      margin-top: 30px;
      font-size: 12px;
      color: #777;
      border-top: 1px solid #eee;
      padding-top: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0; color: #444;">Portfolio Contact Form</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">From:</div>
        <div class="value">${data.senderName}</div>
      </div>
      
      <div class="field">
        <div class="label">Email:</div>
        <div class="value">${data.senderEmail}</div>
      </div>
      
      <div class="field">
        <div class="label">Message:</div>
        <div class="message-box">${data.message.replace(/\n/g, "<br>")}</div>
      </div>
    </div>
    
    <div class="footer">
      Submitted on ${formattedDate} at ${formattedTime}
    </div>
  </div>
</body>
</html>
      `,
    });

    // Check if mail was sent successfully
    if (info.accepted.length === 0) {
      return NextResponse.json(
        {
          error: "Mesaj gönderimi başarısız oldu.",
          message: "Mesaj gönderimi başarısız oldu.",
          status: "error",
          success: false,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Mesajınız başarıyla gönderildi",
        status: "success",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: error.message,
        message: error.message,
        status: "error",
        success: false,
        code: "UNKNOWN_ERROR",
      },
      { status: 400 }
    );
  }
}
