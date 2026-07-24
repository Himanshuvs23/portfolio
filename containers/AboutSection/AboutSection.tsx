"use client";

import React from "react";
import type { NextPage } from "next";
import classNames from "classnames/bind";
import Image from "next/image";
import styles from "./AboutSection.module.css";

const cx = classNames.bind(styles);

const AboutSection: NextPage = () => {
  return (
    <div className={cx("about")}>
      <div className={cx("about-left")}>
        <h1 className={cx("about-left-head")}>
          <span className={cx("about-left-typing")}>Hi, I&apos;m Himanshu S</span>
        </h1>
        <p className={cx("about-left-text")}>
          Software Engineer and Full Stack Developer focused on scalable web applications with Java,
          JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, and MongoDB. I build REST
          APIs, authentication flows, optimized databases, CI/CD pipelines, and AI-powered
          applications, backed by strong software engineering fundamentals and 150+ DSA problems
          solved.
        </p>
        <div className={cx("about-left-socialMedia")}>
          <Image
            src="/assets/github.webp"
            alt="GitHub"
            width={40}
            height={40}
            priority
            onClick={() => window.open("https://github.com/Himanshuvs23", "_blank")}
          />
          <Image
            src="/assets/linkedin.webp"
            alt="LinkedIn"
            width={40}
            height={40}
            priority
            onClick={() => window.open("https://www.linkedin.com/in/himanshu-shivde/", "_blank")}
          />
          <Image
            src="/assets/gmail.webp"
            alt="Email"
            width={40}
            height={40}
            priority
            onClick={() => window.open("mailto:golushivde23@gmail.com", "_blank")}
          />
          <Image
            src="/assets/leetcode.png"
            alt="LeetCode"
            width={100}
            height={30}
            priority
            onClick={() => window.open("https://leetcode.com/u/himanshushivde/", "_blank")}
          />

        </div>
        <div className={cx("about-left-actions")}> 
          <button
            className={cx("about-left-action")}
            type="button"
            onClick={() => window.open("mailto:golushivde23@gmail.com", "_blank")}
          >
            Connect with me
          </button>
          <button
            className={cx("about-left-action", "resume")}
            type="button"
            onClick={() => window.open("https://drive.google.com/file/d/1R6xkBY-CelET__icokuehnFEuEq6nonN/view?usp=sharing", "_blank")}
          >
            Resume
          </button>
        </div>
      </div>
      <div className={cx("about-right")}>
        <div className={cx("about-right-profilePic")}>
          <Image
            src="/assets/profilePic.jpeg"
            alt="Himanshu Shivde profile"
            fill
            sizes="(max-width: 600px) 72vw, 380px"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
