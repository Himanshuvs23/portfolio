"use client";

import type { NextPage } from "next";
import classNames from "classnames/bind";
import { SECTION } from "@/utils/constants/constants";
import { INavbarProps } from "@/utils/typings/typings";
import styles from "./Navbar.module.css";

const cx = classNames.bind(styles);

const Navbar: NextPage<INavbarProps> = ({ onNavItemClick = () => {} }) => {
  return (
    <>
      <nav className={cx("navbar")}>
        <div className={cx("navbar-brand")}>
          <p className={cx("navbar-name")}>Himanshu Shivde</p>
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
      <div className={cx("bottom-nav")}>
        <button
          className={cx("bottom-nav-item")}
          type="button"
          onClick={() => onNavItemClick(SECTION.ABOUT)}
        >
          About
        </button>
        <button
          className={cx("bottom-nav-item")}
          type="button"
          onClick={() => onNavItemClick(SECTION.JOBS)}
        >
          Work
        </button>
        <button
          className={cx("bottom-nav-item")}
          type="button"
          onClick={() => onNavItemClick(SECTION.PROJECTS)}
        >
          Projects
        </button>
        <button
          className={cx("bottom-nav-item")}
          type="button"
          onClick={() => onNavItemClick(SECTION.SKILLS)}
        >
          Skills
        </button>
        <button
          className={cx("bottom-nav-item")}
          type="button"
          onClick={() => onNavItemClick(SECTION.CONTACT)}
        >
          Contact
        </button>
      </div>
    </>
  );
};

export default Navbar;
