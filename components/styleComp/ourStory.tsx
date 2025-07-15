import React from "react";

function OurStory() {
  return (
    <section className="bg-white text-black py-16 px-6 md:px-20">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Who We Are <span className="text-orange-500">OUR STORY</span>
      </h2>
      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Column */}
        <div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Two friends, one shared dream. In 2017, their creative journey
            began, fueled by a passion for storytelling. 413 Studios took root
            in a hostel room, sprouting innovative short films, music videos,
            and a legacy that continues to unfold.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Today, we're proud to have evolved into a leading creative agency,
            handling esteemed accounts for EBG Group, Acer Electric, and many
            more.
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
