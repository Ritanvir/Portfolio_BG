import React from "react";
import Image from "next/image";
import Link from "next/link";
import cred from "../../../public/images/credentials.png"
const WorkTogether = () => {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Card — Profiles */}
        <div className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all h-[230px]">
          <div>
            <div className="flex space-x-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center">
                <Image
                  src="/dribbble.svg"
                  alt="Dribbble"
                  width={24}
                  height={24}
                />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center">
                <Image
                  src="/twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <p className="text-xs uppercase text-gray-400 tracking-widest mb-1">
              Stay With Me
            </p>
            <h3 className="text-lg font-semibold text-gray-900">Profiles</h3>
          </div>
          <Link
            href="#"
            className="inline-flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full text-blue-500 hover:bg-blue-50 transition self-end"
          >
            +
          </Link>
        </div>

        {/* Middle Card — Let's Work Together */}
        <div className="bg-white rounded-3xl p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-all h-[230px]">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 leading-tight">
              Let&apos;s <br />
              work <span className="text-blue-500">together.</span>
            </h2>
          </div>
          <Link
            href="#"
            className="inline-flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full text-blue-500 hover:bg-blue-50 transition self-end"
          >
            +
          </Link>
        </div>

        {/* Right Card — Credentials */}
        <div className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all h-[230px]">
          <div>
            <div className="mb-6">
              <Image
                src={cred}
                alt="Signature"
                width={150}
                height={75}
                className="opacity-80"
              />
            </div>
            <p className="text-xs uppercase text-gray-400 tracking-widest mb-1">
              More About Me
            </p>
            <h3 className="text-lg font-semibold text-gray-900">Credentials</h3>
          </div>
          <Link
            href="#"
            className="inline-flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full text-blue-500 hover:bg-blue-50 transition self-end"
          >
            +
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;
