import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Questions from "../Components/Questions";
import { randomArrayElementSelector, statsGenerator } from "../Data_Logic/functions";
import { TOPICS } from "../Data_Logic/functions";
import '../Styles/QuizPage.css'
  
const QuizPage = ({data, quizScore, setQuizScore}) => {
  const { regionName, countryName } = useParams();
  const [countryData, setCountryData] = useState({});
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const navigate = useNavigate();



  useEffect(() => {
    const selectedCountryFullData = data.filter((e) => e.name.common === countryName);
    const localData = statsGenerator(selectedCountryFullData[0]);
    setCountryData(localData);
  }, [data, countryName])

  const arrayOfQuestions = TOPICS.map(((element, i) => {
    return <Questions key={i} countryData={countryData} data={data} topic={element} country={countryName} quizScore={quizScore} setQuizScore={setQuizScore} setQuestionsAnswered={setQuestionsAnswered} />
  }))

  return <div className="container" id="quiz-page">
      <h2>Answer the Below Questions about {countryName}</h2>
      <h2>Your Score: {quizScore}</h2>
      {arrayOfQuestions}
      <div>
      {questionsAnswered < 7 ? null : navigate(`/${regionName}/${countryName}/results`)}
      </div>
       </div>;
};
export default QuizPage;

