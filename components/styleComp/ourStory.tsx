import React from "react";

function OurStory() {
  return (
    <section className="bg-white text-black py-16 px-6 md:px-20">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-normal mb-6 text-center">
        Our{" "}
        <span className="text-orange-500 font-semibold text-5xl align-middle">
          STORY
        </span>
      </h2>
      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Column */}
        <div className="flex flex-col gap-4">
          <p className="text-lg text-gray-700 leading-relaxed ">
            Ocelots began in 2024 with a clear purpose, to help brands grow through creative and result-driven digital marketing.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            In just a short time, we’ve worked with businesses of all sizes, helping them build stronger online presence, connect with audiences, and grow faster.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            But for us, this is just the beginning. Every brand has a story, and at Ocelots, we’re here to make sure yours gets the attention it deserves.
          </p>
        </div>
        {/* Founders Section */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Founder 1 */}
          <div className="text-center">
            <img
              src="assets/founder.png"
              alt="Naveen S Nair"
              className="w-56 h-72 object-cover rounded-md shadow-md mx-auto"
            />
            <p className="text-sm text-gray-500 mt-3">CEO &amp; Founder</p>
            <p className="font-semibold">Naveen S Nair</p>
          </div>
          {/* Founder 2 */}
          <div className="text-center">
            <img
              src="/assets/founder2.png"
              alt="Paramesh AP"
              className="w-56 h-72 object-cover rounded-md shadow-md mx-auto"
            />
            <p className="text-sm text-gray-500 mt-3">Co-Founder</p>
            <p className="font-semibold">Paramesh AP</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
