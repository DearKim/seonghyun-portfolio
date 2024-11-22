import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";

interface CityData {
  value: string; // 도시명
  key: string; // 도시 코드
}

interface SchedulePros {
  open: boolean;
  insideData: CityData[];
  outsideData: CityData[];
  onCitySelect: (city: CityData) => void;
}

const Schedule: React.FC<SchedulePros> = ({
  open,
  insideData,
  outsideData,
  onCitySelect,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentCities, setRecentCities] = useState<CityData[]>([]);
  const [filteredInsideData, setFilteredInsideData] = useState<CityData[]>([]);
  const [filteredOutsideData, setFilteredOutsideData] = useState<CityData[]>(
    []
  );

  // 로컬 스토리지에서 최근 검색 도시 불러오기
  useEffect(() => {
    const storedCities = localStorage.getItem("recentCities");
    if (storedCities) {
      setRecentCities(JSON.parse(storedCities));
    }
  }, []);

  // 검색어에 따라 데이터를 필터링
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredInsideData(insideData);
      setFilteredOutsideData(outsideData);
    } else {
      setFilteredInsideData(
        insideData.filter((city) =>
          city.value.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setFilteredOutsideData(
        outsideData.filter((city) =>
          city.value.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, insideData, outsideData]);

  // 도시 선택 및 로컬 스토리지 업데이트
  const handleCitySelect = (city: CityData) => {
    const updatedCities = [
      city,
      ...recentCities.filter((c) => c.key !== city.key), // 중복 제거
    ].slice(0, 3); // 최근 3개 유지
    setRecentCities(updatedCities);
    localStorage.setItem("recentCities", JSON.stringify(updatedCities)); // 로컬 스토리지 업데이트
    onCitySelect(city); // 부모 컴포넌트로 선택된 도시 전달
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 600,
        margin: "0 auto",
        padding: 2,
        backgroundColor: "white",
        borderRadius: 2,
        boxShadow: 2,
        display: open ? "block" : "none",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2 }} fontWeight={"bold"}>
        도시 검색
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
        <TextField
          label="도시명 입력"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          fullWidth
          sx={{
            marginRight: 1,
          }}
        />
        <Button variant="contained" onClick={() => setSearchQuery("")}>
          초기화
        </Button>
      </Box>

      <Box>
        <Typography
          variant="subtitle1"
          sx={{ marginBottom: 1 }}
          fontWeight={"bold"}
        >
          최근 검색 도시
        </Typography>
        {recentCities.length > 0 ? (
          <List
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)", // 3열 그리드
              gap: 1,
            }}
          >
            {recentCities.map((city, index) =>
              city.value && city.key ? (
                <ListItem key={index} disablePadding>
                  <ListItemButton onClick={() => handleCitySelect(city)}>
                    {city.value} ({city.key})
                  </ListItemButton>
                </ListItem>
              ) : null
            )}
          </List>
        ) : (
          <Typography variant="body2" color="textSecondary">
            최근 검색된 도시가 없습니다.
          </Typography>
        )}
      </Box>

      <Box sx={{ marginTop: 3 }}>
        <Typography
          variant="subtitle1"
          sx={{ marginBottom: 1 }}
          fontWeight={"bold"}
        >
          국내 출발 도시
        </Typography>
        <List
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // 3열 그리드
            gap: 1,
          }}
        >
          {filteredInsideData.map((city, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => handleCitySelect(city)}>
                {city.value} ({city.key})
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ marginTop: 3 }}>
        <Typography
          variant="subtitle1"
          sx={{ marginBottom: 1 }}
          fontWeight={"bold"}
        >
          해외 출발 도시
        </Typography>
        <List
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // 3열 그리드
            gap: 1,
          }}
        >
          {filteredOutsideData.map((city, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => handleCitySelect(city)}>
                {city.value} ({city.key})
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Schedule;
