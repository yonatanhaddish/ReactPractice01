import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function Continents() {
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Continent</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Age"
          // onChange={handleChange}
        >
          <MenuItem value={10}>Asia</MenuItem>
          <MenuItem value={20}>Africa</MenuItem>
          <MenuItem value={30}>North America</MenuItem>
          <MenuItem value={10}>South America</MenuItem>
          <MenuItem value={20}>Antarctica</MenuItem>
          <MenuItem value={30}>Europe</MenuItem>
          <MenuItem value={20}>Australia</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default Continents;
