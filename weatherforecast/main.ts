import { WeatherMeta } from "./type";

const forecastbtn = document.getElementById("forecast") as HTMLButtonElement;
const geoforecastbtn = document.getElementById(
  "geoforecast"
) as HTMLButtonElement;
const inputLocation = document.getElementById("loc") as HTMLInputElement;
const weatherdiv = document.getElementById(
  "weather-forecast"
) as HTMLDivElement;
const currentdiv = document.getElementById("current") as HTMLDivElement;
const futurediv = document.getElementById("future") as HTMLDivElement;
forecastbtn.addEventListener("click", weatherForecast);
geoforecastbtn.addEventListener("click", geoWeatherForecast);

async function getLocation(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error("Geolocation is not available."));
    }
  });
}
async function forecasting(locationText: string) {
  //   console.log("test");
  //   console.log("test2");
  const response = await window
    .fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=911148aa2d324c92b16102233232208&q=${locationText}&days=5&aqi=no&alerts=no`
    )
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("hello");
      console.error("Fetch error:", error);
    });

  const data = response as WeatherMeta;
  console.log(data);
  //   console.log(data.forecast.forecastday[2].day.condition.icon);
  currentdiv.innerHTML = `<div class="location"> ${data.location.name}, ${
    data.location.country
  } </div><br>
  <div id="condition"> ${data.current.condition.text} </div><br>
  <div id="temp"> ${data.current.temp_c} °C</div><br>
  <div id="ph"> Pressure : ${data.current.pressure_mb} | Humidity : ${
    data.current.humidity
  } </div><br>
  <hr><br>
  <div id="rowlabel"> Now </div><div id="rowlabel"> ${data.forecast.forecastday[1].date.substring(
    8,
    10
  )} </div><div id="rowlabel"> ${data.forecast.forecastday[2].date.substring(
    8,
    10
  )} </div><div id="rowlabel"> ${data.forecast.forecastday[3].date.substring(
    8,
    10
  )} </div><div id="rowlabel"> ${data.forecast.forecastday[4].date.substring(
    8,
    10
  )} </div><br>
  <div id="rowlabel"> ${
    data.forecast.forecastday[0].day.maxtemp_c
  }  </div><div id="rowlabel"> ${
    data.forecast.forecastday[1].day.maxtemp_c
  } </div><div id="rowlabel"> ${
    data.forecast.forecastday[2].day.maxtemp_c
  } </div><div id="rowlabel"> ${
    data.forecast.forecastday[3].day.maxtemp_c
  } </div><div id="rowlabel"> ${
    data.forecast.forecastday[4].day.maxtemp_c
  } </div><br>
  <div id="rowlabel"> ${
    data.forecast.forecastday[0].day.mintemp_c
  }  </div><div id="rowlabel"> ${
    data.forecast.forecastday[1].day.mintemp_c
  } </div><div id="rowlabel"> ${
    data.forecast.forecastday[2].day.mintemp_c
  } </div><div id="rowlabel"> ${
    data.forecast.forecastday[3].day.mintemp_c
  } </div><div id="rowlabel"> ${
    data.forecast.forecastday[4].day.mintemp_c
  } </div><br>
  <img id ="icon" src="https:${
    data.forecast.forecastday[0].day.condition.icon
  } "><img id ="icon" src= "https:${
    data.forecast.forecastday[1].day.condition.icon
  }" ><img id ="icon" src= "https:${
    data.forecast.forecastday[2].day.condition.icon
  }" ><img id ="icon" src= "https:${
    data.forecast.forecastday[3].day.condition.icon
  }" ><img id ="icon" src= "https:${
    data.forecast.forecastday[4].day.condition.icon
  } "><br>
  <hr><br>
  <div id="avglabel1"> Today </div> <div id="avglabel2">${
    data.forecast.forecastday[0].day.avgtemp_c
  }°  </div><br>
  <div id="avglabel1"> Tomorrow </div> <div id="avglabel2">${
    data.forecast.forecastday[1].day.avgtemp_c
  }°  </div><br>
  <div id="avglabel1"> Day After Tomorrow </div> <div id="avglabel2">${
    data.forecast.forecastday[2].day.avgtemp_c
  }°  </div>
  `;
}

async function weatherForecast() {
  if (inputLocation.value === "") return;
  await forecasting(inputLocation.value);
}

async function geoWeatherForecast() {
  try {
    const position = await getLocation();
    console.log(position);
  } catch (error) {
    console.error("Error:", error);
  }
}
