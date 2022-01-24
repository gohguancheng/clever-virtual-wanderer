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
  "continents",
  "capital",
  "languages",
  "currencies",
  "maleCitizen",
  "femaleCitizen",
  // "population",
  // "isUNMember",
];

export const byPropertyInObjOfObj = (objOfObj, innerProperty) => {
  const array = [];
  for (const prop in objOfObj) {
    array.push(`${objOfObj[prop][innerProperty]} (${prop})`);
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
  const officialName = data?.name.official;
  const capital = data?.capital[0];
  const languages = languagesCounter(data?.languages);
  const currenciesSymbol = data?.currencies;
  const currencies = byPropertyInObjOfObj(currenciesSymbol, "name");
  const demonymsM = data?.demonyms.eng.m;
  const demonymsF = data?.demonyms.eng.f;
  const population = data?.population;
  const isUNMember = data?.unMember;
  const continents = data?.continents.join(" & ");

  const result = {
    officialName: officialName,
    languages: languages,
    capital: capital,
    currencies: currencies,
    maleCitizen: demonymsM,
    femaleCitizen: demonymsF,
    population: population,
    isUNMember: isUNMember,
    continents: continents,
  };

  return result;
};

export const doCoinFlip = () => Math.floor(Math.random() * 2) + 1;

export const randomIndexGenerator = (data, compareData) => {
  const currentIndex = data
    .map((e) => {
      return e.name.officialName;
    })
    .indexOf(compareData.officialName);
  let randomIndex = Math.floor(Math.random() * data.length);
  while (randomIndex === currentIndex) {
    randomIndex = Math.floor(Math.random() * data.length);
  }
  return randomIndex;
};

export const answerGenerator = (topic, countryData, originalData) => {
  const newObj = {
    topic: topic,
    answer: "no answer generated",
    isTrue: null,
  };
  let result = newObj;
  const coinFlip = doCoinFlip();
  let randomIndex = randomIndexGenerator(originalData, countryData);
  let randomCountryStats = statsGenerator(originalData[randomIndex]);
  while (randomCountryStats === undefined || randomCountryStats === "") {
    randomIndex = randomIndexGenerator(originalData, countryData);
    randomCountryStats = statsGenerator(originalData[randomIndex]);
  }
  let info;

  if (coinFlip === 1) {
    info = {
      answer: countryData[topic],
      isTrue: true,
    };

  } else {
    info = {
      answer: randomCountryStats[topic],
      isTrue: false,
    };

  }
  result = { ...newObj, ...info };
  return result;
};

export const imageLinksArray = (data, qty) => {
  const arrayOfObjects = data?.results?.map((e, i) => {
    const object = {};
    object.url = e?.urls?.small;
    object.link = e?.links?.download;
    return object;
  });
  const arrayOfImagesLinks = arrayOfObjects?.slice(0, 2*qty);

  return arrayOfImagesLinks;
};
