import React from "react";
import { faWindowMinimize, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HeaderProps {
  // menuOnClick: () => void;
}

function Header(props: HeaderProps) {
  // const { menuOnClick } = props;

  return (
    <div className="flex w-full justify-between p-4 border border-bg-blue rounded bg-bg-blue">
      <div className="flex items-center w-full">
        <span className="font-bold text-[14px]">KIM SEONG HYUN - HOMPAGE</span>
      </div>
      <div className="flex items-center">
        <div className="flex items-center justify-center w-[24px] ml-2 cursor-pointer">
          <FontAwesomeIcon icon={faWindowMinimize} color="#4A4A4A" />
        </div>
        <div className="flex items-center justify-center w-[24px] ml-2 cursor-pointer">
          <FontAwesomeIcon icon={faSquare} color="#4A4A4A" />
        </div>
        <div className="flex items-center justify-center w-[24px] ml-2 cursor-pointer">
          <FontAwesomeIcon icon={faXmark} color="#4A4A4A" />
        </div>
      </div>
    </div>
  );
}

export default Header;
