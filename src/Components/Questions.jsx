import React, { useEffect, useState } from "react";
import { answerGenerator } from "../Data_Logic/functions";

const Questions = ({
  countryData,
  data,
  topic,
  country,
  quizScore,
  setQuizScore,
  setQuestionsAnswered,
}) => {
  const [QStyle, setQStyle] = useState({color: "navy"});
  const [correctClick, setCorrectClick] = useState()
  const [showResults, setShowResults] = useState(false);
  const [message, setMessage] = useState(null);
  const [answerBank, setAnswerBank] = useState({});
  const [buttonDisabled, setButtonDisabled] = useState(false);

  //* make sure generated bank is not changed during renders
  useEffect(() => {
    if (countryData !== null) {
      const generatedAnsBank = answerGenerator(topic, countryData, data);
      setAnswerBank({ ...answerBank, ...generatedAnsBank });
    }
  }, [data, countryData, topic, country]);

  const questionTrueClickHandler = (event) => {
    setShowResults(true);
    setQuestionsAnswered(prev => prev+1);
    setButtonDisabled(true);
    if (answerBank.isTrue || answerBank.answer===countryData[topic]) {
      setMessage(
        `You got it, the above is true! "${answerBank.answer}" is indeed the correct answer.`
      );
      setQStyle({color: "green",});
      setQuizScore(prev => prev+1);
      setCorrectClick(true);
      event.target.id = "correct-click";
    } else {
      setMessage(
        `Sorry, the above is false! The correct answer is in fact "${countryData[topic]}".`
      );
      setQStyle({color: "red",});
      setCorrectClick(false);
      event.target.id = "wrong-click";
    }
  };
  const questionFalseClickHandler = (event) => {
    setShowResults(true);
    setQuestionsAnswered(prev => prev+1);
    setButtonDisabled(true);
    if (!answerBank.isTrue) {
      setMessage(
        `Yes, the above is false! The correct answer is actually "${countryData[topic]}".`
      );
      setQStyle({color: "red",});
      setQuizScore(prev => prev+1);
      setCorrectClick(true);
      event.target.id = "correct-click";
    } else {
      setMessage(
        `Sorry, the above is true! "${answerBank.answer}" is actually the correct answer.`
      );
      setQStyle({color: "green",});
      setCorrectClick(false);
      event.target.id = "wrong-click";
    }
  };

  switch (topic) {
    case "officialName":
      return (
        <div className="m-2">
          <h4 className="m-2 text-lg" style={QStyle}>
            {" "}
            The official name of {country} is: "{answerBank.answer}".{" "}
          </h4>
          <p className={`m-2 text-base ${correctClick ? "text-green-600 bg-lime-200" : "text-red-800 bg-rose-200"}`}>{message}</p>
          <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded mx-4" disabled={buttonDisabled} onClick={questionTrueClickHandler}>True</button>
          <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded mx-4" disabled={buttonDisabled} onClick={questionFalseClickHandler}>False</button>
        </div>
      );
      break;
    case "capital":
      return (
        <div>
          <h4 className="m-2 text-lg" style={QStyle}>
            The capital city of {country} is: {answerBank.answer}.{" "}
          </h4>
          <p className={`m-2 text-base ${correctClick ? "text-green-600 bg-lime-200" : "text-red-800 bg-rose-200"}`}>{message}</p>
          <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded mx-4" disabled={buttonDisabled} onClick={questionTrueClickHandler}>True</button>
          <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded mx-4" disabled={buttonDisabled} onClick={questionFalseClickHandler}>False</button>
        </div>
      );
      break;
    case "currencies":
      return (
        <div>
          <h4 className="m-2 text-lg" style={QStyle}>
            The currency(/ies) used in {country} is/are: {answerBank.answer}.{" "}
          </h4>
          <p className={`m-2 text-base ${correctClick ? "text-green-600 bg-lime-200" : "text-red-800 bg-rose-200"}`}>{message}</p>
          <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded mx-4" disabled={buttonDisabled} onClick={questionTrueClickHandler}>True</button>
          <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded mx-4" disabled={buttonDisabled} onClick={questionFalseClickHandler}>False</button>
        </div>
      );
      break;
    case "maleCitizen":
      return (
        <div>
          <h4 className="m-2 text-lg" style={QStyle}>
            A male citizen of {country} known as a(n): {answerBank.answer}.{" "}
          </h4>
          <p className={`m-2 text-base ${correctClick ? "text-green-800 bg-lime-200" : "text-red-800 bg-rose-200"}`}>{message}</p>
          <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded mx-4" disabled={buttonDisabled} onClick={questionTrueClickHandler}>True</button>
          <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded mx-4" disabled={buttonDisabled} onClick={questionFalseClickHandler}>False</button>
        </div>
      );
      break;
    case "femaleCitizen":
      return (
        <div>
          <h4 className="m-2 text-lg" style={QStyle}>
            A female citizen of {country} known as a(n): {answerBank.answer}.{" "}
          </h4>
          <p className={`m-2 text-base ${correctClick ? "text-green-600 bg-lime-200" : "text-red-800 bg-rose-200"}`}>{message}</p>
          <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded mx-4" disabled={buttonDisabled} onClick={questionTrueClickHandler}>True</button>
          <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded mx-4" disabled={buttonDisabled} onClick={questionFalseClickHandler}>False</button>
        </div>
      );
      break;
    case "population":
      return (
        <div>
          <h4 className="m-2 text-lg" style={QStyle}>
            The approx. population of {country} is {answerBank.answer} people.{" "}
          </h4>
          <p className={`m-2 text-base ${correctClick ? "text-green-600 bg-lime-200" : "text-red-800 bg-rose-200"}`}>{message}</p>
          <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded mx-4" disabled={buttonDisabled} onClick={questionTrueClickHandler}>True</button>
          <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded mx-4" disabled={buttonDisabled} onClick={questionFalseClickHandler}>False</button>
        </div>
      );
      break;
    case "languages":
      return (
        <div>
          <h4 className="m-2 text-lg" style={QStyle}>
            The common language(s) spoken in {country} is/are:{" "}
            {answerBank.answer}.{" "}
          </h4>
          <p className={`m-2 text-base ${correctClick ? "text-green-600 bg-lime-200" : "text-red-800 bg-rose-200"}`}>{message}</p>
          <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded mx-4" disabled={buttonDisabled} onClick={questionTrueClickHandler}>True</button>
          <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded mx-4" disabled={buttonDisabled} onClick={questionFalseClickHandler}>False</button>
        </div>
      );
      break;
    case "continents":
      return (
        <div>
          <h4 className="m-2 text-lg" style={QStyle}>
            {country} is situated on the continent of: {answerBank.answer}.{" "}
          </h4>
          <p className={`m-2 text-base ${correctClick ? "text-green-600 bg-lime-200" : "text-red-800 bg-rose-200"}`}>{message}</p>
          <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded mx-4" disabled={buttonDisabled} onClick={questionTrueClickHandler}>True</button>
          <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded mx-4" disabled={buttonDisabled} onClick={questionFalseClickHandler}>False</button>
        </div>
      );
    default:
      return (
        <div>
          <h4 className="m-2 text-lg">Nothing generated.</h4>
        </div>
      );
  }
};

export default Questions;
