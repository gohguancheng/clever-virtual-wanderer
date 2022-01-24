import React, { useEffect, useState } from "react";
import { statsGenerator } from "../Data_Logic/functions";

const ResultsPage = ({ data, quizScore, current }) => {
  const [facts, setFacts] = useState();
  console.log("current:", current);
  const countryName = current.country;
  const selectedCountryFullData = data.filter(
    (e) => e.name.common === countryName
  );
  const localData = statsGenerator(selectedCountryFullData[0]);

  useEffect(() => {
    setFacts(localData);
  }, [countryName]);

  const population =
    facts?.population !== undefined
      ? Math.round((facts?.population / 1000000) * 100) / 100
      : null;

  console.log("facts", facts);
  return (
    <div>
      <h1>Welcome to {current.country}.</h1>
      <ol>
        <li>
          The official name of {current.country} is: "{facts?.officialName}".
        </li>
        <li>
          {current.country} is situated in the continent of: {facts?.continents}.
        </li>
        <li>
          The common currencies used in {current.country} is/are:{" "}
          {facts?.currencies}.
        </li>
        <li>
          The common language(s) spoken in {current.country} is/are:{" "}
          {facts?.languages}.
        </li>
        <li>
          A female citizen of {current.country} is known as a:{" "}
          {facts?.femaleCitizen}.
        </li>
        <li>
          A male citizen of {current.country} is{" "}
          {facts?.femaleCitizen === facts?.maleCitizen ? "also" : null} known as
          a: {facts?.maleCitizen}.
        </li>
        <li>
          The capital city of {current.country} is: {facts?.capital}.
        </li>
        <li>
        As of 2021, about {population} million people live in: {current.country}.
        </li>
        <li>
          As of 2021, {current.country} is {facts?.isUNMember ? null : "not"} a member of the United Nations.
        </li>
      </ol>
      <h4>
        You scored {quizScore} out of 7 in the earlier short pre-boarding quiz
        for {current.country}!
      </h4>
    </div>
  );
};

export default ResultsPage;
