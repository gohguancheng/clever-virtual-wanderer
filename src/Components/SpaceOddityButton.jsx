import React, { useState } from "react";

const SpaceOddityButton = ({
  statement,
  setStatement,
  answer,
  text,
  correctCount,
  setCorrectCount,
}) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handler = () => {
    setButtonDisabled(true);
    const index = answer.findIndex((element) => element === text);
    if (index !== -1) {
      let newArr = [...statement];
      newArr[index] = text;
      setStatement(newArr);
      setCorrectCount((count) => count + 1);
    }
  };

  return (
    <div className="inline-grid m-4">
      <button
        className={`bg-blue-800 hover:bg-blue-400 text-white text-2xl font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-1 ${buttonDisabled ? "ring ring-orange-400" : null}`}
        disabled={buttonDisabled}
        onClick={handler}
      >
        {" "}
        {text}{" "}
      </button>
    </div>
  );
};

export default SpaceOddityButton;
