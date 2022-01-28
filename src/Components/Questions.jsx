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
  const [QStyle, setQStyle] = useState({ color: "navy" });
  const [correctClick, setCorrectClick] = useState();
  const [message, setMessage] = useState({line1:null,line2:null,});
  const [correction, setCorrection] = useState(null);
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
    setQuestionsAnswered((prev) => prev + 1);
    setButtonDisabled(true);
    if (answerBank.isTrue || answerBank.answer === countryData[topic]) {
      setMessage( 
        {...message, ...{line1: `You got it, the above is true!`, line2:`"${answerBank.answer}" is indeed the correct answer.`}}
      );
      setQStyle({ color: "green" });
      setQuizScore((prev) => prev + 1);
      setCorrectClick(true);
      event.target.id = "correct-click";
    } else {
      setMessage(
        {...message, ...{line1: `Sorry, the above is false!`, line2:`"${countryData[topic] === "" || countryData[topic] === undefined ? "*Not Officially Defined*" : countryData[topic]}" is in fact the correct answer.` ,}}
      );
      setCorrection(
        `Trivia: '${answerBank.answer}' would be a valid answer for the country of ${answerBank.matchCountry} from the '${answerBank.matchRegion}' region.`
      );
      setQStyle({ color: "red" });
      setCorrectClick(false);
      event.target.id = "wrong-click";
    }
  };
  const questionFalseClickHandler = (event) => {
    setQuestionsAnswered((prev) => prev + 1);
    setButtonDisabled(true);
    if (!answerBank.isTrue) {
      setMessage(
        {...message, ...{line1: `Yes, the above is false!`, line2:`"${countryData[topic] === "" || countryData[topic] === undefined ? "*Not Officially Defined*" : countryData[topic]}" would be the correct answer.` ,}}
      );
      setCorrection(
        `Trivia: '${answerBank.answer}' would be a valid answer for the country of ${answerBank.matchCountry} from the '${answerBank.matchRegion}' region.`
      );
      setQStyle({ color: "red" });
      setQuizScore((prev) => prev + 1);
      setCorrectClick(true);
      event.target.id = "correct-click";
    } else {
      setMessage(
        {...message, ...{line1: `Sorry, the above is true!`, line2:`"${answerBank.answer}" is actually the correct answer.` ,}}
      );
      setQStyle({ color: "green" });
      setCorrectClick(false);
      event.target.id = "wrong-click";
    }
  };

  switch (topic) {
    case "officialName":
      return (
        <div className="grid m-2 justify-center">
          <h4
            className="m-1 text-2xl break-normal justify-self-center"
            style={QStyle}
          >
            {" "}
            The official name of {country} is:{" "}
            <span className="font-semibold break-normal">
              {answerBank.answer}
            </span>
            .{" "}
          </h4>
          <p
            className={`w-max justify-self-center text-lg break-all ${
              correctClick
                ? "text-green-600 bg-lime-200"
                : "text-red-800 bg-rose-200"
            }`}
          >
            {message.line1}
          </p>
          <p
            className={`w-max justify-self-center text-lg break-all ${
              correctClick
                ? "text-green-600 bg-lime-200"
                : "text-red-800 bg-rose-200"
            }`}
          >
            {message.line2}
          </p>
          <p
            className={`pt-2 w-max justify-self-center text-sm font-semibold break-all ${
              correctClick
                ? "text-green-600 bg-lime-200"
                : "text-red-800 bg-rose-200"
            }`}
          >
            {correction}
          </p>
          <span className="m-1 justify-self-center">
            <button
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-6 border-b-4 border-green-700 hover:border-green-500 rounded mx-4"
              disabled={buttonDisabled}
              onClick={questionTrueClickHandler}
            >
              True
            </button>
            <button
              className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-6 border-b-4 border-red-700 hover:border-red-500 rounded mx-4"
              disabled={buttonDisabled}
              onClick={questionFalseClickHandler}
            >
              False
            </button>
          </span>
        </div>
      );
      break;
    case "capital":
      return (
        <div className="grid m-2 justify-center">
          <h4
            className="m-1 text-2xl break-normal justify-self-center"
            style={QStyle}
          >
            The capital city of {country} is:{" "}
            <span className="font-semibold">{answerBank.answer}</span>.{" "}
          </h4>
          <p
            className={`w-max justify-self-center text-lg break-all ${
              correctClick
                ? "text-green-600 bg-lime-200"
                : "text-red-800 bg-rose-200"
            }`}
          >
            {message.line1}
          </p>
          <p
            className={`w-max justify-self-center text-lg break-all ${
              correctClick
                ? "text-green-600 bg-lime-200"
                : "text-red-800 bg-rose-200"
            }`}
          >
            {message.line2}
          </p>
          <p
            className={`pt-2 w-max justify-self-center text-xs font-semibold break-all ${
              correctClick
                ? "text-green-600 bg-lime-200"
                : "text-red-800 bg-rose-200"
            }`}
          >
            {correction}
          </p>
          <span className="m-1 justify-self-center">
            <button
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-6 border-b-4 border-green-700 hover:border-green-500 rounded mx-4"
              disabled={buttonDisabled}
              onClick={questionTrueClickHandler}
            >
              True
            </button>
            <button
              className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-6 border-b-4 border-red-700 hover:border-red-500 rounded mx-4"
              disabled={buttonDisabled}
              onClick={questionFalseClickHandler}
            >
              False
            </button>
          </span>
        </div>
      );
      break;
    case "currencies":
      return (
        <div className="grid m-2 justify-center">
          <h4
            className="m-1 text-2xl break-normal justify-self-center"
            style={QStyle}
          >
            The common currency(/ies) used in {country} is/are:{" "}
            <span className="font-semibold">{answerBank.answer}</span>.{" "}
          </h4>
          <p
            className={`w-max justify-self-center text-lg break-all ${
              correctClick
                ? "text-green-600 bg-lime-200"
                : "text-red-800 bg-rose-200"
            }`}
          >
            {message.line1}
          </p>
          <p
            className={`w-max justify-self-center text-lg break-all ${
              correctClick
                ? "text-green-600 bg-lime-200"
                : "text-red-800 bg-rose-200"
            }`}
          >
            {message.line2}
          </p>
          <p
            className={`pt-2 w-max justify-self-center text-xs font-semibold break-all ${
              correctClick
                ? "text-green-600 bg-lime-200"
                : "text-red-800 bg-rose-200"
            }`}
          >
            {correction}
          </p>
          <span className="m-1 justify-self-center">
            <button
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-6 border-b-4 border-green-700 hover:border-green-500 rounded mx-4"
              disabled={buttonDisabled}
              onClick={questionTrueClickHandler}
            >
              True
            </button>
            <button
              className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-6 border-b-4 border-red-700 hover:border-red-500 rounded mx-4"
              disabled={buttonDisabled}
              onClick={questionFalseClickHandler}
            >
              False
            </button>
          </span>
        </div>
      );
      break;
    case "maleCitizen":
      return (
        <div className="grid m-2 justify-center">
          <h4
            className="m-1 text-2xl break-normal justify-self-center"
            style={QStyle}
          >
            A male citizen of {country} known as a(n):{" "}
            <span className="font-semibold">{answerBank.answer}</span>.{" "}
          </h4>
          <p
            className={`w-max justify-self-center text-lg break-all ${
              correctClick
                ? "text-green-600 bg-lime-200"
                : "text-red-800 bg-rose-200"
            }`}
          >
            {message.line1}
          </p>
          <p
            className={`w-max justify-self-center text-lg break-all ${
              correctClick
                ? "text-green-600 bg-lime-200"
                : "text-red-800 bg-rose-200"
            }`}
          >
            {message.line2}
          </p>
          <p
            className={`pt-2 w-max justify-self-center text-xs font-semibold break-all ${
              correctClick
                ? "text-green-600 bg-lime-200"
                : "text-red-800 bg-rose-200"
            }`}
          >
            {correction}
          </p>
          <span className="m-1 justify-self-center">
            <button
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-6 border-b-4 border-green-700 hover:border-green-500 rounded mx-4"
              disabled={buttonDisabled}
              onClick={questionTrueClickHandler}
            >
              True
            </button>
            <button
              className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-6 border-b-4 border-red-700 hover:border-red-500 rounded mx-4"
              disabled={buttonDisabled}
              onClick={questionFalseClickHandler}
            >
              False
            </button>
          </span>
        </div>
      );
      break;
    case "femaleCitizen":
      return (
        <div className="grid m-2 justify-center">
          <h4
            className="m-1 text-2xl break-normal justify-self-center"
            style={QStyle}
          >
            A female citizen of {country} known as a(n):{" "}
            <span className="font-semibold">{answerBank.answer}</span>.{" "}
          </h4>
          <p
            className={`w-max justify-self-center text-lg break-all ${
              correctClick
                ? "text-green-600 bg-lime-200"
                : "text-red-800 bg-rose-200"
            }`}
          >
            {message.line1}
          </p>
          <p
            className={`w-max justify-self-center text-lg break-all ${
              correctClick
                ? "text-green-600 bg-lime-200"
                : "text-red-800 bg-rose-200"
            }`}
          >
            {message.line2}
          </p>
          <p
            className={`pt-2 w-max justify-self-center text-xs font-semibold break-all ${
              correctClick
                ? "text-green-600 bg-lime-200"
                : "text-red-800 bg-rose-200"
            }`}
          >
            {correction}
          </p>
          <span className="m-1 justify-self-center">
            <button
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-6 border-b-4 border-green-700 hover:border-green-500 rounded mx-4"
              disabled={buttonDisabled}
              onClick={questionTrueClickHandler}
            >
              True
            </button>
            <button
              className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-6 border-b-4 border-red-700 hover:border-red-500 rounded mx-4"
              disabled={buttonDisabled}
              onClick={questionFalseClickHandler}
            >
              False
            </button>
          </span>
        </div>
      );
      break;
    case "population":
      return (
        <div className="grid m-2 justify-center">
          <h4
            className="m-1 text-2xl break-normal justify-self-center"
            style={QStyle}
          >
            The approx. population of {country} is{" "}
            <span className="font-semibold">{answerBank.answer}</span> people.{" "}
          </h4>
          <p
            className={`w-max justify-self-center text-lg break-all ${
              correctClick
                ? "text-green-600 bg-lime-200"
                : "text-red-800 bg-rose-200"
            }`}
          >
            {message.line1}
          </p>
          <p
            className={`w-max justify-self-center text-lg break-all ${
              correctClick
                ? "text-green-600 bg-lime-200"
                : "text-red-800 bg-rose-200"
            }`}
          >
            {message.line2}
          </p>
          <p
            className={`pt-2 w-max justify-self-center text-xs font-semibold break-all ${
              correctClick
                ? "text-green-600 bg-lime-200"
                : "text-red-800 bg-rose-200"
            }`}
          >
            {correction}
          </p>
          <span className="m-1 justify-self-center">
            <button
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-6 border-b-4 border-green-700 hover:border-green-500 rounded mx-4"
              disabled={buttonDisabled}
              onClick={questionTrueClickHandler}
            >
              True
            </button>
            <button
              className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-6 border-b-4 border-red-700 hover:border-red-500 rounded mx-4"
              disabled={buttonDisabled}
              onClick={questionFalseClickHandler}
            >
              False
            </button>
          </span>
        </div>
      );
      break;
    case "languages":
      return (
        <div className="grid m-2 justify-center">
          <h4
            className="m-1 text-2xl break-normal justify-self-center"
            style={QStyle}
          >
            The dominant language(s) spoken in {country} is/are:{" "}
            <span className="font-semibold">{answerBank.answer}</span>.{" "}
          </h4>
          <p
            className={`w-max justify-self-center text-lg break-all ${
              correctClick
                ? "text-green-600 bg-lime-200"
                : "text-red-800 bg-rose-200"
            }`}
          >
            {message.line1}
          </p>
          <p
            className={`w-max justify-self-center text-lg break-all ${
              correctClick
                ? "text-green-600 bg-lime-200"
                : "text-red-800 bg-rose-200"
            }`}
          >
            {message.line2}
          </p>
          <p
            className={`pt-2 w-max justify-self-center text-xs font-semibold break-all ${
              correctClick
                ? "text-green-600 bg-lime-200"
                : "text-red-800 bg-rose-200"
            }`}
          >
            {correction}
          </p>
          <span className="m-1 justify-self-center">
            <button
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-6 border-b-4 border-green-700 hover:border-green-500 rounded mx-4"
              disabled={buttonDisabled}
              onClick={questionTrueClickHandler}
            >
              True
            </button>
            <button
              className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-6 border-b-4 border-red-700 hover:border-red-500 rounded mx-4"
              disabled={buttonDisabled}
              onClick={questionFalseClickHandler}
            >
              False
            </button>
          </span>
        </div>
      );
      break;
    case "continents":
      return (
        <div className="grid m-2 justify-center">
          <h4
            className="m-1 text-2xl break-normal justify-self-center"
            style={QStyle}
          >
            {country} is situated on the continent of:{" "}
            <span className="font-semibold">{answerBank.answer}</span>.{" "}
          </h4>
          <p
            className={`w-max justify-self-center text-lg break-all ${
              correctClick
                ? "text-green-600 bg-lime-200"
                : "text-red-800 bg-rose-200"
            }`}
          >
            {message.line1}
          </p>
          <p
            className={`w-max justify-self-center text-lg break-all ${
              correctClick
                ? "text-green-600 bg-lime-200"
                : "text-red-800 bg-rose-200"
            }`}
          >
            {message.line2}
          </p>
          <p
            className={`pt-2 w-max justify-self-center text-xs font-semibold break-all ${
              correctClick
                ? "text-green-600 bg-lime-200"
                : "text-red-800 bg-rose-200"
            }`}
          >
            {correction}
          </p>
          <span className="m-1 justify-self-center">
            <button
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-6 border-b-4 border-green-700 hover:border-green-500 rounded mx-4"
              disabled={buttonDisabled}
              onClick={questionTrueClickHandler}
            >
              True
            </button>
            <button
              className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-6 border-b-4 border-red-700 hover:border-red-500 rounded mx-4"
              disabled={buttonDisabled}
              onClick={questionFalseClickHandler}
            >
              False
            </button>
          </span>
        </div>
      );
    default:
      return (
        <div className="grid m-2 justify-items-center">
          <h4 className="m-2 text-lg">Nothing generated.</h4>
        </div>
      );
  }
};

export default Questions;
