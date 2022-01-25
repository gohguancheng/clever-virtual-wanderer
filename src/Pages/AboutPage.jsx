import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PassphraseInput from "../Components/PassphraseInput";
const PASSPHRASE = "icanshowyoutheworld";

const AboutPage = ({ username }) => {
  const [passphraseInput, setPassphraseInput] = useState(null);
  const [isLocked, setIsLocked] = useState(true);
  
  useEffect(()=>{
    (passphraseInput === PASSPHRASE ? setIsLocked(false) : setIsLocked(true))
  },[passphraseInput])
  
  return (
    <div className="container" id="about-page">
      <h1>About the App</h1>
      <h4 style={{color: "darkgreen"}}>Not all who (virtually) wander are lost.. 🚢✈️🧳</h4>
      <h3> 💯🤓Being Clever </h3>
      <p>
        {" "}
        Contextual knowledge enhances our experiences of the place(s) we visit. 📖
        <br /> Your knowledge determines how much you'll see. 👓 {" "}
      </p>
      <h3>🗿📲 Going Virtual</h3>
      <p>
        Inspired by the prevailing anxiety associated with physical travel
        during a pandemic, 😥
        <br />
        we thought perhaps virtual travelling is a better option for now. 💻{" "}
      </p>
      <PassphraseInput username={username} setPassphraseInput={setPassphraseInput} PASSPHRASE={PASSPHRASE} />
      {isLocked ? null : <Link to={"/regions"}><button> Start your virtual journey today! </button></Link>}
    </div>
  );
};

export default AboutPage;
