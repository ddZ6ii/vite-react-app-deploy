// import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const base = import.meta.env.VITE_BASE;

  return (
    <nav>
      <ul className="flex justify-around">
        <li>
          <NavLink className="navlink" to={base}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to={base + "contact"}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to={base + "about"}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to={base + "page"}>
            Page
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
