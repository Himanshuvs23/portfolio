import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import classNames from "classnames/bind";
import styles from "./FooterSection.module.css";

const cx = classNames.bind(styles);

const FooterSection: NextPage = () => {
  return (
    <footer className={cx("footer")}>
      <div className={cx("footer-socialmedia")}>
        <p>Connect with me !</p>
        <div className={cx("footer-socialmedia-links")}>
          <Image
            src="/assets/github.webp"
            alt="Github Link"
            width={35}
            height={35}
            priority
            onClick={() => window.open("https://github.com/Himanshuvs23", "_blank")}
          />
          <Image
            src="/assets/linkedin.webp"
            alt="Linkedin Link"
            width={35}
            height={35}
            priority
            onClick={() => window.open("https://www.linkedin.com/in/himanshu-shivde/", "_blank")}
          />
          <Image
            src="/assets/gmail.webp"
            alt="Gmail Link"
            width={35}
            height={35}
            priority
            onClick={() => window.open("mailto:golushivde23@gmail.com", "_blank")}
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
