"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelopeOpen } from "react-icons/fa";
import toast from "react-hot-toast";

const contactInfo = {
  email: "firatkill.is@gmail.com",
  linkedin: "linkedin.com/in/firatkill",
  github: "github.com/firatkill",
};

const socialLinks = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/firatkill/",
    className:
      "w-10 h-10 rounded-full bg-primary hover:bg-opacity-90 flex items-center justify-center text-white transition-all",
  },
  {
    icon: FaGithub,
    href: "https://github.com/firatkill",
    className:
      "w-10 h-10 rounded-full bg-gray-800  hover:bg-opacity-90 flex items-center justify-center text-white  transition-all",
  },
];

const contactFields = [
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "Your Name",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "your.email@example.com",
  },
  {
    id: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Your message...",
    rows: 5,
  },
];

const toastConfig = {
  style: {
    borderRadius: "10px",
    background: "#333",
    color: "#fff",
  },
};

export default function ContactPage() {
  const [message, setMessage] = useState("");
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");

  const sendEmailHandler = async (e) => {
    e.preventDefault();

    // Form validation
    if (!senderName.trim() || !senderEmail.trim() || !message.trim()) {
      toast.error("Lütfen tüm alanları doldurun", {
        icon: "⚠️",
        ...toastConfig,
      });
      return;
    }

    // Show loading toast
    const loadingToast = toast.loading("Mesaj gönderiliyor...", toastConfig);

    try {
      const resp = await fetch(`/api/send-mail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ senderEmail, senderName, message }),
      });

      const response = await resp.json();

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      if (response.success) {
        // Success case
        toast.success("Mesajınız başarıyla gönderildi!", {
          icon: "🎉",
          duration: 5000,
          ...toastConfig,
        });

        // Reset form fields
        setSenderName("");
        setSenderEmail("");
        setMessage("");
      } else {
        // Error case from API
        toast.error(response.message || "Mesaj gönderilirken bir hata oluştu", {
          icon: "❌",
          duration: 5000,
          ...toastConfig,
        });
      }
    } catch (error) {
      // Dismiss loading toast
      toast.dismiss(loadingToast);

      // Network or other error
      toast.error(
        "Bağlantı hatası: Lütfen internet bağlantınızı kontrol edin",
        {
          icon: "🔌",
          duration: 5000,
          ...toastConfig,
        }
      );
    }
  };

  return (
    <section className="h-full w-full flex flex-col px-4 sm:px-6 md:px-16 lg:px-24 ">
      {/* Fixed Title for Mobile */}
      <div className=" pb-2 md:hidden sticky top-0 z-10  bg-transparent">
        <h2 className="text-2xl font-bold text-center">Contact Me</h2>
        <div className="h-1 w-16 bg-primary mx-auto mt-1"></div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto overscroll-contain isolate contain-scroll  pb-24">
        <div className="w-full  py-4 mx-auto">
          {/* Desktop Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 lg:mb-16 hidden md:block"
          >
            <p className=" max-w-2xl mx-auto">
              Feel free to reach out if you have any questions or would like to
              work together. I'm always open to new opportunities and
              collaborations.
            </p>
            <div className="h-1 w-20 mt-1 rounded-xl bg-secondary mx-auto"></div>
          </motion.div>

          <div className="grid  grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <form onSubmit={sendEmailHandler} className="space-y-6">
                {contactFields.map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-sm font-medium mb-2"
                    >
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        value={field.id === "message" ? message : ""}
                        onChange={(e) =>
                          field.id === "message"
                            ? setMessage(e.target.value)
                            : null
                        }
                        id={field.id}
                        rows={field.rows}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder={field.placeholder}
                      />
                    ) : (
                      <input
                        value={
                          field.id === "name"
                            ? senderName
                            : field.id === "email"
                            ? senderEmail
                            : ""
                        }
                        onChange={(e) =>
                          field.id === "name"
                            ? setSenderName(e.target.value)
                            : field.id === "email"
                            ? setSenderEmail(e.target.value)
                            : null
                        }
                        type={field.type}
                        id={field.id}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder={field.placeholder}
                      />
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-full bg-primary cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col justify-between"
            >
              <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center">
                      <FaEnvelopeOpen className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{contactInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center">
                      <FaLinkedin className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">LinkedIn</p>
                      <p className="font-medium">{contactInfo.linkedin}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center">
                      <FaGithub className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">GitHub</p>
                      <p className="font-medium">{contactInfo.github}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-semibold mb-6">Connect with Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={social.className}
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
