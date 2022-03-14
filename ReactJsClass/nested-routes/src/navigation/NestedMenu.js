import React from "react";
import { NavLink } from "react-router-dom";
import { pathTo } from "./utils";

const Menu = ({ routes, level }) => (
  <nav className={`menu menu-level-${level}`}>
    {routes.map((route, index) => (
      <NavLink key={index} to={route.path}>
        {route.label}
      </NavLink>
    ))}
  </nav>
);

const NestedMenu = ({ route }) => (
  <>
    {pathTo(route)
      .filter(r => r.routes)
      .map((r, index) => (
        <Menu key={index} routes={r.routes} level={index} />
      ))}
  </>
);

export default NestedMenu;