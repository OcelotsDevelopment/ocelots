import SlideOne from "@/components/styleComp/workSlide/SlideOne";
import React from "react";

export default () => {
  return (
    <main>
      <section className=" py-12 px-4">
        <h1 className="text-primary text-5xl uppercase mb-5">services</h1>
        <p className="text-3xl text-black/65 mb-10 ">
          A Complete Set of Services to<br />
          Build and Boost Your Brand.
        </p>
        <SlideOne />
      </section>
      <section>
        <div className=" py-12 px-40">
          {/* Service Data */}
          {[
            {
              title: "DIGITAL MAKKETING",
              subtitle: "Make Your Brand Social",
              desc: "We create posts people love, helping your brand grow and connect with the right audience online.",
              secTitle: "Digital That Performs. Stories That Stick.",
              sentence: "We’ve driven Daewoo’s re-entry into the market with high-conversion content, amplified Acer’s EV presence with sharp digital storytelling, and turned Adhira & Appa into a brand that people crave and share. At Ocelots, digital marketing means performance-driven creativity,  built to stop thumbs, spark action, and scale impact.",
              img: "digimg.png"
            },
            {
              title: "BRAND STORY TELLING",
              subtitle: "Stories That Build Trust",
              desc: "We share your brand’s journey in a way that feels real and connects with your audience.",
              secTitle: "We Think in Bold. Build in Story. Move in Strategy.",
              sentence: "Ocelots makes brands impossible to scroll past. Every word, pixel, and plan is built to move culture and market at once. From EVs that spark change to cafes that carry memory, we turn businesses into brands people remember. If you're building with meaning, you're in the right place.",
              img: "brandStory.png"
            },
            {
              title: "ADD FILM & COMMERCIALIZE",
              subtitle: "Ads That Stick",
              desc: "Catchy ad films that share your story in a way people notice and remember.",
              secTitle: "Storytelling That Moves. Films That Matter.",
              sentence: "From Daewoo’s comeback story to Acer’s electric dreams, from the nostalgia of Adhira & Appa Coffee to the quiet luxury of Nuvun Homes, the design soul of Brillen, and the healing journeys at Carlton Wellness,  every film we craft is rooted in emotion, purpose, and visual power. For us, storytelling is how brands earn attention, emotion, and loyalty.",
              img: "adfilm.png"
            },
            {
              title: "WEB DEVELOPMENT",
              subtitle: "Websites People Love",
              desc: "Easy-to-use, modern websites that make visitors stay longer and return often.",
              secTitle: "More Than Code. It’s Your Brand’s First Impression.",
              sentence: "We’ve built digital homes for brands like Daewoo, Acer, Adhira & Appa, Nuvun, and Brillen, each one engineered to feel premium, perform flawlessly, and tell a story. At Ocelots, we design websites that don’t just load fast, they land harder, sell smarter, and stay memorable.",
              img: "webdev.png"
            },
            {
              title: "MOBILE DEVELOPMENT",
              subtitle: "Make It Simple With an App",
              desc: "Mobile apps designed to make your services quick, easy, and always accessible.",
              secTitle: "In Your Pocket. On Point.",
              sentence: "We craft mobile apps that feel effortless and function flawlessly,  blending sleek UI with powerful backends. At Ocelots, every tap is intentional, every flow is intuitive, and every feature is built to scale. Because great apps aren’t just used,  they’re lived with.",
              img: "mobilDev.png"
            },
          ].map((service, idx) => (
            <div key={service.title} className="mb-16 ">
              {/* Headings */}
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 lg:mb-14 gap-4">
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-500 uppercase tracking-wide">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 text-sm md:text-base lg:text-lg mt-2">
                    {service.subtitle}
                  </p>
                </div>
                <div className="text-gray-400 text-sm md:text-base lg:text-right max-w-full lg:max-w-sm">
                  {service.desc}
                </div>
              </div>
              {/* Cards Grid */}

              <div className={`flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                <div className="w-full lg:w-1/2 shadow-lg rounded-xl p-6 lg:p-8 bg-white">
                  <h2 className="font-bold text-xl md:text-2xl mb-4 lg:mb-6 text-gray-800">
                    {service.secTitle}
                  </h2>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {service.sentence}
                  </p>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center">
                  <img 
                    src={"/assets/" + service.img} 
                    alt={service.title} 
                    className="h-64 md:h-80 lg:h-96 w-full object-cover rounded-lg shadow-md" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>


      </section>
    </main>
  );
};
