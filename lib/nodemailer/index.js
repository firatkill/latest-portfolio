import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // Kullandığınız email servisine göre değiştirin (Gmail için)
  port: 465, // SSL için 465, TLS için 587
  secure: true, // SSL için true, TLS için false
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_EMAIL_PASSWORD,
  },
});
