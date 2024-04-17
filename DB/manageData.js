const { getData } = require("./data");

exports.getDataByID = async (id) => {
  const data = await getData();

  const matchedData = data.results.filter((movie) => movie.id === id);

  return matchedData ? matchedData : [];
};
