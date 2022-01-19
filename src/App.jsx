import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Regions from "./Regions";
import CountryWelcome from "./CountryWelcome";
import Country from "./Country";



function App() {
  const [fullData, setFullData] = useState([]);
  const [regions, setRegions] = useState([]);
  const [countryData, setCountryData] = useState();
  console.log("render App!");

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,subregion")
      .then((response) => response.json())
      .then((data) => {
        const regionObjects = data.map((element) => element.subregion);
        const regions = regionObjects.filter((element, index, self) => {
          return index === self.indexOf(element);
        });
        setFullData(data);
        setRegions(regions);
      });
  }, []);
  
  const updateCountry = (input) => {
    setCountryData(input);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="/regions"
            element={<Regions regions={regions} />}
          ></Route>
          <Route path="/regions/:regionName" element={<CountryWelcome data={fullData} handleCountryUpdate={updateCountry} />}></Route>
          <Route path="/regions/:regionName/quiz/:countryname" element ={<Country countryData={countryData} />} />
        </Route>

        {/* <Route path="" element={}></Route> */}
      </Routes>
    </div>
  );

}

export default App;
