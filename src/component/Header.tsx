import React from "react";
import { faWindowMinimize, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HeaderProps {
  menuCloseClick?: () => void;
  menuFullScreenClick?: () => void;
  menuWindowSizeClick?: () => void;
  headerText: string;
}

function Header(props: HeaderProps) {
  const {
    headerText,
    menuCloseClick,
    menuFullScreenClick,
    menuWindowSizeClick,
  } = props;

  return (
    <div className="flex w-full justify-between p-4 border border-bg-blue rounded bg-bg-blue shadow-lg">
      <div className="flex items-center w-full">
        <span className="font-bold text-[14px]">{headerText}</span>
      </div>
      <div className="flex items-center">
        <div className="flex items-center justify-center w-[24px] ml-2 cursor-pointer">
          <FontAwesomeIcon
            icon={faWindowMinimize}
            color="#4A4A4A"
            onClick={menuWindowSizeClick}
          />
        </div>
        <div className="flex items-center justify-center w-[24px] ml-2 cursor-pointer">
          <FontAwesomeIcon
            icon={faSquare}
            color="#4A4A4A"
            onClick={menuFullScreenClick}
          />
        </div>
        <div className="flex items-center justify-center w-[24px] ml-2 cursor-pointer">
          <FontAwesomeIcon
            icon={faXmark}
            color="#4A4A4A"
            onClick={menuCloseClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
