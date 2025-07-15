import React from "react";

export default () => {
  return (
    <main>
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h1 className="text-primary text-5xl uppercase mb-5">services</h1>
        <p className="text-3xl text-black/65">
          We don't just think out of the box but <br />
          redesign it and make it look cooler.
        </p>
      </section>
      <section>
        <div className="max-w-7xl mx-auto py-12 px-4">
          {/* Service Data */}
          {[
            {
              title: "DIGITAL MAKKETING",
              subtitle: "Marketing that hits harder than your FYP",
              desc: "Lorem ipsum dolor sit amet consectetur. Bo enim ac nunc dolor pellentesque.",
            },
            {
              title: "BRAND STORY TELLING",
              subtitle: "Lorem ipsum dolor sit amet consectetur.",
              desc: "Lorem ipsum dolor sit amet consectetur. Bo enim ac nunc dolor pellentesque.",
            },
            {
              title: "ADD FILM & COMMERCIALIZE",
              subtitle: "Lorem ipsum dolor sit amet consectetur.",
              desc: "Lorem ipsum dolor sit amet consectetur. Bo enim ac nunc dolor pellentesque.",
            },
            {
              title: "WEB DEVELOPMENT",
              subtitle: "Lorem ipsum dolor sit amet consectetur.",
              desc: "Lorem ipsum dolor sit amet consectetur. Bo enim ac nunc dolor pellentesque.",
            },
            {
              title: "MOBILE DEVELOPMENT",
              subtitle: "Lorem ipsum dolor sit amet consectetur.",
              desc: "Lorem ipsum dolor sit amet consectetur. Bo enim ac nunc dolor pellentesque.",
            },
          ].map((service, idx) => (
            <div key={service.title} className="mb-16">
              {/* Headings */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-2">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-orange-500 uppercase tracking-wide">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 text-base md:text-lg mt-1 mb-2 md:mb-0">
                    {service.subtitle}
                  </p>
                </div>
                <div className="text-gray-400 text-sm md:text-base md:text-right max-w-xs md:max-w-sm ml-auto">
                  {service.desc}
                </div>
              </div>
              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-[#F7F6F0] rounded shadow-sm p-5 flex flex-col gap-2 min-h-[120px]"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 34 34"
                      >
                        <path
                          fill="#000"
                          fillOpacity="0.7"
                          d="M12.75 6.375a6.375 6.375 0 1 1-12.75 0 6.375 6.375 0 0 1 12.75 0"
                        ></path>
                        <path
                          fill="#000"
                          fillOpacity="0.7"
                          d="M19.125 12.75a6.375 6.375 0 1 1 0-12.75 6.375 6.375 0 0 1 0 12.75M19.125 12.75h1.063a4.25 4.25 0 0 1 4.213 3.693l6.61-2.937A2.126 2.126 0 0 1 34 15.447v15.857a2.125 2.125 0 0 1-2.988 1.94l-6.61-2.936A4.25 4.25 0 0 1 20.186 34H4.25A4.25 4.25 0 0 1 0 29.75V17a4.25 4.25 0 0 1 4.25-4.25z"
                        ></path>
                      </svg>
                      <span className="font-bold text-base">
                        Short format reels
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Lorem ipsum dolor sit amet consectetur. Bo enim ac nunc
                      dolor pellentesque.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
