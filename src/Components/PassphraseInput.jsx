import React, { useState, useEffect, useRef } from "react";

const PassphraseInput = ({ username, setPassphraseInput }) => {
  const [showHint, setShowHint] = useState(false);
  const [hintText, setHintText] = useState(null);
  
  const input = useRef(); //useRef returns an object with { current : {value : 'ref - referencedData'} }

  const passphraseChecker = () => {
    setPassphraseInput(input.current.value); 
  };

  useEffect(() => {
    if (showHint) {
      setHintText(`Passphrase: "icanshowyoutheworld"`);
    } else {
      setHintText(null);
    }
  }, [showHint]);

  return (
    <div>
      <label htmlFor="passphrase">
        <p>
          Hi there, {username === "" ? "Mystery Traveller" : username}, please
          enter the case-sensitive secret passphrase.
        </p>
      </label>
      <input
        ref={input}
        onChange={passphraseChecker}
        type="text"
        placeholder="Enter the secret passphrase"
      ></input>
      <div>{hintText}</div>
      <div>
        <button
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
