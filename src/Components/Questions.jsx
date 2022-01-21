import React from 'react';

const Questions = ({ topic, country, answer }) => {
  
      switch (topic) {
          case "officialName":
            return (
                <div>
                    <p> The offical name of {country} is: "{answer}".  </p>
                    <button className="question">True</button><button>False</button>
                </div>
            )
        case "capital":
            return (
                <div>
                    <p>The capital city of {country} is: {answer}.  </p>
                    <button>True</button><button>False</button>
                </div>
            )
        case "currencies":
            return (
                <div>
                    <p>The currency(/ies) used in {country} is/are: {answer}.  </p>
                    <button>True</button><button>False</button>
                </div>
            )
          
        case "maleCitizen":
            return (
                <div>
                    <p>A male citizen of {country} known as a(n): {answer}.  </p>
                    <button>True</button><button>False</button>
                </div>
            )
        case "femaleCitizen":
            return (
                <div>
                    <p>A female citizen of {country} known as a(n): {answer}.   </p>
                    <button>True</button><button>False</button>
                </div>
            )
        case "population":
            return (
                <div>
                    <p>The approx. population of {country} is {answer} people.  </p>
                    <button>True</button><button>False</button>
                </div>
            )
        case "languages":
            return (
                <div>
                    <p>The common language(s) spoken in {country} is/are: {answer}.  </p>
                    <button>True</button><button>False</button>
                </div>
            )
        case "continent":
            return (
                <div>
                    <p> {answer} is the continent that {country} is situated on. </p>
                    <button>True</button><button>False</button>
                </div>
            )
        default:
            return (
                <div>
                <p>Nothing generated.</p>
                
            </div>
                )
      }

};

export default Questions;
