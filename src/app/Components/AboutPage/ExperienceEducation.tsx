import React from "react";

const ExperienceEducation = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Left: Experience */}
        <div className="w-full md:w-1/2 bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition">
          <h3 className="text-sm font-semibold text-gray-900 uppercase mb-8">
            Experience
          </h3>

          {/* Experience Item 1 */}
          <div className="mb-8">
            <p className="text-sm text-gray-400 mb-1">2007 - 2017</p>
            <h4 className="text-blue-500 font-medium mb-1">
              Framer Designer & Developer
            </h4>
            <p className="text-sm text-gray-400">Bluebase Designs</p>
          </div>

          {/* Experience Item 2 */}
          <div>
            <p className="text-sm text-gray-400 mb-1">2017 - 2023</p>
            <h4 className="text-blue-500 font-medium mb-1">
              Front-End Developer
            </h4>
            <p className="text-sm text-gray-400">Larsen & Toubro</p>
          </div>
        </div>

        {/* Right: Education */}
        <div className="w-full md:w-1/2 bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition">
          <h3 className="text-sm font-semibold text-gray-900 uppercase mb-8">
            Education
          </h3>

          {/* Education Item 1 */}
          <div className="mb-8">
            <p className="text-sm text-gray-400 mb-1">2004 - 2007</p>
            <h4 className="text-blue-500 font-medium mb-1">
              Bachelor Degree in Psychology
            </h4>
            <p className="text-sm text-gray-400">University of California</p>
          </div>

          {/* Education Item 2 */}
          <div>
            <p className="text-sm text-gray-400 mb-1">2007 - 2009</p>
            <h4 className="text-blue-500 font-medium mb-1">
              Master Degree in Designing
            </h4>
            <p className="text-sm text-gray-400">University of Texas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
