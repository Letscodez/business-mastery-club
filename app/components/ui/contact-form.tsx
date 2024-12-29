"use client";
import { useState } from "react";
import SectionBadge from "./section-badge";
import { ChevronRight } from "lucide-react";
import { BackgroundBeamsWithCollision } from "./background-beams";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <BackgroundBeamsWithCollision className="flex justify-center items-center flex-col text-white">
      <SectionBadge title="Contact Us" />
      <div className="w-full max-w-md px-8 py-6 space-y-6 ">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 p-3 w-full rounded-lg shadow-sm bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-3 w-full rounded-lg shadow-sm bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 p-3 w-full rounded-lg shadow-sm bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button className="relative hover:scale-105 w-full duration-200 inline-flex h-12 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-white">
              <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF0000_0%,#FF7F00_6.66%,#FFFF00_13.33%,#00FF00_20%,#4B0082_33.33%,#8B00FF_40%,#FF1493_46.66%,#FF6347_53.33%,#FF4500_60%,#FFD700_66.66%,#ADFF2F_73.33%,#00FA9A_80%,#00FFFF_86.66%,#FF69B4_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-black px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Send Message
                <ChevronRight className="w-5 h-5 ml-2" />
              </span>
            </button>
          </div>
        </form>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default ContactForm;
