import Image from "next/image";
import Link from "next/link";

import img1 from "../../../public/images/home1.png"
import creden from "../../../public/images/credentials.png"
import img2 from "../../../public/images/home3.png"

export default function FeaturedSection() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Text Bar */}
        <div className="bg-white/70 backdrop-blur-sm text-xs md:text-sm text-gray-500 tracking-wide rounded-full py-3 px-6 mb-10 flex flex-wrap justify-center gap-3 shadow-sm">
          <span>TURED</span>
          <span className="text-blue-500 font-medium">LATEST WORK AND FEATURED</span>
          <span>LATEST WORK AND</span>
          <span className="text-blue-500 font-medium">FEATURED</span>
          <span>LATEST</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Left: Profile (takes more width) */}
          <div className="md:col-span-2 bg-white rounded-3xl p-8 flex flex-col justify-center shadow-sm hover:shadow-md transition-all h-[350px]">
            <div className="flex items-center space-x-6">
              {/* Image */}
              <div className="relative w-40 h-40 rounded-3xl overflow-hidden bg-gradient-to-tr from-blue-400 to-blue-200 flex-shrink-0">
                <Image
                  src={img1}
                  alt="Tanvir"
                  fill
                  className="object-cover"
                />
              </div>


              {/* Text */}
              <div className="flex flex-col justify-center">
                <p className="text-xs uppercase text-gray-400 tracking-widest mb-1">
                  A Web Designer
                </p>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2 leading-tight">
                  Tanvir.
                </h2>
                <p className="text-sm text-gray-500 mb-4 leading-snug">
                  I am a Web Designer based in San Francisco.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full text-blue-500 hover:bg-blue-50 transition"
                >
                  +
                </Link>
              </div>
            </div>
          </div>

          {/* Middle: Credentials (slightly smaller) */}
          <div className="md:col-span-1 bg-white rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all h-[250px] self-end">

            <div className="flex flex-col items-start">
              <div className="mb-6">
                <Image
                  src={creden}
                  alt="Signature"
                  width={150}
                  height={75}
                  className="opacity-95"
                />
              </div>
              <p className="text-xs uppercase text-gray-400 tracking-widest mb-1">
                More About Me
              </p>
              <h3 className="text-lg font-semibold text-gray-900 pt-2 pb-20">Credentials</h3>

            </div>

            <Link
              href="#"
              className="flex items-center justify-center w-0.10 h-0.10 bg-gray-100 rounded-full text-blue-500 hover:bg-blue-50 transition self-end"
            >
              +
            </Link>
          </div>

          {/* Right: Projects (slightly smaller) */}
          <div className="md:col-span-1 bg-white rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all h-[250px] self-end">
            <div className="flex flex-col items-start">
              <div className="w-full mb-2 rounded-2xl overflow-hidden">
                 <Image
                  src={img2}
                  alt="Meditation Course"
                  width={250}
                  height={100}
                  className="opacity-95"
                /> 
              </div>
              <p className="text-xs uppercase text-gray-400 tracking-widest mb-1">
                Showcase
              </p>
              <h3 className="text-lg font-semibold text-gray-900">Projects</h3>
            </div>

            <Link
              href="#"
              className="inline-flex items-center justify-center w-1 h-1 bg-gray-100 rounded-full text-blue-500 hover:bg-blue-50 transition self-end"
            >
              +
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
