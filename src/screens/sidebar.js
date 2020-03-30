import React, { useState } from "react";
import logo from "../ui/logo-coral.svg";

export default function Sidebar() {
  const [nav, setNav] = useState([
    { label: "Home", slug: "/", icon: "icon-home" },
    { label: "Discover", slug: "discover", icon: "icon-ul" },
    { label: "Categories", slug: "cates", icon: "icon-tag" },
    { label: "My Courses", slug: "my-courses", icon: "icon-briefcase" }
  ]);

  const [currentPage, setCurrentPage] = useState("/");

  const navigation = [];
  for (let i = 0; i < nav.length; i++) {
    navigation.push(
      <li key={"nav-" + i + "-" + nav[i].slug}>
        <a
          className={
            "link noul flex c333" + (currentPage == nav[i].slug ? " on" : "")
          }
          href={nav[i].slug}
        >
          <div className={"ico s20 " + nav[i].icon} />
          <h2 className="Ibl s20">{nav[i].label}</h2>
        </a>
      </li>
    );
  }
  return (
    <div className="sidebar fixed">
      <a href="#a" className="logo bl">
        <img src={logo} className="bl" alt="logo" />
      </a>

      <ul className="nav">{navigation}</ul>
    </div>
  );
}
