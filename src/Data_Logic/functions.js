const onlyUniqueInArray = (element, index, self) => {
  return self.indexOf(element) === index;
};

export const filterSubregionsByRegions = (data) => {
  let outputArray = [];
  if (data !== null) {
    const regionArray = data.map((element) => element.region);
    const uniqueRegionsArr = regionArray.filter(onlyUniqueInArray);
    for (const region of uniqueRegionsArr) {
      const objOfRegionsAndSubregions = data.filter((e, i) => {
        return e.region === region;
      });
      const subregions = objOfRegionsAndSubregions.map((e) => e.subregion);

      const uniqueSubregions = subregions.filter((element, index, self) => {
        return self.indexOf(element.trim()) === index && element !== "";
      });
      let regionObj = {};
      if (uniqueSubregions.length !== 0) {
        regionObj[region] = uniqueSubregions;
      } else {
        regionObj[region] = ["Antarctica & Southern Ocean"];
      }
      outputArray.push(regionObj);
    }
    outputArray.push({Others: ["Out Of This World"]});
  }
  return outputArray; // outputs -> [regionValue1: [subregionValue1, ... ], ... ]
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
  "femaleCitizen",
  "maleCitizen",
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
  const name = data?.name.common;
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
  const region = data?.region;

  const result = {
    name: name,
    officialName: officialName,
    languages: languages,
    capital: capital,
    currencies: currencies,
    maleCitizen: demonymsM,
    femaleCitizen: demonymsF,
    population: population,
    isUNMember: isUNMember,
    continents: continents,
    region: region,
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
  const selectedCountry = countryData["name"];
  let result = newObj;
  const coinFlip = doCoinFlip();
  let randomIndex = randomIndexGenerator(originalData, countryData);
  let randomCountryStats = statsGenerator(originalData[randomIndex]);
  while (randomCountryStats[topic] === undefined || randomCountryStats[topic] === "") {
    randomIndex = randomIndexGenerator(originalData, countryData);
    randomCountryStats = statsGenerator(originalData[randomIndex]);
  }
  let info;

  if (coinFlip === 1) {
    if (countryData[topic] === "" || countryData[topic] === undefined) {
      info = {
        answer: "*Unknown / No Official Data*",
        isTrue: true,
      };
    } else {
      info = {
        answer: countryData[topic],
        isTrue: true,
      };
    }
  } else {
    info = {
      answer: randomCountryStats[topic],
      isTrue: false,
      matchCountry: randomCountryStats["name"],
      matchRegion: randomCountryStats["region"],

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
  const arrayOfImagesLinks = arrayOfObjects?.slice(0, 2 * qty);

  return arrayOfImagesLinks;
};
