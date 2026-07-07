import React from "react";
import type { NextPage } from "next";
import classNames from "classnames/bind";
import { ISkillCardProps } from "@/utils/typings/typings";
import styles from "./SkillCard.module.css";

const cx = classNames.bind(styles);

const SkillCard: NextPage<ISkillCardProps> = ({ skills, skillName }) => {
  return (
    <div className={cx("skill-card")}>
      <p className={cx("skill-card-heading")}>{skillName}</p>
      <div className={cx("skill-card-container")}>
        {skills?.map(skill => (
          <button
            key={skill?.id}
            type="button"
            className={cx("skill-card-container-item")}
            onClick={() => skill?.url && window.open(skill?.url, "_blank")}
          >
            {skill?.skill}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
