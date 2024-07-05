import React, { FC, ReactNode } from "react";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Image, { StaticImageData } from "next/image";
import heroRight from "./../images/hero-right1.png"

export interface SectionHeroProps {
  className?: string;
  rightImg: string | StaticImageData;
  heading: ReactNode;
  subHeading: string;
  btnText: string;
  btnLink : any
}

const AboutSectionHero: FC<SectionHeroProps> = ({
  className = "",
  rightImg = heroRight,
  heading = "👋 About Us.",
  subHeading = "We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world.",
  btnText = "Login",
  btnLink = "/login"
}) => {
  return (
    <div
      className={`nc-SectionHero relative container py-16 lg:pb-28 lg:pt-28  ${className}`}
      data-nc-id="SectionHero"
    >
      <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
        <div className="w-screen max-w-full xl:max-w-lg space-y-5 lg:space-y-7">
          <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
            {heading}
          </h2>
          <span className="block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400">
            {subHeading}
          </span>
          {/* {!!btnText && <ButtonPrimary href={btnLink}>{btnText}</ButtonPrimary>} */}
        </div>
        <div className="flex-grow">
          <Image className="w-full" src={rightImg} alt="" priority width={1450} height={638} />
        </div>
      </div>
    </div>
  );
};

export default AboutSectionHero;
