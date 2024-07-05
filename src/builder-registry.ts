"use client";
import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";
import imageRightPng from "@/images/hero-right.png";
import img1 from "src/images/collections/1.png";
import BackgroundSection from "./components/BackgroundSection/BackgroundSection";
import Counter from "./components/Counter/Counter";
import SectionAccountLayout from "./components/SectionAccountLayout";
import SectionAccountPage from "./components/SectionAccountPage";
import SectionAccountPass from "./components/SectionAccountPass";
import SectionAds from "./components/SectionAds";
import SectionForgotPassword from "./components/SectionForgotPassword";
import SectionGridFeatureItems from "./components/SectionGridFeatureItems";
import SectionGridMoreExplore from "./components/SectionGridMoreExplore/SectionGridMoreExplore";
import SectionLatestPosts from "./components/SectionLatestPosts";
import SectionLogin from "./components/SectionLogin";
import SectionMagazine5 from "./components/SectionMagazine5";
import SectionProductDetailPage from "./components/SectionProductDetailPage";
import SectionProductDetailPage2 from "./components/SectionProductDetailPage2";
import SectionSignUp from "./components/SectionSignUp";
import SectionSliderLargeProduct2 from "./components/SectionSliderLargeProduct2";
import SectionSliderProductCard from "./components/SectionSliderProductCard";

Builder.register("insertMenu", {
  name: "Section Components",
  items: [
    { name: "AboutSectionHero" },
    { name: "SectionAds" },
    { name: "SectionClientSay" },
    { name: "SectionFounder" },
    { name: "SectionGridFeatureItems" },
    { name: "SectionGridMoreExplore" },
    { name: "SectionHero" },
    { name: "SectionHero2" },
    { name: "SectionHero3" },
    { name: "SectionHowItWork" },
    { name: "SectionLatestPosts" },
    { name: "SectionMagazine5" },
    { name: "SectionPromo1" },
    { name: "SectionPromo2" },
    { name: "SectionPromo3" },
    { name: "SectionSliderCategories" },
    { name: "SectionSliderLargeProduct" },
    { name: "SectionSliderLargeProduct2" },
    { name: "SectionSliderProductCard" },
    { name: "SectionStatistic" },
    { name: "SectionVideos" },
    { name: "SectionAccountPage" },
    { name: "SectionAccountPass" },
    { name: "SectionAccountLayout" },
    { name: "SectionLogin" },
    { name: "SectionSignUp" },
    { name: "SectionProductDetailPage" },
    { name: "SectionProductDetailPage2" },
    { name: "SectionCommonLayout" },
    { name: "BackgroundSection" },
    { name: "DiscoverMoreSlider" },
    { name: "SectionForgotPassword" },
  ],
});

Builder.registerComponent(
  dynamic(() => import("./components/SectionVideos")),
  {
    name: "SectionVideos",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-video' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z' /%3E%3Cpath d='M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z' /%3E%3C/svg%3E",
    inputs: [
      {
        name: "className",
        type: "string",
      },
      {
        name: "heading",
        type: "string",
      },
      {
        name: "desc",
        type: "string",
      },
      {
        name: "videos",
        type: "list",
        subFields: [
          {
            name: "videoId",
            type: "string",
          },
          {
            name: "title",
            type: "string",
          },
          {
            name: "thumbnail",
            type: "string",
          },
        ],
      },
    ],
  }
);

Builder.registerComponent(SectionSliderProductCard, {
  name: "SectionSliderProductCard",
  image:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-carousel-horizontal' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M7 5m0 1a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1z' /%3E%3Cpath d='M22 17h-1a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h1' /%3E%3Cpath d='M2 17h1a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-1' /%3E%3C/svg%3E",
  inputs: [
    {
      name: "className",
      type: "string",
    },
    {
      name: "products",
      type: "list",
      subFields: [
        {
          name: "product item",
          type: "CommercetoolsProduct",
        },
      ],
    },
    {
      name: "heading",
      type: "string",
    },
    {
      name: "headingClassName",
      type: "string",
    },
    {
      name: "headingFontClassName",
      type: "string",
    },
    {
      name: "itemClassName",
      type: "string",
    },
    {
      name: "subHeading",
      type: "string",
    },
  ],
});

