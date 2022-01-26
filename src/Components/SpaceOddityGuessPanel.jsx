import React, { useState } from "react";
import SpaceOddityButton from "./SpaceOddityButton";

const ANSWER = [
  "Space",
  "Oddity",
  "by",
  "David",
  "Bowie",
  "is",
  "a",
  "pretty",
  "cool",
  "song",
];
const GIBBERISH = [
  "pretty",
  "Passenger",
  "song",
  "Space",
  "is",
  "Bowie",
  "are",
  "Odyssey",
  "a",
  "film",
  "cool",
  "Oddity",
  "by",
  "David",
];

const SpaceOddityGuessPanel = ({ statement, setStatement, setIsUnlocked }) => {
  const [correctCount, setCorrectCount] = useState(0);
  correctCount > 9 ? setIsUnlocked(true) : null;
  const buttons = GIBBERISH.map((e, i) => {
    return (
      <SpaceOddityButton
        key={i}
        statement={statement}
        setStatement={setStatement}
        setIsUnlocked={setIsUnlocked}
        answer={ANSWER}
        text={e}
        correctCount={correctCount}
        setCorrectCount={setCorrectCount}
      />
    );
  });
  return <div className="m-8">{buttons}</div>;
};

export default SpaceOddityGuessPanel;
