import Image from "next/image";
import Link from "next/link";
import imgfont from "../../../public/images/home2.png"

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Grid layout — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1️⃣ Left Card — Blog (GFonts) */}
          <div className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all h-[260px]">
            <div>
              <div className="mb-6">
                 <Image
                  src={imgfont}
                  alt="GFonts"
                  width={150}
                  height={90}
                  className="object-contain"
                /> 
              </div>
              <p className="text-xs uppercase text-gray-400 tracking-widest mb-1">
                Blog
              </p>
              <h3 className="text-lg font-semibold text-gray-900">GFonts</h3>
            </div>
            <Link
              href="#"
              className="inline-flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full text-blue-500 hover:bg-blue-50 transition self-end"
            >
              +
            </Link>
          </div>

          {/* 2️⃣ Middle Card — Services Offering */}
          <div className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all h-[260px]">
            <div>
              <div className="flex justify-between items-center mb-6 text-blue-500">
                <i className="bx bx-camera text-3xl"></i>
                <i className="bx bx-pen text-3xl"></i>
                <i className="bx bx-palette text-3xl"></i>
                <i className="bx bx-mobile-alt text-3xl"></i>
              </div>
              <p className="text-xs uppercase text-gray-400 tracking-widest mb-1">
                Specialization
              </p>
              <h3 className="text-lg font-semibold text-gray-900">
                Services Offering
              </h3>
            </div>
            <Link
              href="#"
              className="inline-flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full text-blue-500 hover:bg-blue-50 transition self-end"
            >
              +
            </Link>
          </div>

          {/* 3️⃣ Right Card — Profiles */}
          <div className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all h-[260px]">
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
        </div>
      </div>
    </section>
  );
}
