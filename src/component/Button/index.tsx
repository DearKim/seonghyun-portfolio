import React, { MouseEventHandler } from "react";
import "./index.css";
import clsx from "clsx";
import { LoadingSpinner } from "../LoadingSpinner";

export interface ButtonProps {
  children?: React.ReactNode;
  color?: "primary" | "darkgray";
  variant?: "text" | "outlined" | "contained";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  loading?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
  endIcon?: React.ReactNode;
  btnStyle?: string;
  roundedBtn?: boolean;
  size?: "small" | undefined;
  permissionDisabled?: boolean;
}

const Button = ({
  children,
  color,
  variant,
  onClick,
  disabled,
  loading,
  type,
  endIcon,
  btnStyle,
  roundedBtn,
  size,
  permissionDisabled,
}: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center h-10 px-[22px] py-2 font-bold text-[15px] rounded focus:outline-none min-w-[150px] disabled:opacity-50 select-none focus-visible:ring-black focus-visible:ring-2 ${clsx(
        {
          "text-white bg-primary-red hover:primary-red":
            color === "primary" && variant === "contained",
          "border border-primary-red text-primary-red":
            color === "primary" && variant === "outlined",
          "text-white bg-dark-grey rounded-[5px]":
            color === "darkgray" && variant === "contained",
          "rounded-[20px]": roundedBtn,
          "min-w-[80px]": size === "small",
          "opacity-50 cursor-default": permissionDisabled && disabled,
        }
      )} ${btnStyle}`}
      disabled={!permissionDisabled && disabled}
      type={type}
      onClick={onClick}
    >
      {loading ? (
        <LoadingSpinner whiteLoading={variant === "contained"} />
      ) : (
        children
      )}
      {/* FontAwesomeIcon 아이콘 */}
      {!loading && endIcon && endIcon}
    </button>
  );
};

export default Button;
