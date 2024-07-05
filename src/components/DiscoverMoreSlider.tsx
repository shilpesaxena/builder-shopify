"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import Heading from "./Heading/Heading1";
import CardCategory3, { CardCategory3Props } from "./CardCategories/CardCategory3";
// @ts-ignore
import Glide from "@glidejs/glide/dist/glide.esm";
import img1 from "@/images/collections/1.png";
import { StaticImageData } from "next/image";

export interface SliderProps {
  sectionHead ?: string, 
  sectionSubhead ?: string, 
  sliderCards ?: {
  className?: string;
  featuredImage?: StaticImageData | string;
  name?: string;
  desc?: string;
  color?: string;
  }[]
}

const DiscoverMoreSlider = ({
  sectionHead, 
  sectionSubhead,
  sliderCards = [{
    name: "Explore new arrivals",
    desc: "Shop the latest <br /> from top brands",
    featuredImage: img1,
    color: "bg-yellow-50",
}]} : SliderProps) => {
  const sliderRef = useRef(null);

  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const OPTIONS: Partial<Glide.Options> = {
      // direction: document.querySelector("html")?.getAttribute("dir") || "ltr",
      perView: 2.8,
      gap: 32,
      bound: true,
      breakpoints: {
        1280: {
          gap: 28,
          perView: 2.5,
        },
        1279: {
          gap: 20,
          perView: 2.15,
        },
        1023: {
          gap: 20,
          perView: 1.6,
        },
        768: {
          gap: 20,
          perView: 1.2,
        },
        500: {
          gap: 20,
          perView: 1,
        },
      },
    };
    if (!sliderRef.current) return;

    let slider = new Glide(sliderRef.current, OPTIONS);
    slider.mount();
    setIsShow(true);
    return () => {
      slider.destroy();
    };
  }, [sliderRef]);

  return (
    <div className="mt-24 lg:mt-32">
          <div
      ref={sliderRef}
      className={`nc-DiscoverMoreSlider nc-p-l-container overflow-hidden ${
        isShow ? "" : "invisible"
      }`}
    >
      <Heading
        className="mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50 nc-p-r-container "
        desc=""
        rightDescText={sectionSubhead}
        hasNextPrev
      >
        {sectionHead}
      </Heading>
      <div className="" data-glide-el="track">
        <ul className="glide__slides">
          {sliderCards?.map((item, index) => (
            <li key={index} className={`glide__slide`}>
              <CardCategory3
                name={item?.name}
                desc={item?.desc}
                featuredImage={item?.featuredImage}
                color={item?.color}
                width={100}
                height={100}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>

  );
};

export default DiscoverMoreSlider;
