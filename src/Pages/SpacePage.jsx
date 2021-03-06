import React, { useState, useEffect } from "react";
import ImageDisplay from "../Components/ImageDisplay";
import { randomArrayElementSelector, imageLinksArray } from "../Data_Logic/functions";
import { imageCall } from "../Data_Logic/credentials";
import { Link } from "react-router-dom";

const imageDataMessage = {
  pending: "Fetching Images Data from Unsplash",
  done: "Images Data Received",
  noData: "Unable to receive Images Data from Unsplash",
};

const spaceQueryTerms = ["nasa", "milkyway", "galaxy", "universe"]
const SpacePage = ({username, current}) => {
  useEffect(()=>window.scrollTo(0, 0), []);
  const [imageFullData, setImageFullData] = useState();
  const [IMGStatus, setIMGStatus] = useState();
  const [imageLinks, setImageLinks] = useState();
  const imagesURL = imageCall(randomArrayElementSelector(spaceQueryTerms));
  useEffect(() => {
    setIMGStatus(imageDataMessage.pending);
    fetch(imagesURL)
      .then((response) => response.json())
      .then((data) => {
        setImageFullData(data);
        setIMGStatus(imageDataMessage.done);
      })
      .catch(() => setIMGStatus(imageDataMessage.noData));
  }, [current.country]);

  useEffect(() => {
    if (IMGStatus !== imageDataMessage.pending) {
      const imageSourceArrays = imageLinksArray(imageFullData, 20);
      setImageLinks(imageSourceArrays);
    }
  }, [IMGStatus]);
  return (
    <div className="px-4 h-full">
      <div>
        <h1 className="m-5 text-4xl font-bold">
          Welcome to Outer Space, {username}. 🥳
        </h1>
        <h4 className="m-2 text-xl font-bold">
          Ground Control to Major Tom.. <br/> It seems you've decided to leave Earth altogether. 🎉
        </h4>
      </div>
      <div className="m-4">
        <h4 className="text-lg font-bold">
          Here are some images related to Space!
        </h4>

      </div>
      <div className="flex h-auto w-auto bg-cyan-600 bg-opacity-25 rounded-xl">
      {IMGStatus !== imageDataMessage.done ? (
        IMGStatus
      ) : (
        <ImageDisplay
          country={current.country}
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

export default SpacePage;
