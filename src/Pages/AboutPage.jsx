import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const [showHint, setShowHint] = useState(false);
  const passphraseInput = useRef(); //useref returns an object with { current : {value : 'ref - referencedData'} }

  const passphraseChecker = () => {

  }

  const hint = () => {
    if (showHint) {
      return <p> Passphrase: "HelloWorld"  </p>
    } else {
      return null
    }
  }
  const hintText = hint();

  return (
    <div className="container" id="about-page">
      <h1>About the App</h1>
      <h4 style={{color: "darkgreen"}}>Not all who (virtually) wander are lost..</h4>
      <h3>Be Clever</h3>
      <p>
        {" "}
        Contextual knowledge improves the experiences of the place we visit.
        <br /> Your knowledge determines how much you see.{" "}
      </p>
      <h3>Go Virtual</h3>
      <p>
        Inspired by a prevailing anxiety associated with physical travel
        during a pandemic,
        <br />
        we thought perhaps visiting places virtually is a better option for now.{" "}
      </p>
      <form>
      <label htmlFor="passphrase"><p>Please enter the case-sensitive secret passphrase.</p></label>
        <input 
        ref={passphraseInput}
        type="text" 
        placeholder="Enter the secret passphrase"
        ></input>

        <button id="hint-button" onClick={()=>setShowHint((prev => (prev = !showHint)))}>hint</button> {hintText}
      <Link to={"/regions"}><button> Start your virtual journey today! </button></Link>
      </form>
    </div>
  );
};

export default AboutPage;
