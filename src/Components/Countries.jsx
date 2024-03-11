import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function Countries({
  countriesList,
  selectedCountry,
  handleChange,
  handleChangeCountry,
}) {
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Countries</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCountry}
          label="Countries"
          onChange={handleChange}
        >
          {countriesList.map((country) => {
            return (
              <MenuItem value={country} key={country}>
                {country}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
}

export default Countries;
