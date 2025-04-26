import React, { useRef, useState } from "react";

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

  const sendWhatsApp = (e) => {
    e.preventDefault();

    // Create the WhatsApp link with pre-filled message
    const phoneNumber = "9219408042"; // Replace with your WhatsApp number (with country code)
    const message = `Name: ${formData.from_name}\nEmail: ${formData.from_email}\nMessage: ${formData.message}`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    window.open(whatsappLink, "_blank");

    // Reset form and show success message
    setFormData({ from_name: "", from_email: "", message: "" });
    setSuccessMessage("✅ Message sent successfully! You will be redirected to WhatsApp.");
  };

  return (
    <div>
      {successMessage && <p className="text-cyan">{successMessage}</p>}
      <form ref={form} onSubmit={sendWhatsApp} className="flex flex-col gap-4">
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
          Send via WhatsApp
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
