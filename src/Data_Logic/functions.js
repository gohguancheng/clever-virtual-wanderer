

export const filterRegionsData = (data) => {
  let output = null;
  if (data !== null) {
    const regionObjects = data.map((element) => element.subregion);
    const regions = regionObjects.filter((element, index, self) => {
      return self.indexOf(element.trim()) === index && element !== "";
    });
    output = regions;
  }
  return output;
};

export const randomArrayElementSelector = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  const result = array[randomIndex];
  return result;
};

export const TOPICS = [
  "officialName", 
  "capital",
  "currencies",
  "maleCitizen",
  "femaleCitizen",
  "population",
  "isUNMember",
  "continents",
  "languages",
];

export const byPropertyInObjOfObj = (objOfObj, innerProperty) => {
  const array = [];
  for (const prop in objOfObj) {
    array.push(objOfObj[prop][innerProperty]);
  }
  return array.join(" & ");
};

const languagesCounter = (obj) => {
  const array = [];
  for (const prop in obj) {
    array.push(obj[prop]);
  }
  return array.join(" & ");
};

export const statsGenerator = (data) => {
  const officialName = data.name.official;
  const capital = data.capital[0];
  const languages = languagesCounter(data.languages);
  const currenciesSymbol = data.currencies;
  const currencies = byPropertyInObjOfObj(currenciesSymbol, "name");
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
  };

  return result;
};

export const doCoinFlip = () => Math.floor(Math.random() * 2) + 1;

export const randomIndexGenerator = (data, compareData) => {
  const currentIndex = data.map((e) => {return e.capital; }).indexOf(compareData.capital);
  let randomIndex = Math.floor(Math.random() * data.length);
  while (randomIndex === currentIndex) {
    randomIndex = Math.floor(Math.random() * data.length);
  }
  return randomIndex;
}

export const answerGenerator = (topic, countryData, originalData) => {
  const newObj = {
    topic: topic,
    answer: "",
    isTrue: null,
  };
  let result = newObj;
  const coinFlip = doCoinFlip();
  const randomIndex = randomIndexGenerator(originalData, countryData)
  const randomCountryStats = statsGenerator(originalData[randomIndex])
  let info;

  if (coinFlip === 1 ) {
    info = {
      answer: countryData[topic],
      isTrue: true,
    };
    console.log("true answer: ", info.answer)
  } else {
    info = {
      answer: randomCountryStats[topic],
      isTrue: false,
    };
    console.log("false answer: ", info.answer)
  }
  result = { ...newObj, ...info };
  return result;
};
