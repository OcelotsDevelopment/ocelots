import ContactSec from "@/components/styleComp/contactSec";
import OurStory from "@/components/styleComp/ourStory";
import PartnerComp from "@/components/styleComp/partnerComp";
import SwiperCard from "@/components/styleComp/swiperCard";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
export default function Home() {
  return (
    <>
      <section className="px-12">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-6xl">YOUR NEW DIGITAL</p>
            <div className="flex items-center gap-4">
              <button className="bg-primary rounded-4xl px-5 py-2.5 text-white ">
                Get Started
              </button>
              <p className="text-6xl">
                SOLUTION <span className="text-primary">PARTNER</span>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-10 mt-8">
            <div className="h-32 w-[1px] bg-black"></div>
            <div>
              <p className="text-black/35">
                Where creativity meets strategy, we help
                <br />
                brands shine through video, social media,
                <br />
                and design solutions."
              </p>
              <div className="flex items-center gap-4 text-center">
                <div>
                  <p className="text-4xl">12 +</p>
                  <p className="">
                    Years of
                    <br />
                    experence
                  </p>
                </div>
                <div>
                  <p className="text-4xl">30 +</p>
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
            className="w-4/6 h-auto mt-10"
          />
        </div>
      </section>

      <section className="py-20 px-12">
        <h2 className="text-center text-5xl md:text-5xl mb-14">
          We work the best{" "}
          <span className="text-primary text-7xl">Partners.</span>
        </h2>
        <PartnerComp />
      </section>

      <OurStory />

      <section className="bg-[#f9f7f2] p-10 border border-[#e3dccc]">
        <div className=" border border-[#FFBA6D] p-12 px-36 ">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            What We Are{" "}
            <span className="text-orange-500 text-5xl">OFFERING</span>
          </h2>
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-6 text-black/65">
            {/* Item */}
            <div className=" min-h-[250px]">
              <div className="flip-card h-full ">
                <div className="flip-card-inner h-full">
                  <div className="flip-card-front border border-orange-200 bg-[#f9f7f2] p-6 text-left h-full flex items-center justify-center ">
                    <h4 className="text-center text-3xl mb-2">
                      Social Media Marketing
                    </h4>
                  </div>
                  <div className="flip-card-back border border-orange-200 bg-[#f9f7f2] p-4 text-left h-full overflow-y-hidden">
                    <p className="text-lg font-bold mb-4">
                      Social Media Marketing
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Suscipit animi, tenetur impedit aspernatur consectetur
                      nisi repellendus corporis error quidem nulla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-orange-200 overflow-hidden">
              <img
                src="/assets/weo1.jpg"
                alt="Media"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
            <div className=" min-h-[250px]">
              <div className="flip-card h-full ">
                <div className="flip-card-inner h-full">
                  <div className="flip-card-front border border-orange-200 bg-[#f9f7f2] p-6 text-left h-full flex items-center justify-center ">
                    <h4 className="text-center text-3xl mb-2">SEO</h4>
                  </div>
                  <div className="flip-card-back border border-orange-200 bg-[#f9f7f2] p-4 text-left h-full overflow-y-hidden">
                    <p className="text-lg font-bold mb-4">
                      Search Engine Optimization(SEO)
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Suscipit animi, tenetur impedit aspernatur consectetur
                      nisi repellendus corporis error quidem nulla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-orange-200 overflow-hidden">
              <img
                src="/assets/weo2.png"
                alt="Production"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
            <div className=" min-h-[250px]">
              <div className="flip-card h-full ">
                <div className="flip-card-inner h-full">
                  <div className="flip-card-front border border-orange-200 bg-[#f9f7f2] p-6 text-left h-full flex items-center justify-center ">
                    <h4 className="text-center text-3xl mb-2">Web Design</h4>
                  </div>
                  <div className="flip-card-back border border-orange-200 bg-[#f9f7f2] p-4 text-left h-full overflow-y-hidden">
                    <p className="text-lg font-bold mb-4">Web Design</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Suscipit animi, tenetur impedit aspernatur consectetur
                      nisi repellendus corporis error quidem nulla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" min-h-[250px]">
              <div className="flip-card h-full ">
                <div className="flip-card-inner h-full">
                  <div className="flip-card-front border border-orange-200 bg-[#f9f7f2] p-6 text-left h-full flex items-center justify-center ">
                    <h4 className="text-center text-3xl mb-2">Ad Film</h4>
                  </div>
                  <div className="flip-card-back border border-orange-200 bg-[#f9f7f2] p-4 text-left h-full overflow-y-hidden">
                    <p className="text-lg font-bold mb-4">Ad Film</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Suscipit animi, tenetur impedit aspernatur consectetur
                      nisi repellendus corporis error quidem nulla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" min-h-[250px]">
              <div className="flip-card h-full ">
                <div className="flip-card-inner h-full">
                  <div className="flip-card-front border border-orange-200 bg-[#f9f7f2] p-6 text-left h-full flex items-center justify-center ">
                    <h4 className="text-center text-3xl mb-2">
                      Mobile App Development
                    </h4>
                  </div>
                  <div className="flip-card-back border border-orange-200 bg-[#f9f7f2] p-4 text-left h-full overflow-y-hidden">
                    <p className="text-lg font-bold mb-4">
                      Mobile App Development
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Suscipit animi, tenetur impedit aspernatur consectetur
                      nisi repellendus corporis error quidem nulla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" min-h-[250px]">
              <div className="flip-card h-full ">
                <div className="flip-card-inner h-full">
                  <div className="flip-card-front border border-orange-200 bg-[#f9f7f2] p-6 text-left h-full flex items-center justify-center ">
                    <h4 className="text-center text-3xl mb-2">
                      Brand Story Telling
                    </h4>
                  </div>
                  <div className="flip-card-back border border-orange-200 bg-[#f9f7f2] p-4 text-left h-full overflow-y-hidden">
                    <p className="text-lg font-bold mb-4">
                      Brand Story Telling
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Suscipit animi, tenetur impedit aspernatur consectetur
                      nisi repellendus corporis error quidem nulla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-orange-200 overflow-hidden">
              <img
                src="/assets/weo3.png"
                alt="Laptop"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          </div>
        </div>
      </section>
      <SwiperCard />
      <ContactSec />
    </>
  );
}
