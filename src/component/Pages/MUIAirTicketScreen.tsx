import React, { SyntheticEvent, useEffect, useState } from "react";
import {
  Box,
  Tab,
  Tabs,
  Typography,
  IconButton,
  CircularProgress,
  Button,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import PlanSchedule from "../PlanSchedule";
import SelectedFlight from "../SelectedFlight";

const outsideData = [
  { value: "도쿄", key: "TYO" },
  { value: "오사카", key: "OSA" },
  { value: "후쿠오카", key: "FUK" },
  { value: "방콕", key: "BKK" },
  { value: "호치민", key: "SGN" },
  { value: "다낭", key: "DAD" },
];
const insideData = [
  { value: "서울", key: "SEL" },
  { value: "인천", key: "ICN" },
  { value: "김포", key: "GMP" },
  { value: "부산", key: "PUS" },
  { value: "제주", key: "CJU" },
  { value: "청주", key: "CJJ" },
  { value: "대구", key: "TAE" },
  { value: "무안", key: "MWX" },
  { value: "광주", key: "KWJ" },
  { value: "여수", key: "RSU" },
  { value: "군산", key: "KUV" },
  { value: "울산", key: "USN" },
  { value: "포항", key: "KPO" },
  { value: "원주", key: "WJU" },
  { value: "사천", key: "HIN" },
  { value: "양양", key: "YNY" },
];

const topTexts = [
  "설레이는 여행의 시작!",
  "해외 출장 항공!",
  "항공권 구매하면",
  "매일 진행 되는",
  "항공권 구매하면",
];
const bottomTexts = [
  "MUI 항공권",
  "첫 예약 시 5,000원 할인!",
  "호텔 최대 15% 할인!",
  "항공권 적립금!",
  "패키지 최대 50% 할인!",
];

interface Flight {
  airline: string;
  logo: string;
  departureTime: string;
  departureCode: string;
  arrivalTime: string;
  arrivalCode: string;
  duration: string;
  price: string;
  seatType: string;
  promo: string;
}

function MUIAirTicketScreen() {
  const [value, setValue] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openSchedule, setOpenSchedule] = useState(false);
  const [loading, setLoading] = useState(false);
  const [viewList, setViewList] = useState(false);
  const [progress, setProgress] = React.useState(10);
  const [start, setStart] = useState({ value: "김포", key: "GMP" });
  const [end, setEnd] = useState({ value: "울산", key: "USN" });

  const [flightsData, setFlightsData] = useState<Flight[]>([]);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [selectedFlights, setSelectedFlights] = useState<{
    going?: Flight;
    returning?: Flight;
  }>({});

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleSchedule = () => {
    setOpenSchedule((o) => !o);
  };

  const onSubmit = () => {
    setLoading(true);
    setViewList(false);
    setProgress(0);
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + 10;
        if (nextProgress >= 100) {
          clearInterval(timer);
        }
        return nextProgress;
      });
    }, 800);

    setTimeout(() => {
      setLoading(false);
      setViewList(true);
    }, 9000);
  };

  // 텍스트 자동 전환 로직
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % topTexts.length);
    }, 3000); // 3초마다 텍스트 변경
    return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 해제
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topTexts.length]);

  const generateDummyFlights = (): Flight[] => {
    const flights: Flight[] = [];
    const airlines = [
      {
        name: "대한항공",
        logo: "https://vertical.pstatic.net/vertical/static/flight/airlines/KE.png",
        seatType: "일반석",
        promo: "항공 포인트 1% 적립",
      },
      {
        name: "진에어",
        logo: "https://vertical.pstatic.net/vertical/static/flight/airlines/LJ.png",
        seatType: "할인석",
        promo: "항공 포인트 1% 적립",
      },
    ];

    const getRandomPrice = () => {
      const min = 78900; // 최소 금액
      const max = 100000; // 최대 금액
      return Math.floor(Math.random() * ((max - min) / 100 + 1)) * 100 + min;
    };

    let departureHour = 0; // 08:00부터 시작
    const duration = 1; // 1시간 소요
    const departureCode = start.key;
    const arrivalCode = end.key;

    for (let i = 0; i < 12; i++) {
      const airline = airlines[i % 2];
      const departureTime = `${String(departureHour).padStart(2, "0")}:00`;
      const arrivalTime = `${String(departureHour + duration).padStart(
        2,
        "0"
      )}:00`;
      flights.push({
        airline: airline.name,
        logo: airline.logo,
        departureTime,
        departureCode,
        arrivalTime,
        arrivalCode,
        duration: `${duration}시간 00분`,
        price: `${getRandomPrice().toLocaleString()}`, // 랜덤 금액 생성
        seatType: airline.seatType,
        promo: airline.promo,
      });
      departureHour += 2; // 2시간 간격
    }

    return flights;
  };

  useEffect(() => {
    const updatedFlights = generateDummyFlights();
    setFlightsData(updatedFlights);
    // eslint-disable-next-line
  }, [start, end]);

  const handleFlightClick = (flight: Flight) => {
    if (!selectedFlights.going) {
      setSelectedFlights((prev) => ({ ...prev, going: flight }));
    } else if (!selectedFlights.returning) {
      setSelectedFlights((prev) => ({ ...prev, returning: flight }));

      const tempStart = start;
      setStart(end);
      setEnd(tempStart);

      const updatedFlights = generateDummyFlights();
      setFlightsData(updatedFlights);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="flex justify-center items-center mb-3">
        <FontAwesomeIcon icon={faPlaneDeparture} size="xl" />
        <Typography ml={1} variant="h6">
          MUI Air Ticket
        </Typography>
      </div>
      <div className="w-full h-full max-w-[1645px] flex items-center justify-center flex-col">
        {/* 이미지 슬라이더 */}
        <Box
          sx={{
            width: "100%",
            height: "auto",
            aspectRatio: "16 / 9",
            backgroundImage: "url('https://ifh.cc/g/pR9P2x.webp')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidht: 1770,
              height: "auto",
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              align="center"
              sx={{
                color: "#fff",
                transition: "opacity 0.5s ease-in-out",
                fontWeight: "bold",
              }}
            >
              {topTexts[currentIndex]}
            </Typography>
            <Typography
              variant="h3"
              color="grey"
              align="center"
              sx={{
                color: "#feff80",
                transition: "opacity 0.5s ease-in-out",
                fontWeight: "bold",
                marginTop: 4,
              }}
            >
              {bottomTexts[currentIndex]}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {topTexts.map((_, index) => (
                <IconButton
                  key={index}
                  onClick={() => handleDotClick(index)}
                  sx={{
                    marginTop: 2,
                    marginX: "3px",
                    width: 5,
                    height: 5,
                    backgroundColor:
                      currentIndex === index ? "skyblue" : "gray",
                    borderRadius: "50%",
                    transition: "background-color 0.3s",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
        {/* 탭 영역 */}
        <Box
          sx={{
            width: "100%",
            maxWidth: 1000,
            height: 210,
            marginTop: "-100px",
            marginX: "10%",
            position: "relative",
            zIndex: 10,
            border: "2px solid #eee",
            borderRadius: "13px",
          }}
        >
          <div className="bg-white w-full h-full rounded rounded-[10px] z-10">
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                overflow: "auto",
              }}
            >
              <Tabs value={value} onChange={handleChange}>
                <Tab
                  label="왕복"
                  sx={{
                    fontWeight: "bold",
                  }}
                />
                <Tab
                  label="편도"
                  sx={{
                    fontWeight: "bold",
                  }}
                />
              </Tabs>
            </Box>
            <div className="p-[10px]">
              {value === 0 && (
                <PlanSchedule
                  startState={start}
                  endState={end}
                  setStartState={setStart}
                  setEndState={setEnd}
                  insideData={insideData}
                  outsideData={outsideData}
                  openSchedule={openSchedule}
                  onClickPlanSchedule={() => {
                    handleSchedule();
                  }}
                  onClickSchedule={() => {
                    handleSchedule();
                  }}
                  onSubmit={onSubmit}
                  reload={() => {
                    setViewList(false);
                  }}
                />
              )}
              {value === 1 && (
                <PlanSchedule
                  startState={start}
                  endState={end}
                  setStartState={setStart}
                  setEndState={setEnd}
                  insideData={insideData}
                  outsideData={outsideData}
                  openSchedule={openSchedule}
                  onClickPlanSchedule={() => {
                    handleSchedule();
                  }}
                  onClickSchedule={() => {
                    handleSchedule();
                  }}
                  straight
                  onSubmit={onSubmit}
                  reload={() => {
                    setViewList(false);
                  }}
                />
              )}
            </div>
          </div>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: 1000,
            marginTop: 5,
            paddingTop: 5,
          }}
        >
          {selectedFlights.going && (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                maxWidth: 480,
                marginRight: 2,
              }}
            >
              <SelectedFlight
                flight={selectedFlights.going}
                onDelete={() =>
                  setSelectedFlights((prev) => ({ ...prev, going: undefined }))
                }
                headerName={"가는 편"}
              />
            </Box>
          )}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              maxWidth: 480,
            }}
          >
            {selectedFlights.returning && (
              <SelectedFlight
                flight={selectedFlights.returning}
                onDelete={() =>
                  setSelectedFlights((prev) => ({
                    ...prev,
                    returning: undefined,
                  }))
                }
                headerName={"오는 편"}
              />
            )}
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            maxHeight: 700,
            minHeight: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: 1000,
            overflow: "auto",
            marginTop: 5,
            paddingTop: 5,
          }}
        >
          {loading && !viewList && (
            <Box sx={{ position: "relative", display: "inline-flex" }}>
              <CircularProgress variant="determinate" value={progress} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="caption"
                  component="div"
                  sx={{ color: "text.secondary" }}
                >{`${Math.round(progress)}%`}</Typography>
              </Box>
            </Box>
          )}

          {!loading && viewList && (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              {flightsData.map((flight, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <Button
                    variant="text"
                    sx={{
                      p: 2,
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      color: "#000",
                      width: "100%",
                    }}
                    onClick={() => handleFlightClick(flight)}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          width: 150,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              marginRight: 4,
                            }}
                          >
                            <img
                              src={flight.logo}
                              alt={flight.airline}
                              style={{
                                width: "40px",
                                height: "40px",
                                marginRight: "8px",
                              }}
                            />
                            <Typography variant="body1" fontWeight="bold">
                              {flight.airline}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: 4,
                          width: 280,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: 4,
                          }}
                        >
                          <Typography
                            variant="body2"
                            fontWeight="bold"
                            sx={{
                              marginRight: 1,
                            }}
                          >
                            {flight.departureTime}
                          </Typography>
                          <Typography variant="caption">
                            {flight.departureCode}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: 4,
                          }}
                        >
                          <Typography
                            variant="body2"
                            fontWeight="bold"
                            sx={{
                              marginRight: 1,
                            }}
                          >
                            {flight.arrivalTime}
                          </Typography>
                          <Typography variant="caption">
                            {flight.arrivalCode}
                          </Typography>
                        </Box>
                        <Typography variant="caption">
                          {flight.duration}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 300,
                        height: 40,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: 4,
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{
                            marginRight: 2,
                          }}
                        >
                          {flight.seatType}
                        </Typography>
                        <Typography variant="body1" fontWeight="bold">
                          {flight.price}원~
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="caption" color="primary">
                          {flight.promo}
                        </Typography>
                      </Box>
                    </Box>
                  </Button>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </div>
    </div>
  );
}

export default MUIAirTicketScreen;
