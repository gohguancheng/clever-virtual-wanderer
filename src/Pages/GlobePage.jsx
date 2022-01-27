
import RegionContainer from "../Components/RegionContainer";


const GlobePage = ({ data, regions, current, setCurrent, setQuizScore }) => {
    //*map regions buttons
    const regionalCountriesContainers = regions.map((element, i) => <RegionContainer key={i} data={data} region={Object.keys(element)[0]} regionCountries={element[Object.keys(element)[0]]} setCurrent={setCurrent} />);
   setQuizScore(0);
  return (
      
  <div>
      <h1 className="m-5 text-2xl font-bold">Welcome to the Globe🌎</h1>
      <h3 className="m-5 text-xl font-bold">
      There are 25 (+1) sub-regions to choose from. 🛫
      </h3>
      <p className="text-lg">Click on a button below to head to a random country in the selected region.</p>
      <p className="text-lg">You won't be able to choose which country you'll arrive in.. 🤭
      <br/>So buckle up, and just enjoy setting forth into the unknown. 😊 </p>
      {regionalCountriesContainers}
  </div>);
};

export default GlobePage;
