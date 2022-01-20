const TOPICS = ["capital", "car.side", "continent", "currencies", "denonyms.eng.m", "population", "unMember", "population"]

export const filterRegionsData = (data) => {
  let output = null;
  console.log(data);
  if (data !== null) {
    const regionObjects = data.map((element) => element.subregion);
    const regions = regionObjects.filter((element, index, self) => {
      return (self.indexOf(element.trim()) === index && element !== "");
    });
    output = regions;
  }
  return output
}

export const randomArrayElementSelector = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  const result = array[randomIndex];
  return result;
}

export const byPropertyInObjOfObj = (objOfObj, innerProperty) => {
  const array = [];
    for (const prop in objOfObj) { 
      array.push(objOfObj[prop][innerProperty])
    } 
  return array.join(" & ");
}

const languagesCounter = (obj) => {
  const array = [];
  for (const prop in obj){
    array.push(obj[prop]);
  };
  return array.join(" & ");
  
}

export const statsGenerator = (data) => {
  const officialName = data.name.official;
  const capital = data.capital[0];
  const languages = languagesCounter(data.languages)
  const currenciesSymbol = data.currencies;
  const currencies =  byPropertyInObjOfObj(currenciesSymbol, "name");
  const demonymsM = data.demonyms.eng.m;
  const demonymsF = data.demonyms.eng.f;
  const population = data.population;
  const isUNMember = data.unMember;
  const continent = data.continents[0];

  const result = {
    officialName: officialName, 
    languages: languages,
    capital: capital,
    currencies: currencies,
    maleCitizen: demonymsM,
    femaleCitizen: demonymsF,
    population: population,
    isUNMember: isUNMember,
    continent: continent,
  }

  return result
}

const questionsGenerator = () => {
  
}