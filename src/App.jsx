import "./Styles/App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import GlobePage from "./Pages/GlobePage";
import FlagsPages from "./Pages/FlagsPage";
import QuizPage from "./Pages/QuizPage";
import ResultsPage from "./Pages/ResultsPage";
import { filterSubregionsByRegions } from "./Data_Logic/functions";

const COUNTRY_API_URL =
  "https://restcountries.com/v3/all?fields=name,region,subregion,flags,capital,currencies,car,unMember,population,demonyms,continents,languages";

const COUNTRY_API_STATUS = {
  ini: "App initialised!",
  pending: "Fetching Countries data..",
  ok: "Countries data received",
  none: "No Countries data received",
};

function App() {
  const [status, setStatus] = useState(COUNTRY_API_STATUS.ini);
  const [fullData, setFullData] = useState([]);
  const [regions, setRegions] = useState([]);
  const [current, setCurrent] = useState({});
  const [quizScore, setQuizScore] = useState(0);
  const [username, setUsername] = useState("Mystery Traveller");

  useEffect(() => {
    setStatus(COUNTRY_API_STATUS.pending);
    fetch(COUNTRY_API_URL)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setFullData(data);
        setStatus(COUNTRY_API_STATUS.ok);
      })
      .catch(() => setStatus(COUNTRY_API_STATUS.none));
  }, []);

  useEffect(() => {
    if (status === COUNTRY_API_STATUS.ok) {
      const arrayOfRegionsWithSubregions = filterSubregionsByRegions(fullData);
      //console.log(continentsWithRegions)
      setRegions(arrayOfRegionsWithSubregions);
    }
  }, [status]);

  return (
    <div className="App">
      <NavigationBar status={status} current={current} />
      <Routes>
        <Route
          path="/"
          element={<HomePage username={username} setUsername={setUsername} />}
        />
        <Route path="about" element={<AboutPage username={username} />} />
        <Route
          path="/regions"
          element={
            <GlobePage
              data={fullData}
              regions={regions}
              current={current}
              username={username}
              setCurrent={setCurrent}
              setQuizScore={setQuizScore}
            />
          }
        ></Route>
        <Route
          path="/regions/:regionName/countries"
          element={<FlagsPages data={fullData} current={current} />}
        ></Route>
        <Route
          path="/:regionName/:countryName/quiz"
          element={
            <QuizPage
              data={fullData}
              quizScore={quizScore}
              setQuizScore={setQuizScore}
            />
          }
        ></Route>
        <Route
          path="/:regionName/:countryName/results"
          element={
            <ResultsPage
              data={fullData}
              quizScore={quizScore}
              current={current}
              username={username}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
