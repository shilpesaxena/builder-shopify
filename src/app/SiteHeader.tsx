"use client";

import React from "react";
import { usePathname } from "next/navigation";
import HeaderLogged from "@/components/Header/HeaderLogged";
import Header from "@/components/Header/Header";
import { useThemeMode } from "@/hooks/useThemeMode";
// import initGrafanaFaroSdk from "@/lib/grafanaFaro";
// import { faro } from "@grafana/faro-web-sdk";

const SiteHeader = () => {
  // initGrafanaFaroSdk();

  // useThemeMode();

  // // push log explicitly
  // faro?.api?.pushLog && faro.api.pushLog(["Grafana Page Load"]);

  // // will be captured
  // // throw new Error("oh no");

  // // push error manually
  // faro?.api?.pushError && faro.api.pushError(new Error("oh no"));

  // // // push a RUM event
  // faro?.api?.pushEvent && faro.api.pushEvent("Header Loaded");

  let pathname = usePathname();

  return pathname === "/home-2" ? <Header /> : <HeaderLogged />;
};

export default SiteHeader;
