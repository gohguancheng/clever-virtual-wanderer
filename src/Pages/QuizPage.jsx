import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Questions from "../Components/Questions";
import { randomArrayElementSelector, statsGenerator } from "../Data_Logic/functions";
import { TOPICS } from "../Data_Logic/functions";
import '../Styles/QuizPage.css'
  
const QuizPage = ({data, quizScore, setQuizScore}) => {
  const { regionName, countryName } = useParams();
  const [countryData, setCountryData] = useState({});
  const [questionsAnswered, setQuestionsAnswered] = useState(0);

  useEffect(()=>window.scrollTo(0, 0), []);
  useEffect(()=>{if (questionsAnswered ===7 ) window.scrollTo({top:0,left:0,behavior:'smooth'})},[questionsAnswered])
  useEffect(() => {
    const selectedCountryFullData = data.filter((e) => e.name.common === countryName);
    const localData = statsGenerator(selectedCountryFullData[0]);
    setCountryData(localData);
  }, [data, countryName])


  const arrayOfQuestions = TOPICS.map(((element, i) => {
    return <Questions key={i} countryData={countryData} data={data} topic={element} country={countryName} quizScore={quizScore} setQuizScore={setQuizScore} setQuestionsAnswered={setQuestionsAnswered} />
  }))

  return (<div className="container" id="quiz-page">
      <h3 className="m-5 text-3xl font-bold">Answer all the Questions below about {countryName}.</h3>
      <h3 className="m-5 text-3xl font-bold">Your Score: {quizScore}</h3>
      {(questionsAnswered === 7) ? (<Link to={`/${regionName}/${countryName}/results`}>
          <button className="m-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"> Click here to check out {countryName}! </button>
        </Link>):null}
        <div className="">
      {arrayOfQuestions}
      </div>
      <p className="p-4 text-xl font-base font-black tracking-widest">--- End Of Quiz ---</p>
       </div>)
};
export default QuizPage;

