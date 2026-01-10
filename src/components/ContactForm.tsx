"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          contactNumber: formData.phoneNumber,
          message: formData.message,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        console.error("API Error:", responseData.error);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* CONTACT Title */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-block border-2 border-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4">
            <h2 className="text-xl sm:text-2xl font-bold text-black uppercase">
              CONTACT
            </h2>
          </div>
        </div>

        {/* Lorem Ipsum Text */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-dark-gray leading-relaxed max-w-2xl mx-auto text-sm sm:text-base px-4">
            Nulla in velit a massa rhoncus tempus. Nulla congue nulla vel orci
            varius finibus. Sed ornare sit amet lorem sed viverra. In vel ante
            quis libero viverra facilisis ut at est.
          </p>
        </div>

        {/* ---WWW--- Separator */}
        <div className="flex items-center justify-center mb-8 sm:mb-12">
          <div className="flex-1 h-px bg-dark-gray"></div>
          <span className="px-2 sm:px-4 text-dark-gray text-xs sm:text-sm">
            ---WWW---
          </span>
          <div className="flex-1 h-px bg-dark-gray"></div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block text-xs sm:text-sm font-medium text-dark-gray mb-2"
              >
                ENTER YOUR NAME*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-dark-gray focus:outline-none focus:border-black pb-2 text-dark-gray text-sm sm:text-base"
                placeholder=""
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm font-medium text-dark-gray mb-2"
              >
                ENTER YOUR EMAIL*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-dark-gray focus:outline-none focus:border-black pb-2 text-dark-gray text-sm sm:text-base"
                placeholder=""
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-xs sm:text-sm font-medium text-dark-gray mb-2"
              >
                PHONE NUMBER
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-dark-gray focus:outline-none focus:border-black pb-2 text-dark-gray text-sm sm:text-base"
                placeholder=""
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs sm:text-sm font-medium text-dark-gray mb-2"
              >
                YOUR MESSAGE*
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-l-2 border-b-2 border-dark-gray focus:outline-none focus:border-black pl-3 sm:pl-4 pb-2 text-dark-gray resize-none text-sm sm:text-base"
                placeholder=""
              />
            </div>

            {submitStatus === "success" && (
              <div className="p-3 sm:p-4 bg-green-50 border border-green-200 text-green-700 text-xs sm:text-sm">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-3 sm:p-4 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm">
                Something went wrong. Please check all required fields and try
                again.
              </div>
            )}

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-black text-base sm:text-lg font-medium hover:opacity-80 transition-opacity disabled:opacity-50"
              >
                | SUBMIT |
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