Builder.registerComponent(SectionSliderLargeProduct2, {
  name: "SectionSliderLargeProduct2",
  image:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-carousel-horizontal-filled' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M16 4h-8a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z' stroke-width='0' fill='currentColor' /%3E%3Cpath d='M22 6a1 1 0 0 1 .117 1.993l-.117 .007h-1v8h1a1 1 0 0 1 .117 1.993l-.117 .007h-1a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-8a2 2 0 0 1 1.85 -1.995l.15 -.005h1z' stroke-width='0' fill='currentColor' /%3E%3Cpath d='M3 6a2 2 0 0 1 1.995 1.85l.005 .15v8a2 2 0 0 1 -1.85 1.995l-.15 .005h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1v-8h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z' stroke-width='0' fill='currentColor' /%3E%3C/svg%3E",
  inputs: [
    {
      name: "cardStyle",
      type: "string",
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "itemClassName",
      type: "string",
    },
  ],
});

Builder.registerComponent(
  dynamic(() => import("./components/SectionSliderLargeProduct")),
  {
    name: "SectionSliderLargeProduct",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-carousel-horizontal-filled' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M16 4h-8a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z' stroke-width='0' fill='currentColor' /%3E%3Cpath d='M22 6a1 1 0 0 1 .117 1.993l-.117 .007h-1v8h1a1 1 0 0 1 .117 1.993l-.117 .007h-1a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-8a2 2 0 0 1 1.85 -1.995l.15 -.005h1z' stroke-width='0' fill='currentColor' /%3E%3Cpath d='M3 6a2 2 0 0 1 1.995 1.85l.005 .15v8a2 2 0 0 1 -1.85 1.995l-.15 .005h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1v-8h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z' stroke-width='0' fill='currentColor' /%3E%3C/svg%3E",
    inputs: [
      {
        name: "cardStyle",
        type: "string",
      },
      {
        name: "className",
        type: "string",
      },
      {
        name: "itemClassName",
        type: "string",
      },
      {
        name: "heading",
        type: "string",
      },
      {
        name: "products",
        type: "list",
        subFields: [
          {
            name: "id",
            type: "number",
          },
          {
            name: "name",
            type: "string",
          },
          {
            name: "desc",
            type: "string",
          },
          {
            name: "price",
            type: "number",
          },
          {
            name: "images",
            type: "list",
            subFields: [
              {
                name: "src",
                type: "file",
              },
            ],
          },
        ],
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(
    () => import("./components/SectionSliderCategories/SectionSliderCategories")
  ),
  {
    name: "SectionSliderCategories",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-category' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M4 4h6v6h-6z' /%3E%3Cpath d='M14 4h6v6h-6z' /%3E%3Cpath d='M4 14h6v6h-6z' /%3E%3Cpath d='M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' /%3E%3C/svg%3E",
    inputs: [
      {
        name: "className",
        type: "string",
      },
      {
        name: "itemClassName",
        type: "string",
      },
      {
        name: "heading",
        type: "string",
      },
      {
        name: "subHeading",
        type: "string",
      },
      {
        name: "buttonLink",
        type: "url",
        defaultValue: "/collection",
      },
      {
        name: "sliderCards",
        type: "list",
        subFields: [
          {
            name: "name",
            type: "string",
            required: true,
            defaultValue: "Travel Kits",
          },
          {
            name: "desc",
            type: "string",
            required: true,
            defaultValue: "20+ categories",
          },
          {
            name: "featuredImage",
            type: "file",
            defaultValue: img1,
          },
          {
            name: "color",
            type: "string",
            required: true,
            defaultValue: "bg-indigo-100",
          },
          {
            name: "link",
            type: "url",
            required: true,
            defaultValue: "/collection",
          },
        ],
      },
    ],
  }
);
Builder?.registerComponent(
  dynamic(() => import("./components/SectionPromo2")),
  {
    name: "SectionPromo2",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-badge-ad' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z' /%3E%3Cpath d='M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z' /%3E%3Cpath d='M7 15v-4.5a1.5 1.5 0 0 1 3 0v4.5' /%3E%3Cpath d='M7 13h3' /%3E%3C/svg%3E",
    inputs: [
      {
        name: "className",
        type: "string",
      },
      {
        name: "title",
        type: "string",
        defaultValue: `Special offer <br />
        in kids products`,
      },
      {
        name: "subtitle",
        type: "string",
        defaultValue:
          "Fashion is a form of self-expression and autonomy at a particular period and place.",
      },
      {
        name: "buttonText",
        type: "string",
        defaultValue: "Discover more",
      },
      {
        name: "image",
        type: "file",
      },
    ],
  }
);

Builder.registerComponent(SectionMagazine5, {
  name: "SectionMagazine5",
  image:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-book' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0' /%3E%3Cpath d='M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0' /%3E%3Cpath d='M3 6l0 13' /%3E%3Cpath d='M12 6l0 13' /%3E%3Cpath d='M21 6l0 13' /%3E%3C/svg%3E",
});

Builder.registerComponent(SectionAds, {
  name: "SectionAds",
  image:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-ad-circle' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0' /%3E%3Cpath d='M7 15v-4.5a1.5 1.5 0 0 1 3 0v4.5' /%3E%3Cpath d='M7 13h3' /%3E%3Cpath d='M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z' /%3E%3C/svg%3E",
  inputs: [
    {
      name: "className",
      type: "string",
    },
  ],
});

Builder.registerComponent(SectionForgotPassword, {
  name: "SectionForgotPassword",
  image:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-password' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 10v4' /%3E%3Cpath d='M10 13l4 -2' /%3E%3Cpath d='M10 11l4 2' /%3E%3Cpath d='M5 10v4' /%3E%3Cpath d='M3 13l4 -2' /%3E%3Cpath d='M3 11l4 2' /%3E%3Cpath d='M19 10v4' /%3E%3Cpath d='M17 13l4 -2' /%3E%3Cpath d='M17 11l4 2' /%3E%3C/svg%3E",
});
Builder?.registerComponent(
  dynamic(() => import("./components/SectionClientSay/SectionClientSay")),
  {
    name: "SectionClientSay",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-message' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M8 9h8' /%3E%3Cpath d='M8 13h6' /%3E%3Cpath d='M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z' /%3E%3C/svg%3E",
    inputs: [
      {
        name: "className",
        type: "string",
        defaultValue: "",
      },
      {
        name: "heading",
        type: "string",
      },
      {
        name: "subheading",
        type: "string",
      },
      {
        name: "image1",
        type: "file",
      },
      {
        name: "image2",
        type: "file",
      },
      {
        name: "image3",
        type: "file",
      },
      {
        name: "image4",
        type: "file",
      },
      {
        name: "image5",
        type: "file",
      },
      {
        name: "image6",
        type: "file",
      },
      {
        name: "mainImg",
        type: "file",
      },
      {
        name: "clientReviews",
        type: "list",
        subFields: [
          {
            name: "id",
            type: "number",
          },
          {
            name: "clientName",
            type: "string",
          },
          {
            name: "content",
            type: "string",
          },
        ],
      },
    ],
  }
);
Builder?.registerComponent(
  dynamic(() => import("./components/SectionFounder")),
  {
    name: "SectionFounder",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-user' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0' /%3E%3Cpath d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' /%3E%3C/svg%3E",
    inputs: [
      {
        name: "heading",
        type: "string",
      },
      {
        name: "desc",
        type: "string",
      },
      {
        name: "people",
        type: "list",
        subFields: [
          {
            name: "id",
            type: "string",
          },
          {
            name: "name",
            type: "string",
          },
          {
            name: "job",
            type: "string",
          },
          {
            name: "avatar",
            type: "file",
          },
        ],
      },
    ],
  }
);

Builder.registerComponent(SectionGridFeatureItems, {
  name: "SectionGridFeatureItems",
  image:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-list-details' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M13 5h8' /%3E%3Cpath d='M13 9h5' /%3E%3Cpath d='M13 15h8' /%3E%3Cpath d='M13 19h5' /%3E%3Cpath d='M3 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' /%3E%3Cpath d='M3 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' /%3E%3C/svg%3E",
  inputs: [
    {
      name: "products",
      type: "list",
      subFields: [
        {
          name: "product item",
          type: "CommercetoolsProduct",
        },
      ],
    },
    {
      name: "heading",
      type: "string",
    },
    {
      name: "subheading",
      type: "string",
    },
  ],
});

Builder.registerComponent(SectionGridMoreExplore, {
  name: "SectionGridMoreExplore",
  image:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-input-search' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M20 11v-2a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h5' /%3E%3Cpath d='M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' /%3E%3Cpath d='M20.2 20.2l1.8 1.8' /%3E%3C/svg%3E",
  inputs: [
    {
      name: "boxCard",
      type: "string",
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "data",
      type: "string",
    },
    {
      name: "gridClassName",
      type: "string",
    },
  ],
});

Builder.registerComponent(
  dynamic(() => import("./components/AboutSectionHero")),
  {
    name: "AboutSectionHero",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-info-square-rounded' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 9h.01' /%3E%3Cpath d='M11 12h1v4h1' /%3E%3Cpath d='M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z' /%3E%3C/svg%3E",
    inputs: [
      {
        name: "btnText",
        type: "string",
      },
      {
        name: "btnLink",
        type: "url",
      },
      {
        name: "className",
        type: "string",
      },
      {
        name: "heading",
        type: "string",
      },
      {
        name: "rightImg",
        type: "file",
      },
      {
        name: "subHeading",
        type: "string",
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/SectionHero/SectionHero")),
  {
    name: "SectionHero",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-cookie-man' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2a5 5 0 0 1 2.845 9.112l.147 .369l1.755 -.803c.969 -.443 2.12 -.032 2.571 .918a1.88 1.88 0 0 1 -.787 2.447l-.148 .076l-2.383 1.089v2.02l1.426 1.425l.114 .125a1.96 1.96 0 0 1 -2.762 2.762l-.125 -.114l-2.079 -2.08l-.114 -.124a1.957 1.957 0 0 1 -.161 -.22h-.599c-.047 .075 -.101 .15 -.16 .22l-.115 .125l-2.08 2.079a1.96 1.96 0 0 1 -2.886 -2.648l.114 -.125l1.427 -1.426v-2.019l-2.383 -1.09l-.148 -.075a1.88 1.88 0 0 1 -.787 -2.447c.429 -.902 1.489 -1.318 2.424 -.978l.147 .06l1.755 .803l.147 -.369a5 5 0 0 1 -2.15 -3.895l0 -.217a5 5 0 0 1 5 -5z' /%3E%3Cpath d='M12 16h.01' /%3E%3Cpath d='M12 13h.01' /%3E%3Cpath d='M10 7h.01' /%3E%3Cpath d='M14 7h.01' /%3E%3Cpath d='M12 9h.01' /%3E%3C/svg%3E",
    inputs: [
      {
        name: "className",
        type: "string",
      },
      {
        name: "heading",
        type: "string",
      },
      {
        name: "subHeading",
        type: "string",
      },
      {
        name: "image",
        type: "file",
      },
      {
        name: "button1",
        type: "object",
        subFields: [
          { name: "text", type: "string" },
          { name: "link", type: "url" },
        ],
      },
      {
        name: "button2",
        type: "object",
        subFields: [
          { name: "text", type: "string" },
          { name: "link", type: "url" },
        ],
      },
    ],
  }
);
Builder?.registerComponent(
  dynamic(() => import("./components/SectionHero/SectionHero2")),
  {
    name: "SectionHero2",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-cookie-man' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2a5 5 0 0 1 2.845 9.112l.147 .369l1.755 -.803c.969 -.443 2.12 -.032 2.571 .918a1.88 1.88 0 0 1 -.787 2.447l-.148 .076l-2.383 1.089v2.02l1.426 1.425l.114 .125a1.96 1.96 0 0 1 -2.762 2.762l-.125 -.114l-2.079 -2.08l-.114 -.124a1.957 1.957 0 0 1 -.161 -.22h-.599c-.047 .075 -.101 .15 -.16 .22l-.115 .125l-2.08 2.079a1.96 1.96 0 0 1 -2.886 -2.648l.114 -.125l1.427 -1.426v-2.019l-2.383 -1.09l-.148 -.075a1.88 1.88 0 0 1 -.787 -2.447c.429 -.902 1.489 -1.318 2.424 -.978l.147 .06l1.755 .803l.147 -.369a5 5 0 0 1 -2.15 -3.895l0 -.217a5 5 0 0 1 5 -5z' /%3E%3Cpath d='M12 16h.01' /%3E%3Cpath d='M12 13h.01' /%3E%3Cpath d='M10 7h.01' /%3E%3Cpath d='M14 7h.01' /%3E%3Cpath d='M12 9h.01' /%3E%3C/svg%3E",
    inputs: [
      {
        name: "className",
        type: "string",
        defaultValue: "",
      },
      {
        name: "carouselItems",
        type: "list",
        subFields: [
          {
            name: "heading",
            type: "string",
            required: true,
            defaultValue: "Exclusive collection for everyone",
          },
          {
            name: "subHeading",
            type: "string",
            required: true,
            defaultValue: "In this season, find the best",
          },
          {
            name: "image",
            type: "file",
            defaultValue: imageRightPng,
          },
          {
            name: "btnText",
            type: "string",
            required: true,
            defaultValue: "Explore",
          },
          {
            name: "btnLink",
            type: "any",
            required: true,
            defaultValue: "/",
          },
        ],
      },
    ],
  }
);
Builder?.registerComponent(
  dynamic(() => import("./components/SectionHero/SectionHero3")),
  {
    name: "SectionHero3",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-cookie-man' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2a5 5 0 0 1 2.845 9.112l.147 .369l1.755 -.803c.969 -.443 2.12 -.032 2.571 .918a1.88 1.88 0 0 1 -.787 2.447l-.148 .076l-2.383 1.089v2.02l1.426 1.425l.114 .125a1.96 1.96 0 0 1 -2.762 2.762l-.125 -.114l-2.079 -2.08l-.114 -.124a1.957 1.957 0 0 1 -.161 -.22h-.599c-.047 .075 -.101 .15 -.16 .22l-.115 .125l-2.08 2.079a1.96 1.96 0 0 1 -2.886 -2.648l.114 -.125l1.427 -1.426v-2.019l-2.383 -1.09l-.148 -.075a1.88 1.88 0 0 1 -.787 -2.447c.429 -.902 1.489 -1.318 2.424 -.978l.147 .06l1.755 .803l.147 -.369a5 5 0 0 1 -2.15 -3.895l0 -.217a5 5 0 0 1 5 -5z' /%3E%3Cpath d='M12 16h.01' /%3E%3Cpath d='M12 13h.01' /%3E%3Cpath d='M10 7h.01' /%3E%3Cpath d='M14 7h.01' /%3E%3Cpath d='M12 9h.01' /%3E%3C/svg%3E",
    inputs: [
      {
        name: "className",
        type: "string",
      },
      {
        name: "title",
        type: "string",
        defaultValue: "Sports equipment collection.",
      },
      {
        name: "subtitle",
        type: "string",
        defaultValue: "In this season, find the best \uD83D\uDD25",
      },
      {
        name: "buttonText",
        type: "string",
        defaultValue: "Start your search",
      },
      {
        name: "image",
        type: "file",
      },
    ],
  }
);
Builder?.registerComponent(
  dynamic(() => import("./components/SectionPromo1")),
  {
    name: "SectionPromo1",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-badge-ad' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z' /%3E%3Cpath d='M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z' /%3E%3Cpath d='M7 15v-4.5a1.5 1.5 0 0 1 3 0v4.5' /%3E%3Cpath d='M7 13h3' /%3E%3C/svg%3E",
    inputs: [
      {
        name: "className",
        type: "string",
      },
      {
        name: "heading",
        type: "string",
        required: true,
        defaultValue: "Earn free money with Ciseco",
      },
      {
        name: "subHeading",
        type: "string",
        defaultValue: "With Ciseco you will get freeship & savings combo...",
      },
      {
        name: "button1",
        type: "object",
        subFields: [
          { name: "text", type: "string" },
          { name: "link", type: "url" },
        ],
      },
      {
        name: "button2",
        type: "object",
        subFields: [
          { name: "text", type: "string" },
          { name: "link", type: "url" },
        ],
      },
      {
        name: "heroImageLight",
        type: "file",
      },
      {
        name: "heroImageDark",
        type: "file",
      },
    ],
  }
);
Builder?.registerComponent(
  dynamic(() => import("./components/SectionHowItWork/SectionHowItWork")),
  {
    name: "SectionHowItWork",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-building-factory' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M4 21c1.147 -4.02 1.983 -8.027 2 -12h6c.017 3.973 .853 7.98 2 12' /%3E%3Cpath d='M12.5 13h4.5c.025 2.612 .894 5.296 2 8' /%3E%3Cpath d='M9 5a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1' /%3E%3Cpath d='M3 21l19 0' /%3E%3C/svg%3E",
    inputs: [
      {
        name: "className",
        type: "string",
        defaultValue: "",
      },
      {
        name: "listItems",
        type: "list",
        subFields: [
          {
            name: "id",
            type: "number",
          },
          {
            name: "title",
            type: "string",
            required: true,
          },
          {
            name: "desc",
            type: "string",
            required: true,
          },
          {
            name: "img",
            type: "file",
          },
          {
            name: "imgDark",
            type: "file",
          },
        ],
      },
    ],
  }
);
Builder?.registerComponent(
  dynamic(() => import("./components/SectionPromo3")),
  {
    name: "SectionPromo3",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-badge-ad' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z' /%3E%3Cpath d='M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z' /%3E%3Cpath d='M7 15v-4.5a1.5 1.5 0 0 1 3 0v4.5' /%3E%3Cpath d='M7 13h3' /%3E%3C/svg%3E",
    inputs: [
      {
        name: "className",
        type: "string",
      },
      {
        name: "image",
        type: "file",
      },
      {
        name: "sectionHead",
        type: "string",
        defaultValue: "Don't miss out on special offers",
      },
      {
        name: "sectionSubhead",
        type: "string",
        defaultValue:
          "Register to receive news about the latest, savings combos, discount codes...",
      },
      {
        name: "features",
        type: "list",
        subFields: [
          {
            name: "name",
            type: "string",
          },
          {
            name: "color",
            type: "string",
            defaultValue: "green",
            enum: [
              "green",
              "pink",
              "red",
              "blue",
              "yellow",
              "indigo",
              "gray",
              "purple",
            ],
          },
          {
            name: "heading",
            type: "string",
          },
        ],
      },
    ],
  }
);

Builder.registerComponent(SectionLatestPosts, {
  name: "SectionLatestPosts",
  image:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-article' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z' /%3E%3Cpath d='M7 8h10' /%3E%3Cpath d='M7 12h10' /%3E%3Cpath d='M7 16h10' /%3E%3C/svg%3E",
  inputs: [
    {
      name: "className",
      type: "string",
    },
    {
      name: "postCardName",
      type: "string",
    },
  ],
});

Builder.registerComponent(BackgroundSection, {
  name: "BackgroundSection",
  image:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-background' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M4 8l4 -4' /%3E%3Cpath d='M14 4l-10 10' /%3E%3Cpath d='M4 20l16 -16' /%3E%3Cpath d='M20 10l-10 10' /%3E%3Cpath d='M20 16l-4 4' /%3E%3C/svg%3E",
  inputs: [
    {
      name: "className",
      type: "string",
    },
  ],
});
Builder?.registerComponent(
  dynamic(() => import("./components/SectionHero/SectionHero2")),
  {
    name: "SectionHero2",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-cookie-man' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2a5 5 0 0 1 2.845 9.112l.147 .369l1.755 -.803c.969 -.443 2.12 -.032 2.571 .918a1.88 1.88 0 0 1 -.787 2.447l-.148 .076l-2.383 1.089v2.02l1.426 1.425l.114 .125a1.96 1.96 0 0 1 -2.762 2.762l-.125 -.114l-2.079 -2.08l-.114 -.124a1.957 1.957 0 0 1 -.161 -.22h-.599c-.047 .075 -.101 .15 -.16 .22l-.115 .125l-2.08 2.079a1.96 1.96 0 0 1 -2.886 -2.648l.114 -.125l1.427 -1.426v-2.019l-2.383 -1.09l-.148 -.075a1.88 1.88 0 0 1 -.787 -2.447c.429 -.902 1.489 -1.318 2.424 -.978l.147 .06l1.755 .803l.147 -.369a5 5 0 0 1 -2.15 -3.895l0 -.217a5 5 0 0 1 5 -5z' /%3E%3Cpath d='M12 16h.01' /%3E%3Cpath d='M12 13h.01' /%3E%3Cpath d='M10 7h.01' /%3E%3Cpath d='M14 7h.01' /%3E%3Cpath d='M12 9h.01' /%3E%3C/svg%3E",
    inputs: [
      {
        name: "className",
        type: "string",
        defaultValue: "",
      },
      {
        name: "carouselItems",
        type: "list",
        subFields: [
          {
            name: "heading",
            type: "string",
            required: true,
            defaultValue: "Exclusive collection for everyone",
          },
          {
            name: "subHeading",
            type: "string",
            required: true,
            defaultValue: "In this season, find the best",
          },
          {
            name: "image",
            type: "file",
            allowedFileTypes: ["jpg", "png", "gif", "svg"],
            defaultValue: imageRightPng,
          },
          {
            name: "btnText",
            type: "string",
            required: true,
            defaultValue: "Explore",
          },
          {
            name: "btnLink",
            type: "any",
            required: true,
            defaultValue: "/",
          },
        ],
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/SectionStatistic")),
  {
    name: "SectionStatistic",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-chart-arrows-vertical' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M18 21v-14' /%3E%3Cpath d='M9 15l3 -3l3 3' /%3E%3Cpath d='M15 10l3 -3l3 3' /%3E%3Cpath d='M3 21l18 0' /%3E%3Cpath d='M12 21l0 -9' /%3E%3Cpath d='M3 6l3 -3l3 3' /%3E%3Cpath d='M6 21v-18' /%3E%3C/svg%3E",
    inputs: [
      {
        name: "className",
        type: "string",
      },
      {
        name: "heading",
        type: "string",
      },
      {
        name: "facts",
        type: "list",
        subFields: [
          {
            name: "id",
            type: "string",
          },
          {
            name: "heading",
            type: "string",
          },
          {
            name: "subHeading",
            type: "string",
          },
        ],
      },
    ],
  }
);

Builder.registerComponent(SectionProductDetailPage, {
  name: "SectionProductDetailPage",
  image:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-file-description' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M14 3v4a1 1 0 0 0 1 1h4' /%3E%3Cpath d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z' /%3E%3Cpath d='M9 17h6' /%3E%3Cpath d='M9 13h6' /%3E%3C/svg%3E",
});

Builder.registerComponent(SectionProductDetailPage2, {
  name: "SectionProductDetailPage2",
  image:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-file-description' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M14 3v4a1 1 0 0 0 1 1h4' /%3E%3Cpath d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z' /%3E%3Cpath d='M9 17h6' /%3E%3Cpath d='M9 13h6' /%3E%3C/svg%3E",
});

Builder.registerComponent(SectionAccountLayout, {
  name: "SectionCommonLayout",
  image:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-layout-navbar' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z' /%3E%3Cpath d='M4 9l16 0' /%3E%3C/svg%3E",
  inputs: [
    {
      name: "children",
      type: "string",
    },
  ],
});

Builder.registerComponent(SectionAccountPage, {
  name: "SectionAccountPage",
  image:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-user-circle' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' /%3E%3Cpath d='M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' /%3E%3Cpath d='M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855' /%3E%3C/svg%3E",
});

Builder.registerComponent(SectionAccountPass, {
  name: "SectionAccountPass",
  image:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-password-fingerprint' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M17 8c.788 1 1 2 1 3v1' /%3E%3Cpath d='M9 11c0 -1.578 1.343 -3 3 -3s3 1.422 3 3v2' /%3E%3Cpath d='M12 11v2' /%3E%3Cpath d='M6 12v-1.397c-.006 -1.999 1.136 -3.849 2.993 -4.85a6.385 6.385 0 0 1 6.007 -.005' /%3E%3Cpath d='M12 17v4' /%3E%3Cpath d='M10 20l4 -2' /%3E%3Cpath d='M10 18l4 2' /%3E%3Cpath d='M5 17v4' /%3E%3Cpath d='M3 20l4 -2' /%3E%3Cpath d='M3 18l4 2' /%3E%3Cpath d='M19 17v4' /%3E%3Cpath d='M17 20l4 -2' /%3E%3Cpath d='M17 18l4 2' /%3E%3C/svg%3E",
});

Builder.registerComponent(SectionSignUp, {
  name: "SectionSignUp",
  image:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-user-star' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0' /%3E%3Cpath d='M6 21v-2a4 4 0 0 1 4 -4h.5' /%3E%3Cpath d='M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z' /%3E%3C/svg%3E",
});

Builder.registerComponent(SectionLogin, {
  name: "SectionLogin",
  image:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-login-2' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2' /%3E%3Cpath d='M3 12h13l-3 -3' /%3E%3Cpath d='M13 15l3 -3' /%3E%3C/svg%3E",
});
Builder?.registerComponent(
  dynamic(() => import("./components/DiscoverMoreSlider")),
  {
    name: "DiscoverMoreSlider",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-eye-search' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0' /%3E%3Cpath d='M12 18c-.328 0 -.652 -.017 -.97 -.05c-3.172 -.332 -5.85 -2.315 -8.03 -5.95c2.4 -4 5.4 -6 9 -6c3.465 0 6.374 1.853 8.727 5.558' /%3E%3Cpath d='M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' /%3E%3Cpath d='M20.2 20.2l1.8 1.8' /%3E%3C/svg%3E",
    inputs: [
      {
        name: "sectionHead",
        type: "string",
      },
      {
        name: "sectionSubhead",
        type: "string",
      },
      {
        name: "sliderCards",
        type: "list",
        subFields: [
          {
            name: "name",
            type: "string",
            required: true,
            defaultValue: "Exclusive collection for everyone",
          },
          {
            name: "desc",
            type: "string",
            required: true,
            defaultValue: "Shop the latest <br /> from top brands",
          },
          {
            name: "featuredImage",
            type: "file",
            defaultValue: img1,
          },
          {
            name: "color",
            type: "string",
            required: true,
            defaultValue: "Explore",
          },
          {
            name: "className",
            type: "any",
            required: true,
            defaultValue: "",
          },
        ],
      },
    ],
  }
);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});
