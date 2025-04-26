import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const form = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jadnvus", "template_qcdh7k3", form.current, {
        publicKey: "Mg5RwXHtJX-QJEauL",
      })
      .then(
        () => {
          setFormData({ from_name: "", from_email: "", message: "" });
          setSuccessMessage("✅ Message sent successfully!");
        },
        (error) => {
          console.error("FAILED...", error.text);
          setSuccessMessage("❌ Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div>
      {successMessage && <p className="text-cyan">{successMessage}</p>}
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={formData.from_name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={formData.from_email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          rows="9"
          placeholder="Message"
          required
          className="rounded-lg bg-lightBrown p-2"
          value={formData.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
