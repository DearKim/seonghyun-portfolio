import React, { SyntheticEvent, useState } from "react";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MUIAirTicketScreen from "./MUIAirTicketScreen";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function MUIPage() {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const CustomTabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        style={{ overflow: "auto" }}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <FontAwesomeIcon icon={faEarthAmericas} size="xl" />
        <Typography ml={1} variant="h6">
          MUI TRAVEL RESERVATION
        </Typography>
      </div>
      <div>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{ borderBottom: 1, borderColor: "divider", overflow: "auto" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                label="항공권 예약"
                className="!font-bold !text-[17px]"
                {...a11yProps(0)}
              />
              {/* <Tab
                label="호텔 예약"
                className="!font-bold !text-[17px]"
                {...a11yProps(1)}
              />
              <Tab
                label="패키지 예약"
                className="!font-bold !text-[17px]"
                {...a11yProps(2)}
              /> */}
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <MUIAirTicketScreen />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            호텔 예약
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            패키지 예약
          </CustomTabPanel>
        </Box>
      </div>
      <div></div>
    </div>
  );
}

export default MUIPage;
