"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";
import AccountPage from "./SectionAccountPage";
import AccountSavelists from "./AccountSavelists";
import AccountOrder from "./AccountOrder";
import AccountPass from "./SectionAccountPass";
import AccountBilling from "./AccountBilling";

export interface CommonLayoutProps {
  children?: React.ReactNode;
}

const pages: {
  name: string;
  link: any;
}[] = [
  {
    name: "Account info",
    link: "/account",
  },
  {
    name: "Save lists",
    link: "/account-savelists",
  },
  {
    name: " My order",
    link: "/account-order",
  },
  {
    name: "Change password",
    link: "/account-password",
  },
  {
    name: "Change Billing",
    link: "/account-billing",
  },
];
export enum Pages {
  AccountInfo = "/account",
  SaveLists = "/account-savelists",
  MyOrder = "/account-order",
  ChangePassword = "/account-password",
  ChangeBilling = "/account-billing",
}

const SectionAccountCommonLayout: FC<CommonLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="nc-AccountCommonLayout container">
      <div className="mt-14 sm:mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-3xl xl:text-4xl font-semibold">Account</h2>
            <span className="block mt-4 text-neutral-500 dark:text-neutral-400 text-base sm:text-lg">
              <span className="text-slate-900 dark:text-slate-200 font-semibold">
                Enrico Cole,
              </span>{" "}
              ciseco@gmail.com · Los Angeles, CA
            </span>
          </div>
          <hr className="mt-10 border-slate-200 dark:border-slate-700"></hr>

          <div className="flex space-x-8 md:space-x-14 overflow-x-auto hiddenScrollbar">
            {pages.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.link}
                  className={`block py-5 md:py-8 border-b-2 flex-shrink-0 text-sm sm:text-base ${
                    pathname === item.link
                      ? "border-primary-500 font-medium text-slate-900 dark:text-slate-200"
                      : "border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <hr className="border-slate-200 dark:border-slate-700"></hr>
        </div>
      </div>
      <div className="max-w-4xl mx-auto pt-14 sm:pt-26 pb-24 lg:pb-32">
        {pathname === Pages.AccountInfo && <AccountPage />}
        {pathname === Pages.SaveLists && <AccountSavelists />}
        {pathname === Pages.MyOrder && <AccountOrder />}
        {pathname === Pages.ChangePassword && <AccountPass />}
        {pathname === Pages.ChangeBilling && <AccountBilling />}
      </div>
    </div>
  );
};

export default SectionAccountCommonLayout;
