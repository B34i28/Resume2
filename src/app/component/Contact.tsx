"use client";
import React from "react";
import Image from "next/image";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_r0jcplm",
        "template_1t76uxq",
        {
          from_name: form.name,
          to_name: "Bilal Afridi",
          from_email: form.email,
          to_email: "ba3101850@gmail.com",
          message: form.message,
        },
        "Jqq9AvwIuSjoMiASc"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank You");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);

          alert("Something is wrong");
        }
      );
  };

  return (
    <div  className="xl:mt-12 xl:flex-row flex-col bg-slate-400 my-5 w-full h-full px-16 overflow-hidden">
      <div>
        <p className="text-2xl">Get in touch</p>
        <h3 className="text-5xl font-bold">Contact</h3>
      </div>
      <div className="">
        <form
          // ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 w-full flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-black font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name"
              className="bg-teal-200 py-4 px-6 placeholder:text-secondary
          text-black rounded-lg outline-none border-none font-medium"
            ></input>
          </label>
          <label className="flex flex-col">
            <span className="text-black font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email"
              className="bg-teal-200 py-4 px-6 placeholder:text-secondary
          text-black rounded-lg outline-none border-none font-medium"
            ></input>
          </label>
          <label className="flex flex-col">
            <span className="text-black font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="what do you want to say"
              className="bg-teal-200 py-4 px-6 placeholder:text-secondary
          text-black rounded-lg outline-none border-none font-medium"
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-teal-200 py-3 animate-bounce px-8 outline-none w-fit text-black font-bold shadow-md shadow-purple-300 rounded-xl"
          >
            {loading ? "sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}
