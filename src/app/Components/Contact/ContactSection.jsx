import React from "react";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left Side — Contact Info */}
        <div className="w-full md:w-1/3 flex flex-col gap-8">
          {/* Contact Info Title */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-6">
              Contact Info
            </h3>

            {/* Mail */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <Image src="/mail.svg" alt="Mail" width={20} height={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase mb-1">Mail Us</p>
                <p className="text-sm text-gray-700">info@bluebase.com</p>
                <p className="text-sm text-gray-700">info@bluebase2.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <Image src="/phone.svg" alt="Phone" width={20} height={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase mb-1">
                  Contact Us
                </p>
                <p className="text-sm text-gray-700">+1 504-899-8221</p>
                <p className="text-sm text-gray-700">+1 504-749-5456</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <Image
                  src="/location.svg"
                  alt="Location"
                  width={20}
                  height={20}
                />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase mb-1">
                  Location
                </p>
                <p className="text-sm text-gray-700">
                  22 Baker Street, Texas
                  <br />
                  United States
                  <br />
                  W1U 3BW
                </p>
              </div>
            </div>
          </div>

          {/* Social Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-6">
              Social Info
            </h3>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center hover:shadow-md transition">
                <Image src="/dribbble.svg" alt="Dribbble" width={20} height={20} />
              </div>
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center hover:shadow-md transition">
                <Image src="/twitter.svg" alt="Twitter" width={20} height={20} />
              </div>
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center hover:shadow-md transition">
                <Image src="/instagram.svg" alt="Instagram" width={20} height={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side — Contact Form */}
        <div className="w-full md:w-2/3 bg-white rounded-3xl p-10 shadow-sm">
          <h2 className="text-4xl font-bold text-gray-900 mb-10">
            Let&apos;s work <span className="text-blue-500">together.</span>
          </h2>

          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Name *"
              className="w-full bg-gray-50 rounded-xl px-5 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 border-none"
              required
            />
            <input
              type="email"
              placeholder="Email *"
              className="w-full bg-gray-50 rounded-xl px-5 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 border-none"
              required
            />
            <input
              type="text"
              placeholder="Your Subject *"
              className="w-full bg-gray-50 rounded-xl px-5 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 border-none"
              required
            />
            <textarea
              placeholder="Your Message *"
              rows="4"
              className="w-full bg-gray-50 rounded-xl px-5 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 border-none resize-none"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-gray-800 text-white rounded-lg py-3 font-medium hover:bg-gray-900 transition border-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
