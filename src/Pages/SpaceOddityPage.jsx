import React, { useState } from 'react';
import SpaceOddityGuessPanel from '../Components/SpaceOddityGuessPanel';
import { Link } from 'react-router-dom';



const SpaceOddityPage = () => {
    const [statement, setStatement] = useState(["?", "?", "?", "?", "?", "?", "?","?", "?", "?",])
    const [isUnlocked, setIsUnlocked] = useState(false)

    if (statement === ["Space", "Oddity", "by", "David", "Bowie", "is", "a", "pretty","cool", "song"]) return setIsUnlocked(true);

    const statementDisplay = statement.map((e, i) => { 
        return <span key={i} className="grid-inline m-1 bg-white border-2 text-3xl border-slate-500 font-semibold">{e}</span>    
    } )
  return <div>
            <h4 className="m-5 text-2xl font-bold">A Quick Game Before Your <span className='underline'>Out Of This World</span>  Experience. 🚀</h4>
      <h1 className="m-5 text-4xl font-bold">  </h1>      
      <p className="text-lg">
        Click the below buttons to guess the statement.
        <br />Correctly guessing the statement will unlock your button to the next page. 🧑‍🚀
      </p>
      {isUnlocked ? <Link to={`/Out%20Of%20This%20World/space`}><button className="m-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">To Infinity & Beyond!</button></Link> : null} 
       <div className='m-4'>
        {statementDisplay}
        <SpaceOddityGuessPanel statement={statement} setStatement={setStatement} setIsUnlocked={setIsUnlocked} />
       </div>

  </div>;
};

export default SpaceOddityPage;

