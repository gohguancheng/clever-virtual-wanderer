import React from "react";

const Country = (props) => {
  const data = props.countryData;
  console.log(data);
  return <div>
      <h3></h3>
      Answer the Below Questions about {data[0].name}</div>;
};

export default Country;
