import React from "react";
import RegionButton from "./RegionButton";

const RegionContainer = ({
  data,
  region,
  regionCountries,
  setCurrent,
  setRegionCount,
}) => {
  const regionalButtons = regionCountries.map((element, i) => (
    <RegionButton
      key={i}
      data={data}
      subregion={element}
      setCurrent={setCurrent}
    />
  ));
  return (
    <div className="flex flex-col m-5 mx-20 hover:">
      <div className="flex order-1 place-self-center ">
      <h4 className="text-lg font-bold underline"> {region} </h4>
      </div>
      <div className="order-2 flex-wrap m-1">
      {regionalButtons}
      </div>
    </div>
  );
};

export default RegionContainer;
