import React, { useEffect, useState } from "react";
import ImageDisplay from "../Components/ImageDisplay";
import { statsGenerator, imageLinksArray } from "../Data_Logic/functions";
import { imageCall } from '../Data_Logic/credentials';
import { useParams } from "react-router-dom";

const ResultsPage = ({ data, quizScore, current }) => {
  const [facts, setFacts] = useState();
  const [imageFullData, setImageFullData] = useState(); 
  const [IMGStatus, setIMGStatus] = useState();
  const [imageLinks, setImageLinks] = useState();
  const {countryName} = useParams();

  const imagesURL = imageCall(countryName);

  useEffect(() => {
    setIMGStatus("Fetching image data..");
    fetch(imagesURL)
      .then((response) => response.json())
      .then((data) => {
        setImageFullData(data);
        setIMGStatus("images data received");
      })
      .catch(() => setIMGStatus("No image data received"));
  }, [countryName]);

  useEffect(() => {
    if (IMGStatus !== "Fetching image data..") {
      const imageSourceArrays = imageLinksArray(imageFullData, quizScore);
      setImageLinks(imageSourceArrays);
    }
  }, [IMGStatus]);

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
  return (
    <div>
      {(IMGStatus === "images data received") ? null : IMGStatus}
      <h1>Welcome to {current.country}. 🥳</h1>
      <h4>
        You scored {quizScore} out of 7 in the earlier short pre-boarding quiz
        for {current.country}! 🎉
      </h4>
      <h4>Here are some facts about {current.country}:</h4>
      <ol>
        <li>
          The official name of {current.country} is: "{facts?.officialName}".
        </li>
        <li>
          {current.country} is situated in the continent of: {facts?.continents}
          .
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
          As of 2021, about {population} million people live in:{" "}
          {current.country}.
        </li>
        <li>
          As of 2021, {current.country} is {facts?.isUNMember ? null : "not"} a
          member of the United Nations.
        </li>
      </ol>
      <div>
        <h4>
          Here are some images (courtesy of 'Unsplash') related to {current.country}!
          <br /> 2 images displayed for each point earned from the quiz. ({quizScore} X 2 = {quizScore*2} 📷)
        </h4>
        <ImageDisplay country={current.country} score={quizScore} source={imageLinks} />
      </div>
    </div>
  );
};

export default ResultsPage;
