import React, { useState, useEffect, useRef } from "react";

const PassphraseInput = ({ username, setPassphraseInput, PASSPHRASE }) => {
  const [showHint, setShowHint] = useState(false);
  const [hintText, setHintText] = useState(null);
  
  
  const input = useRef(); //useRef returns an object with { current : {value : 'ref - referencedData'} }

  const passphraseChecker = () => {
    setPassphraseInput(input.current.value); 
  };

  useEffect(() => {
    if (showHint) {
      setHintText(`Passphrase = ${PASSPHRASE}`);
    } else {
      setHintText(null);
    }
  }, [showHint]);

  return (
    <div className="m-5">
      <label htmlFor="passphrase">
        <p className="m-2 text-lg">
          Hi there, {username === "" ? "Mystery Traveller" : username}! 😁 <br/>Please
          enter the <span className="font-black underline">case-sensitive</span> secret passphrase. 🔏
        </p>
      </label>
      <input
        ref={input}
        onChange={passphraseChecker}
        className="m-1 shadow appearance-none border rounded w-fit py-1 px-8 text-gray-700 leading-tight text-center focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Enter secret passphrase"
      ></input>
      <div className="m-2 text-lg">{hintText}</div>
      <div>
        <button
        className="m-1 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
          id="hint-button"
          onClick={() => setShowHint((prevState) => setShowHint(!prevState))}
        >
          Click for Hint
        </button>
      </div>
    </div>
  );
};

export default PassphraseInput;
