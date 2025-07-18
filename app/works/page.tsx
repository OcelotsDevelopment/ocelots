// "use client"

import ContactSec from "@/components/styleComp/contactSec";
import SlideOne from "@/components/styleComp/workSlide/SlideOne";
import React from "react";
// import SlideOne from "../../components/styleComp/workSlide/SlideOne";

function page() {
  return (
    <main>
      <section className="p-14">
        <h1 className="text-4xl mb-14 text-black/65">
          With OCELOTS, more than <span className="text-primary">30</span>{" "}
          clients stood <br />
          out and made their brands go big bang.
        </h1>

        <SlideOne />
      </section>

      {/* <section className="p-14">
        <p className="text-primary text-5xl uppercase"> SHOW REEL</p>
      </section> */}

      <section className="p-14">
        <div className="">
          <p className="text-primary text-5xl uppercase mb-6"> Websites</p>
          <div className="flex flex-col md:flex-row items-start gap-7 text-black/65">
            <div className="w-1/2">
              <img
                src="/assets/web1.png"
                alt=""
                className="h-[448px] w-full "
              />
              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates officia possimus, quasi eligendi fugiat doloribus
                tempora ipsam ab suscipit ea dignissimos numquam fugit libero
                quibusdam.
              </p> */}
            </div>
            <div className="w-1/2">
              <img
                src="/assets/web2.png"
                alt="" 
                className="h-[448px] w-full "
              />
              {/* <p className="text-black/65">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates officia possimus, quasi eligendi fugiat doloribus
                tempora ipsam ab suscipit ea dignissimos numquam fugit libero
                quibusdam.
              </p> */}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-[#F5F5EE] py-16 flex flex-col items-center">
          <h2 className="text-2xl md:text-4xl font-normal text-center mb-16">
            How We <span className="text-orange-500 font-semibold">WORK</span>
          </h2>
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-row items-center justify-center w-full max-w-5xl">
              {[1, 2, 3, 4, 5].map((num, idx) => (
                <div
                  key={num}
                  className="flex flex-col items-center flex-1 min-w-[120px]"
                >
                  <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center text-white text-4xl font-medium shadow-lg z-10 border-4 border-[#F5F5EE]">
                      {num}
                    </div>
                    {idx < 4 && (
                      <div
                        className="absolute top-1/2 right-[-122px] w-[120px] h-0.5 border-t border-dashed border-gray-400 z-0 hidden md:block"
                        style={{
                          borderWidth: "2px",
                          borderColor: "#bdbdbd",
                          borderStyle: "dashed",
                        }}
                      ></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-row items-start justify-center w-full max-w-5xl mt-8">
              <div className="flex-1 min-w-[120px] text-center text-gray-800 text-xl font-normal">
                <span>
                  Assess The
                  <br />
                  Project
                </span>
              </div>
              <div className="flex-1 min-w-[120px] text-center text-gray-800 text-xl font-normal">
                <span>The Breif</span>
              </div>
              <div className="flex-1 min-w-[120px] text-center text-gray-800 text-xl font-normal">
                <span>
                  Budget &amp;
                  <br />
                  Schedule
                </span>
              </div>
              <div className="flex-1 min-w-[120px] text-center text-gray-800 text-xl font-normal">
                <span>
                  Build The
                  <br />
                  Product
                </span>
              </div>
              <div className="flex-1 min-w-[120px] text-center text-gray-800 text-xl font-normal">
                <span>
                  Test &amp;
                  <br />
                  Feedback
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactSec />
    </main>
  );
}

export default page;
