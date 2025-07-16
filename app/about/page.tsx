import OurStory from "@/components/styleComp/ourStory";
import React from "react";

function page() {
  return (
    <main>
      <section className="px-7 py-10 md:px-14 md:py-20 h-96 md:h-screen">
        <div className="w-full h-full relative">
          <img
            src="/assets/about-bg.png"
            alt="About Background"
            className="absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 inset-0 w-full h-full object-cover"
          />
          <div className="absolute z-20 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-3/4 ">
            <h1 className="md:text-6xl text-white font-semibold mb-9">
              Driving Digital Innovation Since 2017
            </h1>
            <p className="md:text-3xl text-white font-semibold ">
              Lorem ipsum dolor sit amet consectetur. Bibendum auctor
              pellentesque commodo ornare felis arcu donec ut nullam. Eget id
              vulputate pulvinar justo enim ac nunc dolor pellentesque.{" "}
            </p>
          </div>
        </div>
      </section>
      <OurStory />
      <section className="bg-[#F5F5EE] py-14">
        <h2 className="text-2xl md:text-4xl font-normal mb-6 text-center">
          Our{" "}
          <span className="text-orange-500 font-semibold text-5xl align-middle">
            VISSION
          </span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 py-16 px-4 md:px-0">
          {/* Left: Image */}
          <div className="w-full md:w-[520px] flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
              alt="Vision Presentation"
              className="rounded-lg shadow-lg w-full h-[300px] object-cover grayscale"
            />
          </div>
          {/* Right: Heading and Text */}
          <div className="flex-1 max-w-xl">
            <p className="text-gray-600 text-lg leading-relaxed text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur. Bibendum auctor
              pellentesque commodo ornare felis arcu donec ut nullam. Eget id
              vulputate pulvinar justo enim ac nunc dolor pellentesque.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-normal text-center mb-12">
            Meet <span className="text-orange-500 font-semibold">OUR TEAM</span>
          </h2>

          {/* Content Creators */}
          <div className="mb-12">
            <h3 className="text-lg md:text-xl font-medium mb-6">Content Creators</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-10 justify-items-center">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="w-48 h-80 relative overflow-hidden flex flex-col items-center">
                <div className="absolute top-0 left-0 w-full h-full rounded-tl-[68px] rounded-tr-none rounded-br-none rounded-bl-none overflow-hidden">
                  <div className="w-full h-full bg-orange-500" />
                </div>
                <img
                  src="/assets/team.png"
                  alt="Team Member"
                  className=" h-9/12 object-cover grayscale z-10 absolute -right-5 bottom-0"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', borderTopLeftRadius: '48px' }}
                />
                <div className="absolute top-7 left-7 z-20 text-white text-sm font-light">
                  <span className="block font-normal">Lorem ipsum</span>
                  <span className="block font-semibold">creator</span>
                </div>
              </div>
              ))}
            </div>
          </div>

          {/* Developers */}
          <div className="mb-4">
            <h3 className="text-lg md:text-xl font-medium mb-6">Developers</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-10 justify-items-center">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-48 h-80 relative overflow-hidden flex flex-col items-center">
                  <div className="absolute top-0 left-0 w-full h-full rounded-tl-[68px] rounded-tr-none rounded-br-none rounded-bl-none overflow-hidden">
                    <div className="w-full h-full bg-orange-500" />
                  </div>
                  <img
                    src="/assets/team.png"
                    alt="Team Member"
                    className=" h-9/12 object-cover grayscale z-10 absolute -right-5 bottom-0"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', borderTopLeftRadius: '48px' }}
                  />
                  <div className="absolute top-7 left-7 z-20 text-white text-sm font-light">
                    <span className="block font-normal">Lorem ipsum</span>
                    <span className="block font-semibold">creator</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
