import React, { useState } from "react";
import withViewerTemplate from "../hoc/withViewerTemplate";
import { Modal } from "../component/Modal";
import MUIPage from "../component/Pages/MUIPage";
import { Box } from "@mui/material";
import { MobileModal } from "../component/MobileModal";
import TailWindCssPage from "../component/Pages/TailWindCssPage";

function HomeScreen() {
  const [mui, setMui] = useState(false);
  const [tailwindcss, setTailwindcss] = useState(false);

  return (
    <div className="flex flex-col relative">
      <div className="flex items-center justify-center w-full h-[300px] bg-input-grey mb-[30px]">
        <span>배너</span>
      </div>
      <div className="flex imtes-center justify-center">
        <span className="text-[18px] font-bold mb-[20px]">
          Library를 사용한 사이트 제작
        </span>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center mr-[20px]">
          <span className="text-[14px] font-bold mb-[10px] text-mui-blue">
            Material
          </span>
          <Box
            sx={{
              backgroundImage: "url('https://ifh.cc/g/hrZN9N.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="flex items-center justify-center w-[400px] h-[600px] bg-input-grey cursor-pointer"
            onClick={() => {
              setMui(true);
            }}
          />
        </div>
        <div className="flex flex-col items-center justify-center mr-[20px]">
          <span className="text-[14px] font-bold mb-[10px]">TailwindCSS</span>
          <Box
            sx={{
              backgroundImage: "url('https://ifh.cc/g/WPwTrc.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="flex items-center justify-center w-[400px] h-[600px] bg-input-grey cursor-pointer"
            onClick={() => {
              setTailwindcss(true);
            }}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <span className="text-[14px] font-bold mb-[10px]">eg</span>
            <span className="text-[14px] font-bold mb-[10px] text-egjs-yello">
              js
            </span>
          </div>
          <div className="flex items-center justify-center w-[400px] h-[600px] bg-input-grey cursor-pointer">
            배너
          </div>
        </div>
      </div>
      <Modal
        headerText="MUI Air Ticket"
        maxWidth={1770}
        open={mui}
        onClick={() => {
          setMui(false);
        }}
        children={<MUIPage />}
      />
      <MobileModal
        maxWidth={450}
        maxHeight={750}
        open={tailwindcss}
        children={<TailWindCssPage />}
        onClick={() => {
          setTailwindcss(false);
        }}
      />
    </div>
  );
}

export default withViewerTemplate(HomeScreen);
