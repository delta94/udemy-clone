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
            "aic link noul flex c333" +
            (currentPage === nav[i].slug ? " on" : "")
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
    <div className="sidebar rel">
      <a href="#a" className="logo bl">
        <img src={logo} className="bl" alt="logo" />
      </a>

      <ul className="nav">{navigation}</ul>

      <div className="updated-course flex aic">
        <div className="icon-lamp-bright cfff s24 ico" />
        <div className="lbl s15 fontb c333">
          Updated Courses
          <h2 className="author s13 c777">by NHT</h2>
        </div>
      </div>

      <div className="stats aic flex">
        <div className="stats-box flex">
          <div className="ico ico-points s24 icon-shield" />
          <h2 className="val s15 c333 fontb">17</h2>
          <h2 className="lbl s13 c777">points</h2>
        </div>

        <div className="stats-box flex">
          <div className="ico ico-battery s24 icon-battery-90" />
          <h2 className="val s15 c333 fontb">45.3%</h2>
          <h2 className="lbl s13 c777">points</h2>
        </div>
      </div>

      <div className="me flex aic">
        <div className="photo cfff s24">
          <img src="http://placeimg.com/100/100/people" alt="me" />
        </div>
        <div className="lbl s15 fontb c333">
          NHT
          <h2 className="uname s13 c777">@delta94</h2>
        </div>
      </div>
    </div>
  );
}
