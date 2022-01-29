import React from "react";

const AnswersContainer = ({
  correctClick,
  messages,
  correction,
  buttonDisabled,
  questionTrueClickHandler,
  questionFalseClickHandler,
}) => {
  return (
    <div className="grid justify-center">
      <p
        className={`w-max justify-self-center text-lg break-all ${
          correctClick
            ? "text-green-600 bg-lime-200"
            : "text-red-800 bg-rose-200"
        }`}
      >
        {messages.line1}
      </p>
      <p
        className={`w-max justify-self-center text-lg break-all ${
          correctClick
            ? "text-green-600 bg-lime-200"
            : "text-red-800 bg-rose-200"
        }`}
      >
        {messages.line2}
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
};

export default AnswersContainer;
