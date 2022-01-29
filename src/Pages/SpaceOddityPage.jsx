import React, { useState } from 'react';
import SpaceOddityGuessPanel from '../Components/SpaceOddityGuessPanel';
import { Link } from 'react-router-dom';
import shuttleImage from '../Images/takeoff.png'

const SpaceOddityPage = () => {
    const [statement, setStatement] = useState(["-", "-", "-", "-", "-", "-", "-","-", "-", "-",])
    const [isUnlocked, setIsUnlocked] = useState(false)

    if (statement === ["Space", "Oddity", "by", "David", "Bowie", "is", "a", "pretty","cool", "song"]) return setIsUnlocked(true);

    const statementDisplay = statement.map((e, i) => { 
        return <span key={i} className="w-28 inline flex-wrap m-1 bg-black border-1 text-white text-2xl border-slate-500 font-bold">{e}</span>    
    } )

  return <div className='flex-inline flex-col flex-nowrap'>
      <h4 className="m-5 text-2xl font-bold">A Quick Game Before Your <span className='underline'>Out Of This World</span>  Experience. 🚀</h4>  
      <p className="text-lg">
        No quizzes on this launchpad, but rather a simple game to get you in the groove. 
        <br/>Click the below buttons to guess the statement.
        <br/>Correctly guessing the statement will unlock your button to the next page. 🧑‍🚀
      </p>
      {isUnlocked ? <Link to={`/Out%20Of%20This%20World/space`}><button className="m-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">To Infinity & Beyond!</button></Link> : null} 
      <div className='m-2'>
      <div className='flex mb-4 h-60 aspect-auto justify-center'>
        <img src={shuttleImage} title="Space Shuttle Take Off" />
        </div>
         <div className='flex flex-row flex-wrap justify-center'>
        {statementDisplay}
         </div>
        <SpaceOddityGuessPanel statement={statement} setStatement={setStatement} setIsUnlocked={setIsUnlocked} />
      </div>

  </div>;
};

export default SpaceOddityPage;

