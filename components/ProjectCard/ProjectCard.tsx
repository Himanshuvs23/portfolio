import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import classNames from "classnames/bind";
import { TechStack } from "@/utils/constants/constants";
import { IProjectCardProps } from "@/utils/typings/typings";
import styles from "./ProjectCard.module.css";

const cx = classNames.bind(styles);

const ProjectCard: NextPage<IProjectCardProps> = ({ project }) => {
  return (
    <div className={cx("project-card")}>
      {project?.image?.url ? (
        <Image src={project?.image?.url} alt={project?.title} width={200} height={120} priority />
      ) : (
        <div className={cx("project-card-placeholder")}>{project?.title?.slice(0, 2)}</div>
      )}
      <p className={cx("project-card-title")}>{project?.title}</p>
      <div className={cx("project-card-techStack")}>
        {project?.techStack?.map(stack => {
          if (stack?.text?.toLowerCase() !== TechStack.All.toLowerCase()) {
            return (
              <span key={stack?.text} className={cx("project-card-techStack-tech")}>
                {stack?.text}
              </span>
            );
          }
        })}
      </div>
      <p className={cx("project-card-description")}>{project?.description}</p>
      <div className={cx("project-card-links")}>
        {project?.githubLink && (
          <Image
            src="/assets/github.webp"
            alt="github-image"
            onClick={() => window.open(project?.githubLink, "_blank")}
            width={35}
            height={35}
            priority
          />
        )}
        {project?.demoLink && (
          <Image
            src="/assets/www.webp"
            alt="link-image"
            onClick={() => window.open(project?.demoLink, "_blank")}
            width={35}
            height={35}
            priority
          />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
