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

  const [showResults, setShowResults] = useState(false);
  const [message, setMessage] = useState(null)
  const [answerBank, setAnswerBank] = useState([]);

  //* make sure generated bank is not changed
  useEffect(()=>{
      console.log("topic: ", topic);
      console.log("countryData: ", countryData);
    const generatedAnsBank = answerGenerator(topic, countryData, data);
    setAnswerBank(generatedAnsBank);
    console.log("answerBank: ", answerBank);
  }, [topic]);

  const questionTrueClickHandler = () => {
      setShowResults(true);
    if (answerBank.isTrue) {
      setMessage(`You got it, the above is true! The answer is "${answerBank.answer}"`);
    } else {
        setMessage(`Nope, the above is false - the answer is in fact "${countryData[topic]}"`);
    }
  };
  const questionFalseClickHandler = () => {
    setShowResults(true);
    if (!answerBank.isTrue) {
    setMessage(`Yes, the above is false - The answer is actually "${countryData[topic]}"`);
    } else {
    setMessage(`Nope, the above is true! the answer is actually "${answerBank.answer}"`);
    }
  };

  switch (topic) {
    case "officialName":
      return (
        <div className="question">
          <h4>
            {" "}
            The official name of {country} is: "{answerBank.answer}".{" "}
          </h4>
          <p>{message}</p> 
          <button onClick={questionTrueClickHandler}>True</button>
          <button onClick={questionFalseClickHandler}>False</button>
        </div>
      );
      break;
    case "capital":
      return (
        <div>
          <h4>
            The capital city of {country} is: {answerBank.answer}.{" "}
          </h4>
          <p>{message}</p> 
          <button>True</button>
          <button>False</button>
        </div>
      );
      break;
    case "currencies":
      return (
        <div>
          <h4>
            The currency(/ies) used in {country} is/are: {answerBank.answer}.{" "}
          </h4>
          <p>{message}</p> 
          <button>True</button>
          <button>False</button>
        </div>
      );
      break;
    case "maleCitizen":
      return (
        <div>
          <h4>
            A male citizen of {country} known as a(n): {answerBank.answer}.{" "}
          </h4>
          <p>{message}</p> 
          <button>True</button>
          <button>False</button>
        </div>
      );
      break;
    case "femaleCitizen":
      return (
        <div>
          <h4>
            A female citizen of {country} known as a(n): {answerBank.answer}.{" "}
          </h4>
          <p>{message}</p> 
          <button>True</button>
          <button>False</button>
        </div>
      );
      break;
    case "population":
      return (
        <div>
          <h4>
            The approx. population of {country} is {answerBank.answer} people.{" "}
          </h4>
          <p>{message}</p> 
          <button>True</button>
          <button>False</button>
        </div>
      );
      break;
    case "languages":
      return (
        <div>
          <h4>
            The common language(s) spoken in {country} is/are:{" "}
            {answerBank.answer}.{" "}
          </h4>
          <p>{message}</p> 
          <button>True</button>
          <button>False</button>
        </div>
      );
      break;
    case "continents":
      return (
        <div>
          <h4>
            {answerBank.answer} is the continent that {country} is situated on.{" "}
          </h4>
          <p>{message}</p> 
          <button>True</button>
          <button>False</button>
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
