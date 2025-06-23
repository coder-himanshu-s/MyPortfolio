import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/contact", form);
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 px-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <form className="max-w-xl mx-auto flex flex-col gap-4" onSubmit={handleSubmit}>
        <input className="p-3 border rounded" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
        <input className="p-3 border rounded" type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email" required />
        <textarea className="p-3 border rounded" name="message" value={form.message} onChange={handleChange} placeholder="Your Message" required></textarea>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">Send</button>
      </form>
    </section>
  );
};

export default Contact;