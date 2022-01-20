

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