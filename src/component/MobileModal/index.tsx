import React from "react";
import "./index.css";

export interface MobileModalProps {
  open: boolean;
  children: React.ReactNode;
  onClick: () => void;
  maxWidth?: number;
  maxHeight?: number;
}

export const MobileModal: React.FC<MobileModalProps> = ({
  open,
  children,
  onClick,
  maxWidth,
  maxHeight,
}) => {
  return (
    <>
      {open && (
        <div
          style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
          className={`fixed inset-0 z-50 bg-white rounded-[20px] my-auto mx-auto border border-input-grey shadow-2xl`}
        >
          {/* Mobile Header */}
          <div className={`fixed w-full max-w-[448px] border-b-2 z-50`}>
            <div className="min-h-[40px] flex items-center justify-center">
              <div className="min-w-[40px] rounded-[10px] min-h-[5px] bg-gray-500" />
            </div>
          </div>

          {/* Scrollable Content */}
          <div className={`overflow-auto mt-[40px] max-h-[630px]`}>
            <div className={`text-dark-grey min-h-[1000px]`}>{children}</div>
          </div>

          {/* Mobile Footer */}
          <div className={`fixed w-full max-w-[448px] border-t-2 z-50 b-0`}>
            <div className="min-h-[30px] flex items-center justify-center border-b-2 bg-[#F7F2EE]">
              <span className="text-base font-bold">tailwindcss ON Mobile</span>
            </div>
            <div className="min-h-[40px] flex items-center justify-center">
              <div
                className="min-w-[30px] rounded-[30px] min-h-[30px] bg-gray-300 cursor-pointer"
                onClick={onClick}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
