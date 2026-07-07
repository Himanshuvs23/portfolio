import React from "react";
import type { NextPage } from "next";
import classNames from "classnames/bind";
import { SkillCard } from "@/components";
import { ISkillsSectionProps } from "@/utils/typings/typings";
import { SKILLSET } from "@/utils/constants/constants";
import { useFilteredSkills } from "@/utils/hooks";
import styles from "./SkillsSection.module.css";

const cx = classNames.bind(styles);

const SkillsSection: NextPage<ISkillsSectionProps> = ({ skills }) => {
  const { filteredSkill: languages } = useFilteredSkills(skills, SKILLSET.LANGUAGES);
  const { filteredSkill: frontend } = useFilteredSkills(skills, SKILLSET.FRONTEND);
  const { filteredSkill: backend } = useFilteredSkills(skills, [
    SKILLSET.BACKEND,
    SKILLSET.DATABASE,
  ]);
  const { filteredSkill: architecture } = useFilteredSkills(skills, SKILLSET.ARCHITECTURE);
  const { filteredSkill: core } = useFilteredSkills(skills, SKILLSET.CORE);
  const { filteredSkill: tools } = useFilteredSkills(skills, SKILLSET.TOOLS);

  return (
    <div className={cx("skills")}>
      <h1 className={cx("skills-heading")}>Skills & Expertise</h1>
      <div className={cx("skills-container")}>
        <SkillCard skills={languages} skillName="Languages" />
        <SkillCard skills={frontend} skillName="Frontend" />
        <SkillCard skills={backend} skillName="Backend & Database" />
        <SkillCard skills={architecture} skillName="Architecture & Design" />
        <SkillCard skills={tools} skillName="DevOps & Tools" />
        <SkillCard skills={core} skillName="Core Concepts" />
      </div>
    </div>
  );
};

export default SkillsSection;
