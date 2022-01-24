import React, { useEffect, useState } from 'react';


const ImageDisplay = ({ source }) => {
    const [gallery, setGallery] = useState([])
    useEffect(()=>{
        const array = source?.map((e,i)=>{return <img src={e?.url} alt={`image${i}`}/>});
        setGallery(array);
    } ,[source])
    
  return <div>
      {gallery}
  </div>;
};

export default ImageDisplay;
