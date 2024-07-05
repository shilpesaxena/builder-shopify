import React, { FC, useEffect, useState } from "react";
import MainNav2Logged from "./MainNav2Logged";
import { BuilderContent, builder } from "@builder.io/sdk";

export interface HeaderLoggedProps {}
builder.init("ba6053ccc39447e299b7e64c77047300");

const HeaderLogged: FC<HeaderLoggedProps> = () => {
  useEffect(() => {
    async function fetchContent() {
      const links = await builder.getAll("header", {});
      setHeaderData(links);
    }
    fetchContent();
  }, []);
  const [headerData, setHeaderData] = useState<BuilderContent[]>([]);

  return (
    <div className="nc-HeaderLogged sticky top-0 w-full z-40 ">
        <MainNav2Logged props={headerData[0]?.data} />
    </div>
  );
};

export default HeaderLogged;
