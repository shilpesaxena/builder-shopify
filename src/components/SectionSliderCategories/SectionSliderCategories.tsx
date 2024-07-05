"use client";

import React, { FC, useEffect, useId, useRef, useState } from "react";
import Heading from "@/components/Heading/Heading1";
// @ts-ignore
import Glide from "@glidejs/glide/dist/glide.esm";
import CardCategory2 from "@/components/CardCategories/CardCategory2";
import department1Png from "@/images/collections/department1.png";
import department2Png from "@/images/collections/department2.png";
import department3Png from "@/images/collections/department3.png";
import department4Png from "@/images/collections/department4.png";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { Route } from "@/routers/types";
import { UrlObject } from "url";

export interface CardCategoryData {
  name: string;
  desc: string;
  featuredImage: string | StaticImageData;
  color?: string;
  link? :any
}
const CATS: CardCategoryData[] = [
  {
    name: "Travel Kits",
    desc: "20+ categories",
    featuredImage: department1Png,
    color: "bg-indigo-100",
    link : "/collection"
  },
  {
    name: "Beauty Products",
    desc: "10+ categories",
    featuredImage: department2Png,
    color: "bg-slate-100",
    link : "/collection-2"
  },
  {
    name: "Sport Kits",
    desc: "34+ categories",
    featuredImage: department3Png,
    color: "bg-sky-100",
    link : "/collection"
  },
  {
    name: "Pets Food",
    desc: "12+ categories",
    featuredImage: department4Png,
    color: "bg-orange-100",
    link : "/collection-2"
  },
];
export interface SectionSliderCategoriesProps {
  className?: string;
  itemClassName?: string;
  heading?: string;
  subHeading?: string;
  sliderCards?: CardCategoryData[];
  buttonLink?: any;
}

const SectionSliderCategories: FC<SectionSliderCategoriesProps> = ({
  heading = "Shop by department",
  subHeading = "Get all kinds of variety",
  className = "",
  itemClassName = "",
  sliderCards = CATS,
  buttonLink = "/collection"
}) => {
  const sliderRef = useRef(null);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const OPTIONS: Partial<Glide.Options> = {
      perView: 4,
      gap: 32,
      bound: true,
      breakpoints: {
        1280: {
          perView: 4,
        },
        1024: {
          gap: 20,
          perView: 3.4,
        },
        768: {
          gap: 20,
          perView: 3,
        },
        640: {
          gap: 20,
          perView: 2.3,
        },
        500: {
          gap: 20,
          perView: 1.4,
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
    <div className={`nc-SectionSliderCategories container py-16 lg:pb-28 lg:pt-20  ${className}`}>
      <div ref={sliderRef} className={`flow-root ${isShow ? "" : "invisible"}`}>
        <Heading desc={subHeading} hasNextPrev>
          {heading}
        </Heading>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {sliderCards.map((item) => (
              <li key={item.name} className={`glide__slide ${itemClassName}`}>
                <CardCategory2
                  featuredImage={item.featuredImage}
                  name={item.name}
                  desc={item.desc}
                  bgClass={item.color}
                  width={398}
                  height={434}
                  link={item.link}
                />
              </li>
            ))}
            <li className={`glide__slide ${itemClassName}`}>
              <div
                className={`flex-1 relative w-full h-0 rounded-2xl overflow-hidden group aspect-w-1 aspect-h-1 bg-slate-100`}
              >
                <div>
                  <div className="absolute inset-y-6 inset-x-10 flex flex-col sm:items-center justify-center">
                    <div className="flex relative text-slate-900">
                      <span className="text-lg font-semibold ">
                        More collections
                      </span>
                      <svg
                        className="absolute left-full w-5 h-5 ml-2 rotate-45 group-hover:scale-110 transition-transform"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.0701 9.57L12.0001 3.5L5.93005 9.57"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M12 20.4999V3.66992"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-sm mt-1 text-slate-800">
                      Show me more
                    </span>
                  </div>
                </div>
                <Link
                  href={buttonLink}
                  className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"
                ></Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionSliderCategories;
