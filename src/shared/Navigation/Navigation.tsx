import React from "react";
import NavigationItem from "./NavigationItem";

function Navigation(props : any) {
  const links = props?.props?.props?.links
  return (
    <ul className="nc-Navigation flex items-center">
      {links && links?.map((item : any ) => (
        <NavigationItem key={item?.text} menuItem={item} />
      ))}
    </ul>
  );
}

export default Navigation;
