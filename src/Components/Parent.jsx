import React, { useState } from "react";
import Continents from "./Continents";
import Countries from "./Countries";

function Parent() {
  var continentsList = [
    "Asia",
    "Africa",
    "North America",
    "South America",
    "Antarctica",
    "Europe",
    "Australia",
  ];
  var countriesListAsia = [
    "Afghansitan",
    "China",
    "Pakistan",
    "Japan",
    "Korea",
    "Russia",
  ];
  var countriesListAfrica = [
    "Eritrea",
    "South Sudan",
    "Uganda",
    "Ghana",
    "South Africa",
    "Ethiopia",
    "Rwanda",
  ];
  var countriesListNorthAmerica = [
    "Mexico",
    "United States Of America",
    "Canada",
  ];
  var countriesListSouthAmerica = [
    "Brazil",
    "Cuba",
    "Argentina",
    "Columbia",
    "Chile",
    "Ecuador",
  ];
  var countriesOfAntartica = ["Antartica is just a continent, N/A"];
  var countriesListAustralia = ["Australia", "Papua New Guinea", "New Zealand"];
  var countriesListEurope = ["France", "Germany", "Russia", "Greece"];

  const [selectedContinent, setSelectedContinent] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  function handleChange(event) {
    let selectedValue = event.target.value;
    setSelectedContinent(selectedValue);
    setSelectedCountry("");
  }

  function handleChangeCountry(event) {
    let selectedValueCountry = event.target.value;
    setSelectedCountry(selectedValueCountry);
  }
  return (
    <>
      <Continents
        handleChange={handleChange}
        continentsList={continentsList}
        selectedContinent={selectedContinent}
      />
      <br />
      <br />
      {selectedContinent === "Asia" && (
        <Countries
          handleChange={handleChangeCountry}
          selectedCountry={selectedCountry}
          countriesList={countriesListAsia}
        />
      )}
      {selectedContinent === "Africa" && (
        <Countries
          handleChange={handleChangeCountry}
          selectedCountry={selectedCountry}
          countriesList={countriesListAfrica}
        />
      )}
      {selectedContinent === "North America" && (
        <Countries
          handleChange={handleChangeCountry}
          selectedCountry={selectedCountry}
          countriesList={countriesListNorthAmerica}
        />
      )}
      {selectedContinent === "South America" && (
        <Countries
          handleChange={handleChangeCountry}
          selectedCountry={selectedCountry}
          countriesList={countriesListSouthAmerica}
        />
      )}
      {selectedContinent === "Antarctica" && (
        <Countries
          handleChange={handleChangeCountry}
          selectedCountry={selectedCountry}
          countriesList={countriesOfAntartica}
        />
      )}
      {selectedContinent === "Europe" && (
        <Countries
          handleChange={handleChangeCountry}
          selectedCountry={selectedCountry}
          countriesList={countriesListEurope}
        />
      )}
      {selectedContinent === "Australia" && (
        <Countries
          handleChange={handleChangeCountry}
          selectedCountry={selectedCountry}
          countriesList={countriesListAustralia}
        />
      )}
    </>
  );
}

export default Parent;
