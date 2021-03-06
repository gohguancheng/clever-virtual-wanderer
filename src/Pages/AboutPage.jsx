import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader"
import PassphraseInput from "../Components/PassphraseInput";


const PASSPHRASE = "icanshowyoutheworld";

const AboutPage = ({ username }) => {
  const [passphraseInput, setPassphraseInput] = useState(null);
  const [isLocked, setIsLocked] = useState(true);
  const navigate = useNavigate();
  const delayedNavigation = () => setTimeout(()=>navigate(`/regions`), 2000);


  useEffect(()=>{
    (passphraseInput === PASSPHRASE ? setIsLocked(false) : setIsLocked(true))
  },[passphraseInput]);

  isLocked ? null : delayedNavigation();

if (isLocked === false) {
      return(      
      <div className="p-40 flex flex-col items-center justify-center">
        <BounceLoader color={"rgb(34 197 94)"} loading={!isLocked} size={150} />
        <p className="m-2 text-lg font-semibold">
          π Loading Globe.. π
        </p>
      </div> )
} else {
    return (
      <div className="flex-col justify-center items-center">
        <h1 className="m-5 text-2xl font-bold">About the App</h1>
        <h4 className="m-5 text-2xl tracking-wide text-teal-800 font-semibold text-center">Not all who (virtually) wander are lost.. π’βοΈπ§³</h4>
        <h3 className="m-5 text-2xl font-bold"> π―π€Being Clever </h3>
        <p className="text-lg">
          {" "}
          Contextual knowledge enhances our experiences of the place(s) we visit. π
          <br /> Your knowledge determines how much you'll see. π {" "}
        </p>
        <h3 className="m-5 text-2xl font-bold">πΏπ² Going Virtual</h3>
        <p className="text-lg">
          Inspired by the prevailing anxiety associated with physical travel
          during a pandemic, π₯
          <br />
          we thought perhaps virtual travelling is a better option for now. π»{" "}
        </p>
        <PassphraseInput username={username} setPassphraseInput={setPassphraseInput} PASSPHRASE={PASSPHRASE} />
        {isLocked ? null : <p className="text-lg font-semibold">Bingo! Passphrase accepted!</p>}
      </div>
    );
  }
  
};

export default AboutPage;
