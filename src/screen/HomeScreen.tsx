import React from "react";
import withViewerTemplate from "../hoc/withViewerTemplate";

function HomeScreen() {
  return (
    <div className="flex flex-col">
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
          <div className="flex items-center justify-center w-[400px] h-[600px] bg-input-grey">
            배너
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mr-[20px]">
          <span className="text-[14px] font-bold mb-[10px]">TailwindCSS</span>
          <div className="flex items-center justify-center w-[400px] h-[600px] bg-input-grey">
            배너
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <span className="text-[14px] font-bold mb-[10px]">eg</span>
            <span className="text-[14px] font-bold mb-[10px] text-egjs-yello">
              js
            </span>
          </div>
          <div className="flex items-center justify-center w-[400px] h-[600px] bg-input-grey">
            배너
          </div>
        </div>
      </div>
    </div>
  );
}

export default withViewerTemplate(HomeScreen);
