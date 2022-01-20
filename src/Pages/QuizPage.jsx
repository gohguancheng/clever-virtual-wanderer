import React from "react";
import { useParams } from "react-router-dom";
import Questions from "../Components/Questions";
import { randomArrayElementSelector, statsGenerator } from "../Data_Logic/functions";

const TOPICS = [    "officialName", 
  "capital",
  "currencies",
  "maleCitizen",
  "femaleCitizen",
  "population",
  "isUNMember",
  "continent",
  "languages",
]
  

const QuizPage = ({data}) => {
  const { countryName } = useParams()
  const selectedCountryFullData = data.filter((e) => e.name.common === countryName);
  const countryData = statsGenerator(selectedCountryFullData[0]);
  const topicSelected = randomArrayElementSelector(TOPICS);
  console.log(countryData);

  return <div>
      <h3>Answer the Below Questions about {countryName}</h3>
      <Questions topic={TOPICS[0]} country={countryName} answer={countryData[TOPICS[0]]} />
      <Questions topic={TOPICS[1]} country={countryName} answer={countryData[TOPICS[1]]} />
      <Questions topic={TOPICS[8]} country={countryName} answer={countryData[TOPICS[8]]} />
      <Questions topic={TOPICS[2]} country={countryName} answer={countryData[TOPICS[2]]} />
      <Questions topic={TOPICS[4]} country={countryName} answer={countryData[TOPICS[4]]} />
      <Questions topic={TOPICS[3]} country={countryName} answer={countryData[TOPICS[3]]} />
       </div>;
};

export default QuizPage;
