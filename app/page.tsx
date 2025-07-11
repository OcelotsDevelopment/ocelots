// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>

      <section className="px-12">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-6xl">YOUR NEW DIGITAL</p>
            <div className="flex items-center gap-4">
              <button className="bg-primary rounded-4xl px-5 py-2.5 text-white ">Get Started</button>
              <p className="text-6xl">SOLUTION <span className="text-primary">PARTNER</span></p>
            </div>
          </div>

          <div className="flex items-start gap-10 mt-8">
            <div className="h-32 w-[1px] bg-black"></div>
            <div>
              <p className="text-black/35">Where creativity meets strategy, we help<br />brands shine through video, social media,<br />and design solutions."</p>
              <div className="flex items-center gap-4 text-center">
                <div>
                  <p className="text-4xl">12 +</p>
                  <p className="">Years of<br />experence</p>
                </div>
                <div>
                  <p className="text-4xl">30 +</p>
                  <p>Trusted<br />partners</p>
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
          We work the best <span className="text-primary text-7xl">Partners.</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-12">
          {/* Row 1 */}
          <div className="flex justify-center">
            <img src="/partners/acer.png" alt="EBG" className="bg-white rounded shadow-md p-4 h-16 object-contain" />
          </div>
          <div className="flex justify-center">
            <img src="/partners/ebg.png" alt="Acer" className="bg-white rounded shadow-md p-4 h-16 object-contain" />
          </div>
          <div className="flex justify-center">
            <img src="/partners/brillen.png" alt="Brillen" className="bg-white rounded shadow-md p-4 h-16 object-contain" />
          </div>
          <div className="flex justify-center">
            <img src="/partners/daewoo.png" alt="Daewoo" className="bg-white rounded shadow-md p-4 h-16 object-contain" />
          </div>
          <div className="flex justify-center">
            <img src="/partners/aaa.png" alt="Adhira Yappa Coffee" className="bg-white rounded shadow-md p-4 h-16 object-contain" />
          </div>
          {/* Row 2 */}
          <div className="flex justify-center">
            <img src="/partners/magicstone.png" alt="Magic Stone" className="bg-white rounded shadow-md p-4 h-16 object-contain" />
          </div>
          <div className="flex justify-center">
            <img src="/partners/nonstop.png" alt="Nonstop" className="bg-white rounded shadow-md p-4 h-16 object-contain" />
          </div>
          <div className="flex justify-center">
            <img src="/partners/ebgreality.png" alt="EBG Realty" className="bg-white rounded shadow-md p-4 h-16 object-contain" />
          </div>
          <div className="flex justify-center">
            <img src="/partners/ebikego.png" alt="eBikeGo" className="bg-white rounded shadow-md p-4 h-16 object-contain" />
          </div>
          <div className="flex justify-center">
            <img src="/partners/ntr.png" alt="NTP" className="bg-white rounded shadow-md p-4 h-16 object-contain" />
          </div>
          {/* Row 3 */}
          <div className="flex justify-center">
            <img src="/partners/vajram.png" alt="Vajram Electric" className="bg-white rounded shadow-md p-4 h-16 object-contain" />
          </div>
          <div className="flex justify-center">
            <img src="/partners/flamingo.png" alt="Flamingo Villas" className="bg-white rounded shadow-md p-4 h-16 object-contain" />
          </div>
          <div className="flex justify-center">
            <img src="/partners/nuvnu.png" alt="Nuvun" className="bg-white rounded shadow-md p-4 h-16 object-contain" />
          </div>
          <div className="flex justify-center">
            <img src="/partners/prevekta.png" alt="Prevekta Ayurveda" className="bg-white rounded shadow-md p-4 h-16 object-contain" />
          </div>
          <div className="flex justify-center">
            <img src="/partners/carlton.png" alt="Carlton" className="bg-white rounded shadow-md p-4 h-16 object-contain" />
          </div>
          {/* Row 4 */}
          <div className="flex justify-center">
            <img src="/partners/fractro.png" alt="Fractro" className="bg-white rounded shadow-md p-4 h-16 object-contain" />
          </div>
          <div className="flex justify-center">
            <img src="/partners/sainath.png" alt="Chaturvatika" className="bg-white rounded shadow-md p-4 h-16 object-contain" />
          </div>
          <div className="flex justify-center">
            <img src="/partners/sweetmagic.png" alt="Sweet Magic" className="bg-white rounded shadow-md p-4 h-16 object-contain" />
          </div>
          <div className="flex justify-center">
            <img src="/partners/renew.png" alt="Renew Aesthetics" className="bg-white rounded shadow-md p-4 h-16 object-contain" />
          </div>
          <div></div>
        </div>
      </section>

      <section>
        
      </section>
    </>
  );
}
