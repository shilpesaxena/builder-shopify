import React, { FC } from "react";
import HeaderFilterSection from "@/components/HeaderFilterSection";
import ProductCard from "@/components/ProductCard";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import { Product, defaultProduct } from "@/utils/productData";


//
export interface SectionGridFeatureItemsProps {
  products?: Product[];
  heading? : string, 
  subheading?: string
}

const SectionGridFeatureItems: FC<SectionGridFeatureItemsProps> = ({
  products = defaultProduct,
  heading = "What's trending now?", 
  subheading = "Discover the most trending products in Ciseco."
}) => {
  const productsData = products?.map(
    (item: any) => item?.["product item"]?.data?.masterData?.current
  );
  return (
    <div className="nc-SectionGridFeatureItems relative container py-16 lg:pb-28 lg:pt-20 ">
      <HeaderFilterSection heading={heading} subheading={subheading} />
      <div
        className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 `}
      >
        {productsData?.map((item : Product, index) => (
          <ProductCard product={item} key={index} />
        ))}
      </div>
      <div className="flex mt-16 justify-center items-center">
        <ButtonPrimary loading>Show me more</ButtonPrimary>
      </div>
    </div>
  );
};

export default SectionGridFeatureItems;
