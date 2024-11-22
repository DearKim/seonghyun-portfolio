import React, { useState } from "react";
import "./index.css";
import Header from "../Header";
import clsx from "clsx";

export interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  onClick: () => void;
  maxWidth?: number;
  headerText: string;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  children,
  onClick,
  maxWidth,
  headerText,
}) => {
  const [fullScreen, setFullScreen] = useState(false);
  const [windowSize, setWindowSize] = useState(false);

  return (
    <>
      {open && (
        <div
          style={{ maxWidth: maxWidth }}
          className={` fixed inset-0 flex flex-col z-50 bg-white rounded rounded-[5px] mt-[82px] mb-[58px] mx-auto border border-input-grey shadow-lg overflow-auto ${clsx(
            {
              "!mx-[0]": fullScreen,
              "!mx-4 !h-[55px] w-[400px] top-auto bottom-0": windowSize,
            }
          )}`}
        >
          <div
            className={`w-full max-w-[1770px] mx-auto h-[55px] flex fixed top-0 left-0 right-0 bg-white z-50 mt-[82px] rounded rounded-[5px] ${clsx(
              {
                "!ml-4 !w-[400px] top-auto bottom-0 mb-[58px] ": windowSize,
              }
            )}`}
          >
            <Header
              headerText={headerText}
              menuCloseClick={onClick}
              menuWindowSizeClick={() => {
                setWindowSize(true);
                setFullScreen(false);
              }}
              menuFullScreenClick={() => {
                if (fullScreen && !windowSize) {
                  setFullScreen(false);
                } else if (!fullScreen && !windowSize) {
                  setFullScreen(true);
                }
                setWindowSize(false);
              }}
            />
          </div>
          {!windowSize && (
            <div
              className={
                " px-[19px] pt-[12px] pb-[19px] min-w-[550px] min-h-[1700px] relative"
              }
            >
              {/* 모달 내용 */}
              <div className={`text-dark-grey pl-8`}>{children}</div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
