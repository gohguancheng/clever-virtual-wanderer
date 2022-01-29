import React, { useEffect, useState } from 'react';


const ImageDisplay = ({ source }) => {
    const [gallery, setGallery] = useState([])
    useEffect(()=>{
        const array = source?.map((e,i)=>{return <img key={i} className=' w-auto h-min m-2 place-self-center' src={e?.url} alt={`image${i}`}/>});
        setGallery(array);
    } ,[source])
    
  return <div className='px-2 p-1 h-full w-auto flex flex-row flex-wrap justify-center'>
      {gallery}
  </div>;
};

export default ImageDisplay;
