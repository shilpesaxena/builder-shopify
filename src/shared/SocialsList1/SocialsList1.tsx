import { SocialType } from "@/shared/SocialsShare/SocialsShare";
import React, { FC } from "react";
import Image from "next/image";

export interface SocialsList1Props {
  className?: string;
  socials: SocialType[];
}

const SocialsList1: FC<SocialsList1Props> = ({
  className = "space-y-3",
  socials,
}) => {
  const renderItem = (item: SocialType, index: number) => {
    return (
      <a
        href={item.href}
        className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
        key={index}
      >
        <div className="flex-shrink-0 w-5 ">
          <Image sizes="40px" width={20} height={20} src={item?.icon} alt="" />
        </div>
        <span className="hidden lg:block text-sm">{item?.name}</span>
      </a>
    );
  };

  return (
    <div className={`nc-SocialsList1 ${className}`} data-nc-id="SocialsList1">
      {socials?.map(renderItem)}
    </div>
  );
};

export default SocialsList1;
