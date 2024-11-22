import { Box, Button, IconButton, Typography, Popover } from "@mui/material";
import React, { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import Schedule from "./Schedule";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface CityData {
  value: string;
  key: string;
}

interface PlanScheduleProps {
  insideData: CityData[];
  outsideData: CityData[];
  openSchedule: boolean;
  onClickPlanSchedule: () => void;
  onClickSchedule: () => void;
  straight?: boolean;
  onSubmit: () => void;
  reload: () => void;
  startState: CityData;
  endState: CityData;
  setStartState: React.Dispatch<React.SetStateAction<CityData>>;
  setEndState: React.Dispatch<React.SetStateAction<CityData>>;
}

function PlanSchedule(props: PlanScheduleProps) {
  const {
    insideData,
    outsideData,
    openSchedule,
    onClickPlanSchedule,
    onClickSchedule,
    straight,
    onSubmit,
    startState,
    endState,
    setStartState,
    setEndState,
    reload,
  } = props;

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [start, setStart] = useState<CityData>({ value: "김포", key: "GMP" });
  const [end, setEnd] = useState<CityData>({ value: "울산", key: "USN" });
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());
  const [, setOpenStartDate] = useState(false);
  const [, setOpenEndDate] = useState(false);
  const [selectedButton, setSelectedButton] = useState<"start" | "end" | null>(
    null
  );

  const handleClose = () => {
    setAnchorEl(null);
    onClickSchedule();
  };

  const handleCitySelect = (city: CityData) => {
    if (selectedButton === "start") {
      setStart(city);
      startState.key = city.key;
      setStartState(city);
    } else if (selectedButton === "end") {
      setEnd(city);
      endState.key = city.key;
      setEndState(city);
    }
    handleClose();
  };

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    buttonType: "start" | "end"
  ) => {
    setAnchorEl(event.currentTarget); // Popover 기준 설정
    setSelectedButton(buttonType); // 어떤 버튼이 눌렸는지 설정
    const target = document.getElementById("scrollTop");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" }); // 부드럽게 스크롤
    }
    setTimeout(() => {
      onClickPlanSchedule(); // Popover 열림 상태 설정
    }, 350);
  };

  const handleStartDate = (newDate: Dayjs | null) => {
    setStartDate(newDate);
  };
  const handleEndDate = (newDate: Dayjs | null) => {
    setEndDate(newDate);
  };
  const handleCloseDate = () => {
    setSelectedButton(null);
    setOpenStartDate(false);
    setOpenEndDate(false);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          position: "relative",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            marginBottom: 2,
            position: "relative",
          }}
          id="scrollTop"
        >
          <Box
            sx={{
              display: "flex",
              marginBottom: 2,
              position: "relative",
              minWidth: 250,
            }}
          >
            <Button
              variant="text"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                minWidth: 100,
              }}
              id="start"
              onClick={(e) => handleClick(e, "start")}
            >
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                {start.key}
              </Typography>
              <Typography variant="caption">{start.value}</Typography>
            </Button>

            <IconButton
              aria-label="출도착지 전환"
              title="출도착지 전환"
              sx={{
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              onClick={() => {
                const tempStart = { ...startState };
                setStartState(endState);
                setEndState(tempStart);

                setStart(endState);
                setEnd(tempStart);

                reload();
              }}
            >
              🔄
            </IconButton>

            <Button
              variant="text"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 100,
              }}
              id="end"
              onClick={(e) => handleClick(e, "end")}
            >
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                {end.key}
              </Typography>
              <Typography variant="caption">{end.value}</Typography>
            </Button>

            {/* Schedule Popover */}
            <Popover
              open={openSchedule}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <Schedule
                open={openSchedule}
                onCitySelect={handleCitySelect}
                insideData={insideData}
                outsideData={outsideData}
              />
            </Popover>
          </Box>

          {/* 날짜 선택 */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              marginBottom: 2,
              marginLeft: 3,
              minWidth: 250,
            }}
          >
            <DatePicker
              value={startDate}
              onChange={(newDate) => handleStartDate(newDate)}
              openTo="day"
              views={["year", "month", "day"]}
              onClose={handleCloseDate}
              format="YYYY.MM.DD"
            />

            {!straight && (
              <DatePicker
                value={endDate}
                onChange={(newDate) => handleEndDate(newDate)}
                openTo="day"
                views={["year", "month", "day"]}
                onClose={handleCloseDate}
                format="YYYY.MM.DD"
              />
            )}
          </Box>
        </Box>

        <Box
          sx={{
            marginBottom: 2,
            paddingX: 2,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: 1,
              width: "100%",
            }}
            type="submit"
            onClick={onSubmit}
          >
            항공권 검색
          </Button>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}

export default PlanSchedule;
