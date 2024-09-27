import clsx from "clsx";
import React from "react";

export interface LoadingSpinnerProps {
  whiteLoading?: boolean;
}
export const LoadingSpinner = ({ whiteLoading }: LoadingSpinnerProps) => (
  <svg
    className={`animate-spin  h-5 w-5 text-primary-red ${clsx({
      "text-white": whiteLoading,
    })} `}
    // mr-3 -ml-1 스타일 버튼가운데 위치할 수 있도록 주석처리
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);
