"use client";

import { useState } from "react";
import type { NextPage } from "next";
import classNames from "classnames/bind";
import { SECTION } from "@/utils/constants/constants";
import { INavbarProps } from "@/utils/typings/typings";
import styles from "./Navbar.module.css";

const cx = classNames.bind(styles);

const Navbar: NextPage<INavbarProps> = ({ onNavItemClick = () => {} }) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <>
      <nav className={cx("navbar")}>
        <div className={cx("menu")}> 
          <input
            className={cx("checked")}
            type="checkbox"
            checked={showSidebar}
            onChange={() => setShowSidebar(!showSidebar)}
          />
          <div className={cx("line", showSidebar ? "line-1" : "line1")} />
          <div className={cx("line", showSidebar ? "line-2" : "line2")} />
          <div className={cx("line", showSidebar ? "line-3" : "line3")} />
        </div>
        <div className={cx("navbar-brand")}> 
          <p className={cx("navbar-name")}>Himanshu</p>
          <span className={cx("navbar-signature")}>\'23</span>
        </div>
        <div className={cx("navbar-list")}>
          <p className={cx("navbar-list-item")} onClick={() => onNavItemClick(SECTION.ABOUT)}>
            About
          </p>
          <p className={cx("navbar-list-item")} onClick={() => onNavItemClick(SECTION.JOBS)}>
            Work
          </p>
          <p className={cx("navbar-list-item")} onClick={() => onNavItemClick(SECTION.PROJECTS)}>
            Projects
          </p>
          <p className={cx("navbar-list-item")} onClick={() => onNavItemClick(SECTION.SKILLS)}>
            Skills
          </p>
          <p className={cx("navbar-list-item")} onClick={() => onNavItemClick(SECTION.CONTACT)}>
            Contact
          </p>
        </div>
      </nav>
      <div className={cx("sidebar", showSidebar && "active")}>
        <p className={cx("sidebar-item")} onClick={() => onNavItemClick(SECTION.ABOUT)}>
          About
        </p>
        <p className={cx("sidebar-item")} onClick={() => onNavItemClick(SECTION.JOBS)}>
          Work
        </p>
        <p className={cx("sidebar-item")} onClick={() => onNavItemClick(SECTION.PROJECTS)}>
          Projects
        </p>
        <p className={cx("sidebar-item")} onClick={() => onNavItemClick(SECTION.SKILLS)}>
          Skills
        </p>
        <p className={cx("sidebar-item")} onClick={() => onNavItemClick(SECTION.CONTACT)}>
          Contact
        </p>
      </div>
      <div className={cx("bottom-nav")}> 
        <button className={cx("bottom-nav-item")} type="button" onClick={() => onNavItemClick(SECTION.ABOUT)}>
          About
        </button>
        <button className={cx("bottom-nav-item")} type="button" onClick={() => onNavItemClick(SECTION.JOBS)}>
          Work
        </button>
        <button className={cx("bottom-nav-item")} type="button" onClick={() => onNavItemClick(SECTION.PROJECTS)}>
          Projects
        </button>
        <button className={cx("bottom-nav-item")} type="button" onClick={() => onNavItemClick(SECTION.SKILLS)}>
          Skills
        </button>
      </div>
    </>
  );
};

export default Navbar;
