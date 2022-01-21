import React, { useEffect, useState } from "react";
import { answerGenerator } from "../Data_Logic/functions";

const Questions = ({
  countryData,
  data,
  topic,
  country,
  quizScore,
  setQuizScore,
}) => {
  const [QStyle, setQStyle] = useState();
  const [correctClick, setCorrectClick] = useState()
  const [showResults, setShowResults] = useState(false);
  const [message, setMessage] = useState(null);
  const [answerBank, setAnswerBank] = useState({});
  //   console.log("ini countryData: ", countryData)
  //   console.log("topic: ", topic);

  //* make sure generated bank is not changed during renders
  useEffect(() => {
    if (countryData !== null) {
      const generatedAnsBank = answerGenerator(topic, countryData, data);
      setAnswerBank({ ...answerBank, ...generatedAnsBank });
    }
  }, [data, countryData, topic, country]);

  const questionTrueClickHandler = () => {
    setShowResults(true);
    if (answerBank.isTrue) {
      setMessage(
        `You got it, the above is true! The answer is "${answerBank.answer}"`
      );
      setQStyle({color: "green",});
      setQuizScore(prev => prev+1);
      setCorrectClick(true);
    } else {
      setMessage(
        `Nope, the above is false - the answer is in fact "${countryData[topic]}"`
      );
      setQStyle({color: "red",});
      setCorrectClick(false);
    }
  };
  const questionFalseClickHandler = () => {
    setShowResults(true);
    if (!answerBank.isTrue) {
      setMessage(
        `Yes, the above is false - The answer is actually "${countryData[topic]}"`
      );
      setQStyle({color: "red",});
      setQuizScore(prev => prev+1);
      setCorrectClick(true);
    } else {
      setMessage(
        `Nope, the above is true! the answer is actually "${answerBank.answer}"`
      );
      setQStyle({color: "green",});
      setCorrectClick(false);
    }
  };

  switch (topic) {
    case "officialName":
      return (
        <div className="question">
          <h4 style={QStyle}>
            {" "}
            The official name of {country} is: "{answerBank.answer}".{" "}
          </h4>
          <p className={correctClick ? "correct-ans" : "wrong-ans"}>{message}</p>
          <button onClick={questionTrueClickHandler}>True</button>
          <button onClick={questionFalseClickHandler}>False</button>
        </div>
      );
      break;
    case "capital":
      return (
        <div>
          <h4 style={QStyle}>
            The capital city of {country} is: {answerBank.answer}.{" "}
          </h4>
          <p className={correctClick ? "correct-ans" : "wrong-ans"}>{message}</p>
          <button onClick={questionTrueClickHandler}>True</button>
          <button onClick={questionFalseClickHandler}>False</button>
        </div>
      );
      break;
    case "currencies":
      return (
        <div>
          <h4 style={QStyle}>
            The currency(/ies) used in {country} is/are: {answerBank.answer}.{" "}
          </h4>
          <p className={correctClick ? "correct-ans" : "wrong-ans"}>{message}</p>
          <button onClick={questionTrueClickHandler}>True</button>
          <button onClick={questionFalseClickHandler}>False</button>
        </div>
      );
      break;
    case "maleCitizen":
      return (
        <div>
          <h4 style={QStyle}>
            A male citizen of {country} known as a(n): {answerBank.answer}.{" "}
          </h4>
          <p className={correctClick ? "correct-ans" : "wrong-ans"}>{message}</p>
          <button onClick={questionTrueClickHandler}>True</button>
          <button onClick={questionFalseClickHandler}>False</button>
        </div>
      );
      break;
    case "femaleCitizen":
      return (
        <div>
          <h4 style={QStyle}>
            A female citizen of {country} known as a(n): {answerBank.answer}.{" "}
          </h4>
          <p className={correctClick ? "correct-ans" : "wrong-ans"}>{message}</p>
          <button onClick={questionTrueClickHandler}>True</button>
          <button onClick={questionFalseClickHandler}>False</button>
        </div>
      );
      break;
    case "population":
      return (
        <div>
          <h4 style={QStyle}>
            The approx. population of {country} is {answerBank.answer} people.{" "}
          </h4>
          <p className={correctClick ? "correct-ans" : "wrong-ans"}>{message}</p>
          <button onClick={questionTrueClickHandler}>True</button>
          <button onClick={questionFalseClickHandler}>False</button>
        </div>
      );
      break;
    case "languages":
      return (
        <div>
          <h4 style={QStyle}>
            The common language(s) spoken in {country} is/are:{" "}
            {answerBank.answer}.{" "}
          </h4>
          <p className={correctClick ? "correct-ans" : "wrong-ans"}>{message}</p>
          <button onClick={questionTrueClickHandler}>True</button>
          <button onClick={questionFalseClickHandler}>False</button>
        </div>
      );
      break;
    case "continents":
      return (
        <div>
          <h4 style={QStyle}>
            {answerBank.answer} is the continent that {country} is situated on.{" "}
          </h4>
          <p className={correctClick ? "correct-ans" : "wrong-ans"}>{message}</p>
          <button onClick={questionTrueClickHandler}>True</button>
          <button onClick={questionFalseClickHandler}>False</button>
        </div>
      );
    default:
      return (
        <div>
          <h4>Nothing generated.</h4>
        </div>
      );
  }
};

export default Questions;
