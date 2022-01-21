import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Questions from "../Components/Questions";
import { randomArrayElementSelector, statsGenerator } from "../Data_Logic/functions";
import { TOPICS } from "../Data_Logic/functions";
  
const QuizPage = ({data, quizScore, setQuizScore}) => {
  const { countryName } = useParams();
  const [countryData, setCountryData] = useState({});
  
  useEffect(() => {
    console.log("chosen country: ", countryName);
    const selectedCountryFullData = data.filter((e) => e.name.common === countryName);
    const localData = statsGenerator(selectedCountryFullData[0]);
    setCountryData(localData);
    console.log("useEffect: ", localData)
  }, [countryName])

  return <div className="container" id="quiz-page">
      <h2>Answer the Below Questions about {countryName}</h2>
      <Questions countryData={countryData} data={data} topic={TOPICS[0]} country={countryName} quizScore={quizScore} setQuizScore={setQuizScore} />
      {/* <Questions countryData={countryData} data={data} topic={TOPICS[1]} country={countryName} quizScore={quizScore} setQuizScore={setQuizScore} />
      <Questions countryData={countryData} data={data} topic={TOPICS[8]} country={countryName} quizScore={quizScore} setQuizScore={setQuizScore} />
      <Questions countryData={countryData} data={data} topic={TOPICS[2]} country={countryName} quizScore={quizScore} setQuizScore={setQuizScore} />
      <Questions countryData={countryData} data={data} topic={TOPICS[4]} country={countryName} quizScore={quizScore} setQuizScore={setQuizScore} />
      <Questions countryData={countryData} data={data} topic={TOPICS[3]} country={countryName} quizScore={quizScore} setQuizScore={setQuizScore} /> */}
       </div>;
};

export default QuizPage;
