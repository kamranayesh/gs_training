const initialState = [
  {
    city: "Bangalore",
    news: "heavy rain",
    description: "extreme rain fall on monday happened in major parts",
  },
  {
    city: "Hyderabad",
    news: "Sunny day and rainy night",
    description: "extreme temperatures are expected during day.",
  },
  {
    city: "Mumbai",
    news: "Cool Weather",
    description: "Cool breeze from sea",
  },
  {
    city: "Guwahati",
    news: "Humidity",
    description: "Heavy rains and humidity all day",
  },
];

const CityNewsReducer = (state = initialState, action) => {
  // console.log(state, action);
  if (action.type === "add") {
    let newCity = action.payload;
    let newState = [...state, newCity];
    return newState;
  }
  if (action.type === "clear") {
    // console.log("Clear all");
    let newState = [];
    return newState;
  }
  // if (action.type === "addNews") {
  //   // console.log("Clear all");
  //   let newState = state;
  //   newState[action.payload.id].news.push({
  //     news: action.payload.news,
  //     description: action.payload.description,
  //   });
  //   return newState;
  // }

  if (action.type === "deleteCity") {
    let indexTodelete = Number(action.payload);
    console.log("Delete in reducer", indexTodelete);
    // let newState = state.filter((val, index) => index !== indexTodelete);
    let newState = state.filter((val, index) => {
      console.log("Delete in reducer", indexTodelete);
      // debugger;
      if (index === indexTodelete) {
        console.log("false");
        return false;
      }
      console.log("true");
      return true;
    });
    // let newState = state.splice(indexTodelete, 1);
    console.log("newstate", newState);

    return newState;
  }

  return state;
};

export default CityNewsReducer;
//     return state.filter((v, i) => i != indexTodelete);
