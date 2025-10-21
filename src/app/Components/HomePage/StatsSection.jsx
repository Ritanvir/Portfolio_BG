import Link from "next/link";

export default function StatsSection() {
  return (
    <section className="bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Left: Stats (3 cards) */}
          <div className="md:col-span-3 flex justify-between gap-4">
            {/* Card 1 */}
            <div className="flex-1 bg-white rounded-3xl p-6 flex flex-col justify-center items-center shadow-sm hover:shadow-md transition h-[160px]">
              <h3 className="text-3xl font-semibold text-blue-500 mb-2">07</h3>
              <p className="text-xs uppercase text-gray-400 text-center tracking-widest leading-snug">
                Years <br /> Experience
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex-1 bg-white rounded-3xl p-6 flex flex-col justify-center items-center shadow-sm hover:shadow-md transition h-[160px]">
              <h3 className="text-3xl font-semibold text-blue-500 mb-2">
                +125
              </h3>
              <p className="text-xs uppercase text-gray-400 text-center tracking-widest leading-snug">
                Clients <br /> Worldwide
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex-1 bg-white rounded-3xl p-6 flex flex-col justify-center items-center shadow-sm hover:shadow-md transition h-[160px]">
              <h3 className="text-3xl font-semibold text-blue-500 mb-2">
                +210
              </h3>
              <p className="text-xs uppercase text-gray-400 text-center tracking-widest leading-snug">
                Total <br /> Projects
              </p>
            </div>
          </div>

          {/* Right: CTA Section */}
          <div className="md:col-span-2 bg-white rounded-3xl p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition h-[160px]">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 leading-tight">
                Let&apos;s <br />
                work <span className="text-blue-500">together.</span>
              </h2>
            </div>

            <Link
              href="#"
              className="inline-flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full text-blue-500 hover:bg-blue-50 transition self-end mt-2"
            >
              +
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
