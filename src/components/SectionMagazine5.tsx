import React, { FC } from "react";
import Card12 from "./Card12";
import Card13 from "./Card13";
import BackgroundSection from "./BackgroundSection/BackgroundSection";

export interface SectionMagazine5Props {}

const SectionMagazine5: FC<SectionMagazine5Props> = () => {
  return (
    <div className="relative py-24 lg:py-32">
      <BackgroundSection/>
      <div className="container">
        <div className="nc-SectionMagazine5 container pt-12 pb-16 lg:pb-28 py-16 lg:pt-20">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            <Card12 />
            <div className="grid gap-6 md:gap-8">
              {[1, 1, 1].map((item, index) => (
                <Card13 key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default SectionMagazine5;
