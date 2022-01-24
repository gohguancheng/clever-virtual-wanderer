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
import { filterRegionsData } from "./Data_Logic/functions";

const COUNTRY_API_URL =
  "https://restcountries.com/v3/all?fields=name,subregion,flags,capital,currencies,car,unMember,population,demonyms,continents,languages";

function App() {
  const [status, setStatus] = useState("App initialised!");
  const [fullData, setFullData] = useState([]);
  const [regions, setRegions] = useState([]);
  const [current, setCurrent] = useState({
  });
  const [quizScore, setQuizScore] = useState(0);
  const [username, setUsername] = useState("")
  console.log("render App")

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
    if (status !== "Fetching countries data..") {
      const availableRegions = filterRegionsData(fullData).sort(); //! why can't i put this outside of useEffect?
      setRegions(availableRegions);
    }
  }, [status]);

  return (
    <div className="App">
      <NavigationBar status={status} current={current} />
      <Routes>
        <Route path="/" element={<HomePage username={username} setUsername={setUsername} />} />
        <Route path="about" element={<AboutPage username={username} />} />
        <Route
          path="/regions"
          element={
            <GlobePage
              data={fullData}
              regions={regions}
              current={current}
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
            />
          }
        ></Route>
        {/* <Route path="" element={}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
