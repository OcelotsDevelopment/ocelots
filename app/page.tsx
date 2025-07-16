import ContactSec from "@/components/styleComp/contactSec";
import OurStory from "@/components/styleComp/ourStory";
import PartnerComp from "@/components/styleComp/partnerComp";
import SwiperCard from "@/components/styleComp/swiperCard";

export default function Home() {
  return (
    <>
      <section className="px-6 md:px-12 mt-5">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <p className="text-2xl md:text-6xl">YOUR NEW DIGITAL</p>
            <div className="flex items-center gap-4">
              <button className="bg-primary rounded-4xl px-2.5 py-2 md:px-5 md:py-2.5 text-white ">
                Get Started
              </button>
              <p className="text-2xl md:text-6xl">
                SOLUTION <span className="text-primary">PARTNER</span>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 md:gap-10 mt-8">
            <div className="h-32 w-[1px] bg-black"></div>
            <div>
              <p className="text-black/35 mb-2">
                Where creativity meets strategy, we help
                <br />
                brands shine through video, social media,
                <br />
                and design solutions."
              </p>
              <div className="flex items-center gap-4 text-center">
                <div>
                  <p className="text-3xl md:text-4xl">12 +</p>
                  <p className="">
                    Years of
                    <br />
                    experence
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl">30 +</p>
                  <p>
                    Trusted
                    <br />
                    partners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <img
            src="/assets/landing_img.png"
            alt="Hero Image"
            className="w-full md:w-4/6 h-full md:h-auto md:mt-10"
          />
        </div>
      </section>

      <section className="py-20 px-2 md:px-12">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl mb-8 md:mb-14">
          We work the best{" "}
          <span className="text-primary text-4xl sm:text-5xl md:text-7xl block sm:inline">Partners.</span>
        </h2>
        <PartnerComp />
      </section>

      <OurStory />

      <section className="bg-[#f9f7f2] p-4 sm:p-6 md:p-10 border border-[#e3dccc]">
        <div className="border border-[#FFBA6D] p-4 sm:p-8 md:p-12 md:px-24 lg:px-36">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-8 md:mb-12">
            What We Are{" "}
            <span className="text-orange-500 text-3xl sm:text-4xl md:text-5xl">OFFERING</span>
          </h2>
          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-black/65">
            {/* Item */}
            <div className="min-h-[150px] sm:min-h-[220px] md:min-h-[250px]">
              <div className="flip-card h-full">
                <div className="flip-card-inner h-full">
                  <div className="flip-card-front border border-orange-200 bg-[#f9f7f2] p-4 sm:p-6 text-left h-full flex items-center justify-center">
                    <h4 className="text-center text-xl sm:text-3xl mb-2">
                      Social Media Marketing
                    </h4>
                  </div>
                  <div className="flip-card-back border border-orange-200 bg-[#f9f7f2] p-3 sm:p-4 text-left h-full overflow-y-hidden">
                    <p className="text-base sm:text-lg font-bold mb-2 sm:mb-4">
                      Social Media Marketing
                    </p>
                    <p className="text-xs md:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Suscipit animi, tenetur impedit aspernatur consectetur
                      nisi repellendus corporis error quidem nulla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-orange-200 overflow-hidden min-h-[150px] sm:min-h-[220px] md:min-h-[250px] flex">
              <img
                src="/assets/weo1.jpg"
                alt="Media"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
            <div className="min-h-[150px] sm:min-h-[220px] md:min-h-[250px]">
              <div className="flip-card h-full">
                <div className="flip-card-inner h-full">
                  <div className="flip-card-front border border-orange-200 bg-[#f9f7f2] p-4 sm:p-6 text-left h-full flex items-center justify-center">
                    <h4 className="text-center text-xl sm:text-3xl mb-2">SEO</h4>
                  </div>
                  <div className="flip-card-back border border-orange-200 bg-[#f9f7f2] p-3 sm:p-4 text-left h-full overflow-y-hidden">
                    <p className="text-base sm:text-lg font-bold mb-2 sm:mb-4">
                      Search Engine Optimization(SEO)
                    </p>
                    <p className="text-xs md:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Suscipit animi, tenetur impedit aspernatur consectetur
                      nisi repellendus corporis error quidem nulla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-orange-200 overflow-hidden min-h-[150px] sm:min-h-[220px] md:min-h-[250px] flex">
              <img
                src="/assets/weo2.png"
                alt="Production"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
            <div className="min-h-[150px] sm:min-h-[220px] md:min-h-[250px]">
              <div className="flip-card h-full">
                <div className="flip-card-inner h-full">
                  <div className="flip-card-front border border-orange-200 bg-[#f9f7f2] p-4 sm:p-6 text-left h-full flex items-center justify-center">
                    <h4 className="text-center text-xl sm:text-3xl mb-2">Web Design</h4>
                  </div>
                  <div className="flip-card-back border border-orange-200 bg-[#f9f7f2] p-3 sm:p-4 text-left h-full overflow-y-hidden">
                    <p className="text-base sm:text-lg font-bold mb-2 sm:mb-4">Web Design</p>
                    <p className="text-xs md:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Suscipit animi, tenetur impedit aspernatur consectetur
                      nisi repellendus corporis error quidem nulla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-h-[150px] sm:min-h-[220px] md:min-h-[250px]">
              <div className="flip-card h-full">
                <div className="flip-card-inner h-full">
                  <div className="flip-card-front border border-orange-200 bg-[#f9f7f2] p-4 sm:p-6 text-left h-full flex items-center justify-center">
                    <h4 className="text-center text-xl sm:text-3xl mb-2">Ad Film</h4>
                  </div>
                  <div className="flip-card-back border border-orange-200 bg-[#f9f7f2] p-3 sm:p-4 text-left h-full overflow-y-hidden">
                    <p className="text-base sm:text-lg font-bold mb-2 sm:mb-4">Ad Film</p>
                    <p className="text-xs md:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Suscipit animi, tenetur impedit aspernatur consectetur
                      nisi repellendus corporis error quidem nulla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-h-[150px] sm:min-h-[220px] md:min-h-[250px]">
              <div className="flip-card h-full">
                <div className="flip-card-inner h-full">
                  <div className="flip-card-front border border-orange-200 bg-[#f9f7f2] p-4 sm:p-6 text-left h-full flex items-center justify-center">
                    <h4 className="text-center text-xl sm:text-3xl mb-2">
                      Mobile App Development
                    </h4>
                  </div>
                  <div className="flip-card-back border border-orange-200 bg-[#f9f7f2] p-3 sm:p-4 text-left h-full overflow-y-hidden">
                    <p className="text-base sm:text-lg font-bold mb-2 sm:mb-4">
                      Mobile App Development
                    </p>
                    <p className="text-xs md:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Suscipit animi, tenetur impedit aspernatur consectetur
                      nisi repellendus corporis error quidem nulla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-h-[150px] sm:min-h-[220px] md:min-h-[250px]">
              <div className="flip-card h-full">
                <div className="flip-card-inner h-full">
                  <div className="flip-card-front border border-orange-200 bg-[#f9f7f2] p-4 sm:p-6 text-left h-full flex items-center justify-center">
                    <h4 className="text-center text-xl sm:text-3xl mb-2">
                      Brand Story Telling
                    </h4>
                  </div>
                  <div className="flip-card-back border border-orange-200 bg-[#f9f7f2] p-3 sm:p-4 text-left h-full overflow-y-hidden">
                    <p className="text-base sm:text-lg font-bold mb-2 sm:mb-4">
                      Brand Story Telling
                    </p>
                    <p className="text-xs md:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Suscipit animi, tenetur impedit aspernatur consectetur
                      nisi repellendus corporis error quidem nulla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-orange-200 overflow-hidden min-h-[150px] sm:min-h-[220px] md:min-h-[250px] flex">
              <img
                src="/assets/weo3.png"
                alt="Laptop"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-10 md:mb-12">
          Work{" "}
          <span className="text-orange-500 text-3xl sm:text-4xl md:text-5xl uppercase block sm:inline">
            Casw study
          </span>
        </h2>
        <SwiperCard />
      </section>
      <ContactSec />
    </>
  );
}
