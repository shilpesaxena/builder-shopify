"use client";

// @ts-ignore
import Glide from "@glidejs/glide/dist/glide.esm";
import Heading from "@/components/Heading/Heading1";
import React, { FC, useId, useRef, useState } from "react";
import { useEffect } from "react";
import quotationImg from "@/images/quotation.png";
import quotationImg2 from "@/images/quotation2.png";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { DEMO_DATA } from "./data";
import BackgroundSection from "../BackgroundSection/BackgroundSection";

export interface SectionClientSayProps {
  className?: string;
  heading?: string;
  subheading?: string;
  clientReviews?: {
    id: string;
    clientName?: string;
    content?: string;
  }[];
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
  mainImg?: string;
}

const SectionClientSay: FC<SectionClientSayProps> = ({
  className = "",
  heading,
  subheading,
  clientReviews = DEMO_DATA,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  mainImg,
}) => {
  const sliderRef = useRef(null);

  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const OPTIONS: Partial<Glide.Options> = {
      perView: 1,
    };

    if (!sliderRef || !sliderRef?.current) return;

    let slider = new Glide(sliderRef?.current, OPTIONS);
    slider?.mount();
    setIsShow(true);
    return () => {
      slider?.destroy();
    };
  }, [sliderRef]);

  const renderBg = () => {
    return (
      <div className="hidden md:block">
        {image1 && (
          <Image
            sizes="100px"
            className="absolute top-9 -left-20"
            src={image1}
            alt=""
            width={59}
            height={58}
          />
        )}
        {image2 && (
          <Image
            sizes="100px"
            className="absolute bottom-[100px] right-full mr-40"
            src={image2}
            alt=""
            width={60}
            height={60}
          />
        )}
        {image3 && (
          <Image
            sizes="100px"
            className="absolute top-full left-[140px]"
            src={image3}
            alt=""
            width={55}
            height={58}
          />
        )}
        {image4 && (
          <Image
            sizes="100px"
            className="absolute -bottom-10 right-[140px]"
            src={image4}
            alt=""
            width={47}
            height={50}
          />
        )}
        {image5 && (
          <Image
            sizes="100px"
            className="absolute left-full ml-32 bottom-[80px]"
            src={image5}
            alt=""
            width={65}
            height={63}
          />
        )}
        {image6 && (
          <Image
            sizes="100px"
            className="absolute -right-10 top-10 "
            src={image6}
            alt=""
            width={57}
            height={56}
          />
        )}
      </div>
    );
  };

  return (
    <div className="relative mt-16 lg:mt-28">
      <BackgroundSection />
      <div
        className={`nc-SectionClientSay relative flow-root container py-14 lg:pb-16 lg:pt-16 ${className} `}
        data-nc-id="SectionClientSay"
      >
        <Heading desc={subheading} isCenter>
          {heading}
        </Heading>
        <div className="relative md:mb-16 max-w-2xl mx-auto">
          {renderBg()}

          {mainImg && (
            <Image
              className="mx-auto"
              src={mainImg}
              alt=""
              width={126}
              height={120}
            />
          )}
          <div
            ref={sliderRef}
            className={`mt-12 lg:mt-16 relative ${isShow ? "" : "invisible"}`}
          >
            <Image
              className="opacity-50 md:opacity-100 absolute -mr-16 lg:mr-3 right-full top-1"
              src={quotationImg}
              alt=""
            />
            <Image
              className="opacity-50 md:opacity-100 absolute -ml-16 lg:ml-3 left-full top-1"
              src={quotationImg2}
              alt=""
            />
            {clientReviews?.length > 0 && (
              <div className="glide__track " data-glide-el="track">
                <ul className="glide__slides ">
                  {clientReviews?.map((item) => (
                    <li
                      key={item.id}
                      className="glide__slide flex flex-col items-center text-center"
                    >
                      {item.content && (
                        <span className="block text-2xl">{item.content}</span>
                      )}
                      {item.clientName && (
                        <span className="block mt-8 text-2xl font-semibold">
                          {item.clientName}
                        </span>
                      )}
                      <div className="flex items-center space-x-0.5 mt-3.5 text-yellow-500">
                        <StarIcon className="w-6 h-6" />
                        <StarIcon className="w-6 h-6" />
                        <StarIcon className="w-6 h-6" />
                        <StarIcon className="w-6 h-6" />
                        <StarIcon className="w-6 h-6" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {clientReviews?.length > 0 && (
              <div
                className="mt-10 glide__bullets flex items-center justify-center"
                data-glide-el="controls[nav]"
              >
                {clientReviews?.map((item, index) => (
                  <button
                    key={item.id}
                    className="glide__bullet w-2 h-2 rounded-full bg-neutral-300 mx-1 focus:outline-none"
                    data-glide-dir={`=${index}`}
                  ></button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionClientSay;
