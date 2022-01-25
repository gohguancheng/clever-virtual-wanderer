import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PassphraseInput from "../Components/PassphraseInput";
const PASSPHRASE = "icanshowyoutheworld";

const AboutPage = ({ username }) => {
  const [passphraseInput, setPassphraseInput] = useState(null);
  const [isLocked, setIsLocked] = useState(true);
  const navigate = useNavigate();
  
  useEffect(()=>{
    (passphraseInput === PASSPHRASE ? setIsLocked(false) : setIsLocked(true))
  },[passphraseInput]);

  isLocked ? null : setTimeout(()=>navigate(`/regions`), 1000);
  
  return (
    <div className="flex-col justify-center items-center">
      <h1 className="m-5 text-2xl font-bold">About the App</h1>
      <h4 className="m-5 text-2xl tracking-wide text-teal-800 font-semibold text-center">Not all who (virtually) wander are lost.. 🚢✈️🧳</h4>
      <h3 className="m-5 text-2xl font-bold"> 💯🤓Being Clever </h3>
      <p className="text-lg">
        {" "}
        Contextual knowledge enhances our experiences of the place(s) we visit. 📖
        <br /> Your knowledge determines how much you'll see. 👓 {" "}
      </p>
      <h3 className="m-5 text-2xl font-bold">🗿📲 Going Virtual</h3>
      <p className="text-lg">
        Inspired by the prevailing anxiety associated with physical travel
        during a pandemic, 😥
        <br />
        we thought perhaps virtual travelling is a better option for now. 💻{" "}
      </p>
      <PassphraseInput username={username} setPassphraseInput={setPassphraseInput} PASSPHRASE={PASSPHRASE} />
      {isLocked ? null : <p className="text-lg font-semibold">Bingo! Passphrase accepted!</p>}
    </div>
  );
};

export default AboutPage;
