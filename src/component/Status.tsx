import React, { useState, useEffect } from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMinimize, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

function Status() {
  const [duration, setDuration] = useState<moment.Duration>();

  useEffect(() => {
    // 시작일을 설정 (2021년 5월 1일)
    const startDate = moment("2021-05-01");

    // 1초마다 현재 시간과의 차이를 계산
    const interval = setInterval(() => {
      const now = moment();
      const diff = moment.duration(now.diff(startDate));
      setDuration(diff);
    }, 1000);

    // 컴포넌트 언마운트 시 interval 제거
    return () => clearInterval(interval);
  }, []);

  // 경과 시간을 형식에 맞게 변환
  const formatDuration = () => {
    if (!duration) return "";

    const years = duration.years();
    const months = duration.months();
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    return `${years}년 ${months}개월 ${days}일 ${hours}시 ${minutes}분 ${seconds}초`;
  };

  return (
    <div className="flex items-center justify-end w-full">
      <div className="flex flex-col w-[380px] rounded border border-input-grey">
        <div className="flex items-center justify-between p-2 bg-bg-blue">
          <span className="text-[14px] font-bold">
            KIM SEONG HYUN의 재직 상태는 ?
          </span>
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
        <div className="flex itmes-center px-2 pt-2">
          <span className="text-[20px] font-bold">재직 상태 :</span>
          <span className="text-[20px] font-bold ml-2 text-status-green">
            재직 중
          </span>
        </div>
        <div className="flex itmes-center px-2 pb-2">
          <span className="text-[20px] font-bold">경력 : </span>
          <span className="text-[20px] font-bold ml-2 text-egjs-yello">
            {formatDuration()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Status;
