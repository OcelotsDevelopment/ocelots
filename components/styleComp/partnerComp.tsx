import React from 'react'

type Company = {
    img: string;
    cls: string;
};

const companyList: Company[] = [
    {
        img: "/partners/acer.png",
        cls: "h-10"
    },
    {
        img: "/partners/ebg.png",
        cls: "h-auto"
    },
    {
        img: "/partners/brillen.png",
        cls: "h-auto"
    },
    {
        img: "/partners/daewoo.png",
        cls: "h-auto"
    },
    {
        img: "/partners/aaa.png",
        cls: "h-16"
    },
    {
        img: "/partners/magicstone.png",
        cls: "h-auto"
    },
    {
        img: "/partners/nonstop.png",
        cls: "h-auto"
    },
    {
        img: "/partners/ebgreality.png",
        cls: "h-16"
    },
    {
        img: "/partners/ebikego.png",
        cls: "h-auto"
    },
    {
        img: "/partners/ntr.png",
        cls: "h-16"
    },
    {
        img: "/partners/vajram.png",
        cls: "h-auto"
    },
    {
        img: "/partners/flamingo1.png",
        cls: "h-auto"
    },
    {
        img: "/partners/nuvnu.png",
        cls: "h-auto"
    },
    {
        img: "/partners/prevekta.png",
        cls: "h-24 w-32 h-auto"
    },
    {
        img: "/partners/carlton.png",
        cls: "h-auto"
    },
    {
        img: "/partners/fractro.png",
        cls: "h-auto"
    },
    {
        img: "/partners/sainath.png",
        cls: "h-auto w-56"
    },
    {
        img: "/partners/sweetmagic.png",
        cls: "h-auto"
    },
    {
        img: "/partners/renew.png",
        cls: "h-auto"
    },
]

export default function PartnerComp() {

    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 w-fit">
                {companyList.map((e: Company, i) => (
                    <div key={i} className="flex items-center justify-center p-6 " style={{
                        borderRight: (i + 1) % 5 === 0 ? "none" : "1px solid #CDCBCB",
                        borderBottom: i >= (companyList.length) - 4 ? "none" : "1px solid #CDCBCB"
                    }} >
                        <div className="bg-white rounded shadow-md p-4 h-20 w-40 flex justify-center items-center overflow-hidden">
                            <img src={e.img} alt="EBG" className={"object-contain "+e.cls} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


{/* <div className="bg-white rounded shadow-md p-4 h-16 flex justify-center">
<img src="/partners/acer.png" alt="EBG" className=" object-contain" />
</div>
<div className="bg-white rounded shadow-md p-4 h-16 flex justify-center">
<img src="/partners/ebg.png" alt="Acer" className="object-contain" />
</div>
<div className="fbg-white rounded shadow-md p-4 h-16 lex justify-center">
<img src="/partners/brillen.png" alt="Brillen" className="object-contain" />
</div>
<div className="bg-white rounded shadow-md p-4 h-16 flex justify-center">
<img src="/partners/daewoo.png" alt="Daewoo" className="object-contain" />
</div>
<div className="bg-white rounded shadow-md p-4 h-16 flex justify-center">
<img src="/partners/aaa.png" alt="Adhira Yappa Coffee" className="object-contain" />
</div>
{/* Row 2 */}
{/* <div className="bg-white rounded shadow-md p-4 h-16 flex justify-center">
<img src="/partners/magicstone.png" alt="Magic Stone" className="object-contain" />
</div>
<div className="bg-white rounded shadow-md p-4 h-16 flex justify-center">
<img src="/partners/nonstop.png" alt="Nonstop" className="object-contain" />
</div>
<div className="bg-white rounded shadow-md p-4 h-16 flex justify-center">
<img src="/partners/ebgreality.png" alt="EBG Realty" className="object-contain" />
</div>
<div className="bg-white rounded shadow-md p-4 h-16 flex justify-center">
<img src="/partners/ebikego.png" alt="eBikeGo" className="object-contain" />
</div>
<div className="bg-white rounded shadow-md p-4 h-16 flex justify-center">
<img src="/partners/ntr.png" alt="NTP" className="object-contain" />
</div> */}
{/* Row 3 */ }
{/* <div className="bg-white rounded shadow-md p-4 h-16 flex justify-center">
<img src="/partners/vajram.png" alt="Vajram Electric" className="object-contain" />
</div>
<div className="bg-white rounded shadow-md p-4 h-16 flex justify-center">
<img src="/partners/flamingo.png" alt="Flamingo Villas" className="object-contain" />
</div>
<div className="bg-white rounded shadow-md p-4 h-16 flex justify-center">
<img src="/partners/nuvnu.png" alt="Nuvun" className="object-contain" />
</div>
<div className="bg-white rounded shadow-md p-4 h-16 flex justify-center">
<img src="/partners/prevekta.png" alt="Prevekta Ayurveda" className="object-contain" />
</div>
<div className="bg-white rounded shadow-md p-4 h-16 flex justify-center">
<img src="/partners/carlton.png" alt="Carlton" className="object-contain" />
</div> */}
{/* Row 4 */ }
{/* <div className="bg-white rounded shadow-md p-4 h-16 flex justify-center">
<img src="/partners/fractro.png" alt="Fractro" className="object-contain" />
</div>
<div className="bg-white rounded shadow-md p-4 h-16 flex justify-center">
<img src="/partners/sainath.png" alt="Chaturvatika" className="object-contain" />
</div>
<div className="bg-white rounded shadow-md p-4 h-16 flex justify-center">
<img src="/partners/sweetmagic.png" alt="Sweet Magic" className="object-contain" />
</div>
<div className="bg-white rounded shadow-md p-4 h-16 flex justify-center">
<img src="/partners/renew.png" alt="Renew Aesthetics" className="object-contain" />
</div>  */}