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
    <div>
      <h4> {region} </h4>
      {regionalButtons}
    </div>
  );
};

export default RegionContainer;
