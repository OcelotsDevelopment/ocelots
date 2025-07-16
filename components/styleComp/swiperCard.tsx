"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import './embla.css'

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 6
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function SwiperCard() {
  return <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
}

export default SwiperCard;

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number border overflow-hidden">
                <img src={"carousl/"+(index + 1)+".png"} alt="" className="w-full h-full"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
