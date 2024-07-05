import React, { FC } from "react";
import NcImage from "@/shared/NcImage/NcImage";
import rightImgDemo from "@/images/rightLargeImg.png";
import rightLargeImgDark from "@/images/rightLargeImgDark.png";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Logo from "@/shared/Logo/Logo";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface SectionPromo1Props {
  className?: string;
  heading?: string;
  subHeading?: string;
  button1?: {
    text: string;
    link: string;
  };
  button2?: {
    text: string;
    link: string;
  };
  heroImageLight?: StaticImport | string;
  heroImageDark?: StaticImport | string;
}

const SectionPromo1: FC<SectionPromo1Props> = ({
  className = "",
  heading = "Earn Free money with Ciseco",
  subHeading = "With Ciseco you will get freeship and saving combos",
  button1 = { text: "Saving Combo", link: "/collection" },
  button2 = { text: "Discover more", link: "/collection-2" },
  heroImageDark = rightLargeImgDark,
  heroImageLight = rightImgDemo,
}) => {
  return (
    <div
      className={`nc-SectionPromo1 relative flex flex-col lg:flex-row items-center container py-16 lg:pb-28 lg:pt-20  ${className}`}
    >
      <div className="relative flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
        <Logo className="w-28" />
        <h2
          className="font-semibold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl mt-6 sm:mt-10 !leading-[1.2] tracking-tight"
          dangerouslySetInnerHTML={{ __html: heading }}
        ></h2>
        <span className="block mt-6 text-slate-500 dark:text-slate-400 ">
          {subHeading}
        </span>
        <div className="flex space-x-2 sm:space-x-5 mt-6 sm:mt-12">
          <ButtonPrimary href={button1?.link} className="">
            {button1?.text}
          </ButtonPrimary>
          <ButtonSecondary
            href={button2?.link}
            className="border border-slate-100 dark:border-slate-700"
          >
            {button2?.text}
          </ButtonSecondary>
        </div>
      </div>
      <div className="relative flex-1 max-w-xl lg:max-w-none">
        <NcImage
          alt=""
          containerClassName="block dark:hidden"
          src={heroImageLight}
          sizes="(max-width: 768px) 100vw, 50vw"
          className=""
          width={1062}
          height={755}
        />
        <NcImage
          alt=""
          containerClassName="hidden dark:block"
          src={heroImageDark}
          sizes="(max-width: 768px) 100vw, 50vw"
          className=""
          width={1062}
          height={755}
        />
      </div>
    </div>
  );
};

export default SectionPromo1;
