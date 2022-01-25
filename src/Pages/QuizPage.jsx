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

  (questionsAnswered === 7) ? setTimeout(()=>navigate(`/${regionName}/${countryName}/results`), 20000) : null;

  useEffect(() => {
    const selectedCountryFullData = data.filter((e) => e.name.common === countryName);
    const localData = statsGenerator(selectedCountryFullData[0]);
    setCountryData(localData);
  }, [data, countryName])

  const arrayOfQuestions = TOPICS.map(((element, i) => {
    return <Questions key={i} countryData={countryData} data={data} topic={element} country={countryName} quizScore={quizScore} setQuizScore={setQuizScore} setQuestionsAnswered={setQuestionsAnswered} />
  }))

  return <div className="container" id="quiz-page">
      <h3 className="m-5 text-2xl font-bold">Answer all the Questions below about {countryName}.</h3>
      <h3 className="m-5 text-2xl font-bold">Your Score: {quizScore}</h3>
      {(questionsAnswered === 7) ? (<Link to={`/${regionName}/${countryName}/results`}>
          <button className="m-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"> Let's check out {countryName}! </button>
        </Link>):null}
      {arrayOfQuestions}
      {(questionsAnswered === 7) ? (<Link to={`/${regionName}/${countryName}/results`}>
          <button className="m-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"> Let's check out {countryName}! </button>
        </Link>):null}
       </div>;
};
export default QuizPage;

