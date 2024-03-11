import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function Continents({ continentsList, selectedContinent, handleChange }) {
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
          {continentsList.map((continentName) => {
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
