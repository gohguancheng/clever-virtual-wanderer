import "./Styles/App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import GlobePage from "./Pages/GlobePage";
import FlagsPages from "./Pages/FlagsPage";
import QuizPage from "./Pages/QuizPage";
import { filterRegionsData } from "./Data_Logic/functions";

const COUNTRY_API_URL =
  "https://restcountries.com/v3/all?fields=name,subregion,flags,capital,currencies,car,unMember,population,demonyms,continents,languages";

function App() {
  const [status, setStatus] = useState("App initialised!");
  const [fullData, setFullData] = useState([]);
  const [regions, setRegions] = useState([]);
  const [current, setCurrent] = useState({
    country: "",
  });
  // console.log("current state: ", current);
  const [ quizScore, setQuizScore ] = useState();

  useEffect(() => {
    setStatus("Fetching countries data..");
    fetch(COUNTRY_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setFullData(data);
        setStatus("Countries data received");
      })
      .catch(() => setStatus("No Countries data received"));
  }, []);

  useEffect(() => {
    if (status !== "API data fetch pending..") {
      const availableRegions = filterRegionsData(fullData); //! why can't i put this outside of useEffect?
      setRegions(availableRegions);
    }
  }, [status]);

  return (
    <div className="App">
      <NavigationBar status={status} />
      <Routes>
        {/* <Route path="/" element={<NavigationBar status={status} />}> */}
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route
          path="/regions"
          element={
            <GlobePage
              data={fullData}
              regions={regions}
              current={current}
              setCurrent={setCurrent}
            />
          }
        ></Route>
        <Route
          path="/regions/:regionName/countries"
          element={<FlagsPages data={fullData} current={current} />}
        ></Route>
                <Route
          path="/:regionName/:countryName"
          element={
            <QuizPage
              data={fullData} quizScore ={quizScore} setQuizScore={setQuizScore}
            />
          }
        ></Route>

        {/* </Route> */}

        {/* <Route path="" element={}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
