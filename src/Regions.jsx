import ShowRegions from "./ShowRegions";


const Regions = (props) => {
    //*map regions buttons
    const regions = props.regions;
    const regionButtons = regions.map((element, i) => <ShowRegions key={i} regionName={element} index={i+1} />)

  return (
      
  <div>
      <h3>
      There are {regions.length} regions to choose from.
      </h3>
      <p>The App will bring you to a random country in the region you select app.</p>
      <p>You won't be able to choose which country you'll arrive in.. 
      <br/>So buckle up, just enjoy stepping into the unknown. :) </p>
      {regionButtons}
      
  </div>);
};

export default Regions;
