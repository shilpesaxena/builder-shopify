import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";

export interface Variant {
  id?: number;
  size?: string;
  color?: string;
  featuredImage?: StaticImageData | string;
}

export interface Price { 
  type?: string;
  currencyCode?: string;
  centAmount?: number;
  fractionDigits?: number;
}

export interface Product {
  id?: string;
  name?: { en?: string; de?: string };
  metaDescription?: { de?: string; en?: string };
  masterVariant?: {
    prices?: {
      id?: string;
      value?: Price;
    }[];
    images?: {url :string | StaticImport}[];
  };
  sizes?: string[];
  variants?: Variant[];
  variantType?: "color" | "size";
}

export const defaultProduct: Product[] = [
  {
    id: "6dffc0c8-072b-4453-8437-47f3dd4f636c",
    name: {
      de: "Moncler - Daunenmantel Joinville",
      en: "Moncler - Down Coat Joinville",
    },
    metaDescription: {
      de: "Das italienische Label Moncler präsentiert uns wieder modern- elegante Daunenmäntel mit Kultstatusgarantie! Mit schräg verlaufendem, kontrastierendem Reißverschluss und Stehkragen, hält dieses Modell wohlig warm und ist gleichzeig absolut stylish. Ein Teil, das Sie von Saison zu Saison begleiten wird!",
      en: "The Italian label Moncler presents modern elegant Down Coat with ultimate cult status! This model keeps you cozy and warm throughout the winter. The slightly diagonal zipper and stand-up collar are absolute trendy. A piece that will get you through many seasons!",
    },
    masterVariant : {
      prices: [
        {
          id: "df295965-4fb1-4de3-84a3-7740689da82f",
          value: {
            type: "centPrecision",
            centAmount: 19750,
            currencyCode: "EUR",
            fractionDigits: 2,
          },
        },
      ],
      images: [{url : "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/084902_1_medium.jpg"},]
      
    },
    sizes: ["0", "1", "2", "3", "4"],
    variants: [
      {
        id: 1,
        size: "0",
        color: "black",
        featuredImage:
          "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/084902_1_medium.jpg",
      },
      {
        id: 1,
        size: "1",
        color: "black",
        featuredImage:
          "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/084902_1_medium.jpg",
      },
      {
        id: 1,
        size: "2",
        color: "black",
        featuredImage:
          "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/084902_1_medium.jpg",
      },
      {
        id: 1,
        size: "3",
        color: "black",
        featuredImage:
          "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/084902_1_medium.jpg",
      },
      {
        id: 1,
        size: "4",
        color: "black",
        featuredImage:
          "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/084902_1_medium.jpg",
      },
    ],
    variantType: "size",
   
  },
];

// 
export const getSizes = (product: any) => {
  const currentProductSize = product?.masterVariant?.attributes?.filter(
    (attr: any) => {
      if (attr.name === "size") {
        return attr.value;
      }
    }
  );

  const variantsSize = product?.variants
    ?.map((variant: any) =>
      variant?.attributes?.filter((attr: any) => {
        if (attr.name === "size") {
          return attr.value;
        }
      })
    )
    .flat();

  if (currentProductSize && variantsSize)
    return [...currentProductSize, ...variantsSize];
};

export const getVariants = (product : any) => {
  const variantData = product?.variants?.map((item : any) => { 
    const variant = {
      id : item.id, 
      featuredImage : item.images?.[0]?.url, 
      color : item.attributes?.filter((item: any) => { 
        if(item.name === "color") 
        { return item.value} 
      }).map((item : any)=> item.value.key).toString(),
      size :  item.attributes?.filter((item: any) => { 
        if(item.name === "size") 
        { return item.value} 
      }).map((item : any)=> item.value).toString(),
    }
    return variant
  })
  return variantData
}

export const getVariantType = (variants : Product["variants"]) => {

  const variant1 = variants && variants[0]
  const variant2 = variants && variants[1]
  if(variants && variants.length){
    if(variant1?.size === variant2?.size) {
      if(variant1?.color === variant2?.color){
        return "color"
      }
    }
    else return "size"
  }
  return null
  
}
