import React from 'react';
import '../Styles/Flags.css'

const Flags = ({ style, country, src , currentCountry }) => {
    if(country === currentCountry) {
        return <span>
        <img className='flags'style={style} src={src}></img>
    </span>;
    } else {
        return <span>
        <img className='flags' src={src}></img>
    </span>;
    }

};

export default Flags;
