import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setStatus("Sending...");
      // Send email using EmailJS
      emailjs
        .send(
          "service_j4bpodv",    // replace with your EmailJS service ID
          "template_k1odq1i",   // replace with your EmailJS template ID
          formData,
          "oywnIkHckF0On-ef5"     // replace with your EmailJS public key (User ID)
        )
        .then(
          (response) => {
            setStatus(`Thank you, ${formData.name}! Your message has been sent.`);
            setFormData({ name: "", email: "", message: "" });
            setErrors({});
          },
          (error) => {
            setStatus("Failed to send message. Please try again later.");
            console.error("EmailJS error:", error);
          }
        );
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <h2>Contact Us</h2>

      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your full name"
      />
      {errors.name && <span className="error">{errors.name}</span>}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="your.email@example.com"
      />
      {errors.email && <span className="error">{errors.email}</span>}

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        rows="4"
        value={formData.message}
        onChange={handleChange}
        placeholder="Write your message here..."
      />
      {errors.message && <span className="error">{errors.message}</span>}

      <button type="submit">Send</button>

      {status && <p className="status">{status}</p>}
    </form>
  );
}

export default Contact;
