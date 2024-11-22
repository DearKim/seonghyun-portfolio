import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

interface SelectedFlightProps {
  flight: {
    airline: string;
    logo: string;
    departureTime: string;
    departureCode: string;
    arrivalTime: string;
    arrivalCode: string;
    duration: string;
    price: string;
    seatType: string;
  };
  onDelete: () => void;
  headerName: string;
}

const SelectedFlight: React.FC<SelectedFlightProps> = ({
  flight,
  onDelete,
  headerName,
}) => {
  return (
    <Box
      sx={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        marginBottom: 2,
        backgroundColor: "#f9f9f9",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: 500,
      }}
    >
      {/* 가는 편 Header */}
      <Box
        sx={{
          display: "flex",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 1,
          borderBottom: "2px solid #eee",
          paddingX: 2,
          paddingY: 1,
          backgroundColor: "#87CEFA",
        }}
      >
        <Typography variant="subtitle1" fontWeight="bold">
          {headerName}
        </Typography>
        <div className="flex items-center justify-center">
          <Typography
            variant="body2"
            sx={{ fontStyle: "italic", marginRight: 2 }}
          >
            12.07.토
          </Typography>
          <div className="flex items-center justify-center border-l-2">
            <IconButton
              size="small"
              onClick={onDelete}
              sx={{
                marginLeft: 2,
              }}
            >
              ❌
            </IconButton>
          </div>
        </div>
      </Box>

      {/* Summary Section */}
      <Box
        sx={{
          display: "flex",
          marginBottom: 2,
          flexDirection: "column",
        }}
      >
        {/* Airline Info */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingX: 1,
            marginBottom: 1,
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              marginRight: 2,
            }}
          >
            <img
              src={flight.logo}
              alt={flight.airline}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
          <Typography variant="body1" fontWeight="bold">
            {flight.airline}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="flex items-center justify-center">
              <Typography
                variant="body2"
                fontWeight="bold"
                sx={{ marginRight: 1 }}
              >
                {flight.departureTime}
              </Typography>
              <Typography variant="caption">{flight.departureCode}</Typography>
            </div>
            <FlightTakeoffIcon
              sx={{
                marginX: 1,
              }}
            />
            <div className="flex items-center justify-center">
              <Typography
                variant="body2"
                fontWeight="bold"
                sx={{ marginRight: 1 }}
              >
                {flight.arrivalTime}
              </Typography>
              <Typography variant="caption">{flight.arrivalCode}</Typography>
            </div>
          </Box>
          <Typography variant="caption">{flight.duration}</Typography>
        </Box>
      </Box>

      {/* Flight Details */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          marginTop: 2,
          paddingX: 2,
        }}
      >
        <Typography
          variant="body2"
          fontWeight="bold"
          sx={{
            paddingTop: 1,
            marginRight: 1,
          }}
        >
          {flight.seatType}
        </Typography>
        <Typography variant="h6" fontWeight="bold" color="red">
          {flight.price}원~
        </Typography>
      </Box>
    </Box>
  );
};

export default SelectedFlight;
