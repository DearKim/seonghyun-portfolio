import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import clsx from "clsx";

export interface IconButtonProps {
  icon: IconProp;
  onClick: () => void;
  disabled?: boolean;
  btnStyle?: string;
  color?: string;
  size?:
    | "2xs"
    | "xs"
    | "sm"
    | "lg"
    | "xl"
    | "2xl"
    | "1x"
    | "2x"
    | "3x"
    | "4x"
    | "5x"
    | "6x"
    | "7x"
    | "8x"
    | "9x"
    | "10x";
}

export const IconButton = ({
  icon,
  onClick,
  disabled,
  btnStyle,
  color,
  size,
}: IconButtonProps) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      color={color}
      size={size}
      className={`py-2 px-[15px] cursor-pointer ${btnStyle} ${clsx({
        "!cursor-default !text-bg-grey": disabled,
      })}`}
      onClick={(e) => {
        if (!disabled) {
          e.stopPropagation();
          onClick();
        }
      }}
    />
  );
};
