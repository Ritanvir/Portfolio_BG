import React from "react";
import Image from "next/image";
import self from "../../../public/images/self.png"
const SelfSummary = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left Side — Image */}
        <div className="relative w-[330px] h-[330px] bg-gradient-to-tr from-blue-400 to-blue-200 rounded-3xl overflow-hidden flex-shrink-0 shadow-sm">
          <Image
            src={self}
            alt="David Henderson"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side — Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-10 flex items-center justify-center md:justify-start gap-4">
            <span className="text-blue-500 text-4xl">✷</span>
            SELF-SUMMARY
            <span className="text-blue-500 text-4xl">✷</span>
          </h2>

          {/* Info Card */}
          <div className="bg-white rounded-3xl p-10 shadow-sm text-left">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              David Henderson
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-lg">
              I am a San Francisco–based product designer with a focus on web
              design, illustration, and visual development. I have a diverse
              range of experience, having worked across various fields and
              industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfSummary;
