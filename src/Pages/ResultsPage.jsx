import React, { useEffect, useState } from "react";
import ImageDisplay from "../Components/ImageDisplay";
import { statsGenerator, imageLinksArray } from "../Data_Logic/functions";
import { imageCall } from "../Data_Logic/credentials";
import { useParams, Link } from "react-router-dom";

const imageDataMessage = {
  pending: "Fetching Images Data from Unsplash",
  done: "Images Data Received",
  noData: "Unable to receive Images Data from Unsplash",
};

const ResultsPage = ({ data, quizScore, current, username }) => {
  useEffect(()=>window.scrollTo(0, 0), []);
  const [facts, setFacts] = useState();
  const [imageFullData, setImageFullData] = useState();
  const [IMGStatus, setIMGStatus] = useState();
  const [imageLinks, setImageLinks] = useState();
  const { countryName } = useParams();

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

  const populationInMil =
    facts?.population !== undefined
      ? Math.round((facts?.population / 1000000) * 100) / 100
      : null;
     
  return (
    <div className="px-4 h-full">
      <h1 className="m-5 text-4xl font-bold">
        Welcome to {current.country}, {username}. 🥳
      </h1>
      <h4 className="m-2 text-xl font-bold">
        You scored {quizScore} out of 7 in the earlier short pre-boarding quiz
        for {current.country}! 🎉
      </h4>
      <h4 className="m-2 text-lg font-semibold">
        Here are some facts about {current.country}:
      </h4>
      <ol>
        <li className="text-base">
          The official name of {current.country} is:{" "}
          <span className="underline">
            {facts?.officialName === "" || facts?.officialName === undefined
              ? "Not Officially Defined"
              : facts?.continents}
          </span>
          .
        </li>
        <li>
          {current.country} is situated in the continent of:{" "}
          <span className="underline">
            {facts?.continents === "" || facts?.continents === undefined
              ? "Not Officially Defined"
              : facts?.continents}
          </span>
          .
        </li>
        <li>
          The common currencies used in {current.country} is/are:{" "}
          <span className="underline">
            {facts?.currencies === "" || facts?.currencies === undefined
              ? "Not Officially Defined"
              : facts?.currencies}
          </span>
          .
        </li>
        <li>
          The common language(s) spoken in {current.country} is/are:{" "}
          <span className="underline">
            {facts?.languages === "" || facts?.languages === undefined
              ? "Not Officially Defined"
              : facts?.languages}
          </span>
          .
        </li>
        <li>
          A female citizen of {current.country} is known as a:{" "}
          <span className="underline">
            {facts?.femaleCitizen === "" || facts?.femaleCitizen === undefined
              ? "Not Officially Defined"
              : facts?.femaleCitizen}
          </span>
          .
        </li>
        <li>
          A male citizen of {current.country} is{" "}
          {facts?.femaleCitizen === facts?.maleCitizen ? "also" : null} known as
          a:{" "}
          <span className="underline">
            {facts?.maleCitizen === "" || facts?.maleCitizen === undefined
              ? "Not Officially Defined"
              : facts?.maleCitizen}
          </span>
          .
        </li>
        <li>
          The capital city of {current.country} is:{" "}
          <span className="underline">
            {facts?.capital === "" || facts?.capital === undefined
              ? "Not Officially Defined"
              : facts?.capital}
          </span>
          .
        </li>
        <li>
          As at 2021, about{" "}
          <span className="underline">
            {" "}
            {populationInMil > 0
              ? `${populationInMil} million`
              : facts?.population}
          </span>{" "}
          people live in {current.country}.
        </li>
        <li>
          As at 2021, {current.country}{" "}
          <span className="underline">
            {" "}
            is {facts?.isUNMember ? null : "not"} a member
          </span>{" "}
          of the United Nations.
        </li>
      </ol>
      <div className="m-4">
        <h4 className="text-lg font-bold">
          Below are some images related to {current.country}!
        </h4>
        <p className="m-2 text-sm font-semibold">
          Number of images unlocked based on quiz score = {quizScore * 2} (2 📷
          per point earned)
        </p>
        <p className="m-2 text-sm font-semibold">
          Actual number of images fetched courtesy of 'Unsplash.com' database:{" "}
          {imageLinks?.length === undefined ? "images loading.." : imageLinks?.length} 📷
        </p>
      </div>
      <div className="flex h-auto w-auto bg-cyan-600 bg-opacity-25 rounded-xl">
      {IMGStatus !== imageDataMessage.done ? (
        IMGStatus
      ) : (
        <ImageDisplay
          country={current.country}
          score={quizScore}
          source={imageLinks}
        />
      )}
    </div>
      <div>
        <Link to={`/regions`}>
          <button className="m-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Back to Globe
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ResultsPage;
