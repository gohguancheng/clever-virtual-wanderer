import React, { useEffect, useState } from 'react';


const ImageDisplay = ({ source }) => {
    const [gallery, setGallery] = useState([])
    useEffect(()=>{
        const array = source?.map((e,i)=>{return <img key={i} className='m-2 inline' src={e?.url} alt={`image${i}`}/>});
        setGallery(array);
    } ,[source])
    
  return <div className='inline'>
      {gallery}
  </div>;
};

export default ImageDisplay;
