import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function Continents() {
  const [selectedContinent, setSeclectedContinent] = useState("");
  var continentsList = [
    "Asia",
    "Africa",
    "North Africa",
    "South Africa",
    "Antarctica",
    "Europe",
    "Austrialia",
  ];

  function handleChange(event) {
    console.log(event.target.value);
    setSeclectedContinent(event.target.value);
  }
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Continent</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedContinent}
          label="Continent"
          onChange={handleChange}
        >
          {/* <MenuItem value={"Asia"}>Asia</MenuItem>
          <MenuItem value={"Africa"}>Africa</MenuItem>
          <MenuItem value={"North America"}>North America</MenuItem>
          <MenuItem value={"South America"}>South America</MenuItem>
          <MenuItem value={"Antarctica"}>Antarctica</MenuItem>
          <MenuItem value={"Europe"}>Europe</MenuItem>
          <MenuItem value={"Australia"}>Australia</MenuItem> */}
          {continentsList.map(function (continentName, index) {
            return (
              <MenuItem value={continentName} key={continentName}>
                {continentName}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
}

export default Continents;
