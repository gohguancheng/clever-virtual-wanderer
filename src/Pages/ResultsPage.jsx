import React, { useEffect, useState } from "react";
import ImageDisplay from "../Components/ImageDisplay";
import { statsGenerator, imageLinksArray } from "../Data_Logic/functions";
import { imageCall } from '../Data_Logic/credentials';
import { useParams } from "react-router-dom";

const imageDataMessage = {
  pending: "Fetching Images Data from Unsplash", 
  done: "Images Data Received", 
  noData: "Unable to receive Images Data from Unsplash"
}

const ResultsPage = ({ data, quizScore, current, username }) => {
  const [facts, setFacts] = useState();
  const [imageFullData, setImageFullData] = useState(); 
  const [IMGStatus, setIMGStatus] = useState();
  const [imageLinks, setImageLinks] = useState();
  const {countryName} = useParams();

  const imagesURL = imageCall(countryName);

  useEffect(() => {
    setIMGStatus(imageDataMessage.pending);
    fetch(imagesURL)
      .then((response) => response.json())
      .then((data) => {
        setImageFullData(data);
        setIMGStatus(imageDataMessage.done);
      })
      .catch(() => setIMGStatus(imageDataMessage.noData));
  }, [countryName]);

  useEffect(() => {
    if (IMGStatus !== imageDataMessage.pending) {
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
      <h1 className="m-5 text-4xl font-bold">Welcome to {current.country}, {username}. 🥳</h1>
      <h4 className="m-2 text-xl font-bold">
        You scored {quizScore} out of 7 in the earlier short pre-boarding quiz
        for {current.country}! 🎉
      </h4>
      <h4 className="m-2 text-lg font-semibold">Here are some facts about {current.country}:</h4>
      <ol>
        <li className="text-base">
          The official name of {current.country} is: <span className="underline">{facts?.officialName}</span>.
        </li>
        <li>
          {current.country} is situated in the continent of: <span className="underline">{facts?.continents}</span>
          .
        </li>
        <li>
          The common currencies used in {current.country} is/are:{" "}
          <span className="underline">{facts?.currencies}</span>.
        </li>
        <li>
          The common language(s) spoken in {current.country} is/are:{" "}
          <span className="underline">{facts?.languages}</span>.
        </li>
        <li>
          A female citizen of {current.country} is known as a:{" "}
          <span className="underline">{facts?.femaleCitizen}</span>.
        </li>
        <li>
          A male citizen of {current.country} is{" "}
          {facts?.femaleCitizen === facts?.maleCitizen ? "also" : null} known as
          a: <span className="underline">{facts?.maleCitizen}</span>.
        </li>
        <li>
          The capital city of {current.country} is: <span className="underline">{facts?.capital}</span>.
        </li>
        <li>
          As of 2021, about <span className="underline"> {population} million </span> people live in:{" "}
          {current.country}.
        </li>
        <li>
          As of 2021, {current.country} <span className="underline"> is {facts?.isUNMember ? null : "not"} a
          member </span> of the United Nations.
        </li>
      </ol>
      <div>
        <h4 className="m-5 text-lg font-bold">
          Here are some images (courtesy of 'Unsplash') related to {current.country}!
          <br /> 2 images displayed for each point earned from the quiz. ({quizScore} X 2 = {quizScore*2} 📷)
        </h4>
        {(IMGStatus !== imageDataMessage.done ) ? IMGStatus : <ImageDisplay country={current.country} score={quizScore} source={imageLinks} />}
      </div>
    </div>
  );
};

export default ResultsPage;
