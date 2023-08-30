const add = (cityNews) => ({ type: "add", payload: cityNews });
const addNews = (news) => ({ type: "addNews", payload: news });
const deleteCity = (indexTodelete) => ({
  type: "deleteCity",
  payload: indexTodelete,
});
const clear = () => ({ type: "clear" });

export { add, deleteCity, clear, addNews };
