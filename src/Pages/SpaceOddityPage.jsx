import React, { useState, useEffect } from 'react';
import SpaceOddityGuessPanel from '../Components/SpaceOddityGuessPanel';
import { Link } from 'react-router-dom';
import shuttleImage from '../Images/takeoff.png'

const SpaceOddityPage = () => {
    const [statement, setStatement] = useState(["-", "-", "-", "-", "-", "-", "-","-", "-", "-",])
    const [isUnlocked, setIsUnlocked] = useState(false)
    
    useEffect(()=>window.scrollTo(0, 0), []);

    if (statement === ["Space", "Oddity", "by", "David", "Bowie", "is", "a", "pretty","cool", "song"]) return setIsUnlocked(true);

    const statementDisplay = statement.map((e, i) => { 
        return <span key={i} className="w-28 inline flex-wrap m-1 bg-black border-1 text-white text-3xl border-slate-500 font-bold">{e}</span>    
    } )

  return(
  <div className="bg-cover h-full bg-right" style={{backgroundImage : `url(${shuttleImage})`}}>
    <div className='flex-inline flex-col flex-nowrap bg-cyan-100 bg-opacity-75 h-full'>
      <h4 className="pt-8 pb-4 text-3xl font-bold">A Quick Game Before Your <span className='underline'>Out Of This World</span>  Experience. 🚀</h4>  
      <p className="text-xl">
        No quizzes on this launchpad, but rather a simple game to get you in the groove. 
        <br/>Click on the <span className='bg-blue-800 text-white font-semibold px-1'>buttons</span> below to guess the statement.
        <br/>Correctly guessing the statement will unlock the button to access the next page. 🧑‍🚀
      </p>
      {isUnlocked ? <Link to={`/Out%20Of%20This%20World/space`}><button className="mt-10 mb-2 bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-800 hover:border-red-500 rounded-full">To Infinity & Beyond!</button></Link> : null} 
      <div className='m-2'>
         <div className='m-8 py-2 flex flex-row flex-wrap justify-center'>
        {statementDisplay}
         </div>
        <SpaceOddityGuessPanel statement={statement} setStatement={setStatement} setIsUnlocked={setIsUnlocked} />
      </div>
  </div>
</div>
    
  ); 
};

export default SpaceOddityPage;

