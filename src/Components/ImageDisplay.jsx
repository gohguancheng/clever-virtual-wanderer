import React, { useEffect, useState } from 'react';


const ImageDisplay = ({ source }) => {
    const [gallery, setGallery] = useState([])
    useEffect(()=>{
        const array = source?.map((e,i)=>{return <img key={i} className=' w-auto h-min m-2 place-self-center' src={e?.url} alt={`image${i}`}/>});
        setGallery(array);
    } ,[source])
  if (source === undefined) {
    return <h4 className='text-base font-semibold flex flex-wrap'>Issues detected for the web app gallery. Please contact app developer. Thank you!</h4>
    } else if (gallery?.length !== 0) {
  return <div className='px-2 p-1 h-full w-auto flex flex-row flex-wrap justify-center'>
      {gallery}
  </div>
  } else { return (    
  <div className='px-2 p-1 h-full w-auto flex flex-col flex-wrap'>
    <h4 className='text-base font-semibold flex basis-1 flex-wrap justify-center'>Sorry, there are 0 images to be displayed as the recorded quiz score is 0.</h4>
    <h4 className='text-base font-semibold flex basis-2 flex-wrap justify-center'>Please return to the Globe Page to embark on a new adventure.</h4>
</div>)
  } 
};

export default ImageDisplay;
