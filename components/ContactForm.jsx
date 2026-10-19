"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok || !body.success) throw new Error(body.message || "Something went wrong.");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-row">
        <label>
          <span>Name</span>
          <input name="senderName" required maxLength={100} autoComplete="name" />
        </label>
        <label>
          <span>Email</span>
          <input name="senderEmail" type="email" required maxLength={200} autoComplete="email" />
        </label>
      </div>
      <label>
        <span>Message</span>
        <textarea name="message" required rows={5} maxLength={5000} />
      </label>
      {/* Hidden from people; bots that fill every field get dropped server-side. */}
      <input name="company" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      <div className="form-foot">
        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <p className="form-status" role="status" aria-live="polite">
          {status === "sent" && "Thanks, your message is on its way. I’ll reply soon."}
          {status === "error" && error}
        </p>
      </div>
    </form>
  );
}
