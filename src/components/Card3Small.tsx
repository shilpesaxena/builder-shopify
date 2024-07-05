import PostCardMeta from "@/components/PostCardMeta/PostCardMeta";
import React, { FC } from "react";
import NcImage from "@/shared/NcImage/NcImage";
import Link from "next/link";

export interface Card3SmallProps {
  className?: string;
}

const Card3Small: FC<Card3SmallProps> = ({ className = "h-full" }) => {
  return (
    <div
      className={`nc-Card3Small relative flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center ${className}`}
      data-nc-id="Card3Small"
    >
      <Link
        href={"/blog-single"}
        className=" absolute inset-0"
        title={"title"}
      ></Link>
      <div className="relative space-y-2">
        <PostCardMeta />
        <h2 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
          <Link
            href={"/blog-single"}
            className=" line-clamp-2 capitalize"
            title={"title"}
          >
            "Adipiscing bibendum est ultricies integer quis auctor elit sed
            vulputate"
          </Link>
        </h2>
      </div>

      <Link
        href={`/blog-single`}
        title={"title"}
        className={`block sm:w-20 flex-shrink-0 relative rounded-lg overflow-hidden mb-5 sm:ml-4 sm:mb-0 group`}
      >
        <div className={`w-full h-0 aspect-w-16 aspect-h-9 sm:aspect-h-16`}>
          <NcImage
            alt=""
            fill
            sizes="100px"
            containerClassName="absolute inset-0"
            className="object-cover w-full h-full group-hover:scale-110 transform transition-transform duration-300"
            src="https://images.pexels.com/photos/10343244/pexels-photo-10343244.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
        </div>
      </Link>
    </div>
  );
};

export default Card3Small;
