import React from "react";
import Image from "next/image";
import Link from "next/link";
import wone from "../../../public/images/wone.jpeg"
import wtwo from "../../../public/images/wtwo.jpeg"
import wthree from "../../../public/images/wthree.jpeg"
import wfour from "../../../public/images/wfour.jpeg"
import wfive from "../../../public/images/wfive.jpeg"
import wsix from "../../../public/images/wsix.jpeg"

const AllProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Dynamic",
      category: "Web Designing",
      image: wone,
    },
    {
      id: 2,
      title: "Seven Studio",
      category: "Mobile Designing",
      image: wtwo,
    },
    {
      id: 3,
      title: "Raven Studio",
      category: "Branding",
      image: wthree,
    },
    {
      id: 4,
      title: "Diesel H1",
      category: "Photography",
      image: wfour,
    },
    {
      id: 5,
      title: "Submarine",
      category: "Mobile Designing",
      image: wfive,
    },
    {
      id: 6,
      title: "Hydra Merc",
      category: "Web Designing",
      image: wsix,
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 text-center mb-16 flex items-center justify-center gap-4">
          <span className="text-blue-500 text-4xl">✷</span>
          ALL PROJECTS
          <span className="text-blue-500 text-4xl">✷</span>
        </h2>

        {/* Grid layout — 3 columns per row */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">


          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl p-1 flex flex-col justify-between shadow-sm hover:shadow-md transition-all w-full max-w-[350px]"
            >
              {/* Image */}
              <div className="w-full h-[230px] rounded-2xl overflow-hidden mb-6">
                 <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                /> 
              </div>

              {/* Info */}
              <div>
                <p className="text-xs uppercase text-gray-400 tracking-widest mb-3">
                  {project.category}
                </p>
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>
              </div>

              {/* Plus Icon */}
              <Link
                href="#"
                className="inline-flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full text-blue-500 hover:bg-blue-50 transition self-end mt-4"
              >
                +
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
