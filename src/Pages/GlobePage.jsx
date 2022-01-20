import RegionButton from "../Components/RegionButton";

const GlobePage = ({ data, regions, current, setCurrent }) => {
    //*map regions buttons
    // { regions } is that same as assigning the value of (regions:value) pair to a new const 'regions' on this page
    const regionButtons = regions.map((element, i) => <RegionButton key={i} data={data} region={element} index={i+1} current={current} setCurrent={setCurrent} />)
   // console.log(regions)
  return (
      
  <div>
      <h3>
      There are {regions.length} regions to choose from.
      </h3>
      <p>The App will bring you to a random country in the region you click on.</p>
      <p>You won't be able to choose which country you'll arrive in.. 
      <br/>So buckle up, and just enjoy setting forth into the unknown. :) </p>
      {regionButtons}
      
  </div>);
};

export default GlobePage;
