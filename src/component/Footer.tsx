import React from "react";
import {
  faBars,
  faComment,
  faEnvelope,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "./IconButton";
import {
  faDiscord,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

interface FooterProps {
  menuOnClick: () => void;
}

function Footer(props: FooterProps) {
  const { menuOnClick } = props;
  const navigate = useNavigate();

  return (
    <div className="flex w-full items-center justify-center px-4 py-2 border border-bg-blue rounded bg-bg-blue">
      <div className="flex items-center">
        <IconButton
          size="xl"
          icon={faBars}
          color="#4A4A4A"
          onClick={menuOnClick}
        />
      </div>
      <div className="flex items-center justify-center w-[24px] ml-1 cursor-pointer">
        <IconButton
          size="xl"
          icon={faHouse}
          color="#4A4A4A"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <a
        href="mailto:insang145@gamil.com"
        className="flex items-center justify-center w-[24px] ml-4 cursor-pointer"
      >
        <FontAwesomeIcon size="xl" icon={faEnvelope} color="#4A4A4A" />
      </a>
      <a
        href="https://open.kakao.com/o/sf9iYKvf"
        target="_blank"
        className="flex items-center justify-center w-[24px] ml-4 cursor-pointer"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon size="xl" icon={faComment} color="#4A4A4A" />
      </a>
      <a
        href="https://github.com/DearKim"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-[24px] ml-4 cursor-pointer"
      >
        <FontAwesomeIcon size="xl" icon={faGithub} color="#4A4A4A" />
      </a>
      <a
        href="https://discord.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-[24px] ml-4 cursor-pointer"
      >
        <FontAwesomeIcon size="xl" icon={faDiscord} color="#4A4A4A" />
      </a>
      <a
        href="https://www.instagram.com/seong_hyuuuuuun/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-[24px] ml-4 cursor-pointer"
      >
        <FontAwesomeIcon size="xl" icon={faInstagram} color="#4A4A4A" />
      </a>
    </div>
  );
}

export default Footer;
