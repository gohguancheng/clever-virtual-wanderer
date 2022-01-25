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

  if (questionsAnswered === 7) setTimeout(()=>navigate(`/${regionName}/${countryName}/results`), 1000);

  useEffect(() => {
    const selectedCountryFullData = data.filter((e) => e.name.common === countryName);
    const localData = statsGenerator(selectedCountryFullData[0]);
    setCountryData(localData);
  }, [data, countryName])

  const arrayOfQuestions = TOPICS.map(((element, i) => {
    return <Questions key={i} countryData={countryData} data={data} topic={element} country={countryName} quizScore={quizScore} setQuizScore={setQuizScore} setQuestionsAnswered={setQuestionsAnswered} />
  }))

  return <div className="container" id="quiz-page">
      <h3>Answer all the Questions below about {countryName}.</h3>
      <h3>Your Score: {quizScore}</h3>
      {arrayOfQuestions}
       </div>;
};
export default QuizPage;

