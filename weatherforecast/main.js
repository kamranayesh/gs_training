"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//Object.defineProperty(exports, "__esModule", { value: true });
var forecastbtn = document.getElementById("forecast");
var geoforecastbtn = document.getElementById("geoforecast");
var inputLocation = document.getElementById("loc");
var weatherdiv = document.getElementById("weather-forecast");
var currentdiv = document.getElementById("current");
var futurediv = document.getElementById("future");
forecastbtn.addEventListener("click", weatherForecast);
geoforecastbtn.addEventListener("click", geoWeatherForecast);
function getLocation() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    if ("geolocation" in navigator) {
                        navigator.geolocation.getCurrentPosition(resolve, reject);
                    }
                    else {
                        reject(new Error("Geolocation is not available."));
                    }
                })];
        });
    });
}
function forecasting(locationText) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, window
                        .fetch("http://api.weatherapi.com/v1/forecast.json?key=911148aa2d324c92b16102233232208&q=".concat(locationText, "&days=5&aqi=no&alerts=no"))
                        .then(function (response) {
                        return response.json();
                    })
                        .catch(function (error) {
                        console.log("hello");
                        console.error("Fetch error:", error);
                    })];
                case 1:
                    response = _a.sent();
                    data = response;
                    console.log(data);
                    //   console.log(data.forecast.forecastday[2].day.condition.icon);
                    currentdiv.innerHTML = "<div class=\"location\"> ".concat(data.location.name, ", ").concat(data.location.country, " </div><br>\n  <div id=\"condition\"> ").concat(data.current.condition.text, " </div><br>\n  <div id=\"temp\"> ").concat(data.current.temp_c, " \u00B0C</div><br>\n  <div id=\"ph\"> Pressure : ").concat(data.current.pressure_mb, " | Humidity : ").concat(data.current.humidity, " </div><br>\n  <hr><br>\n  <div id=\"rowlabel\"> Now </div><div id=\"rowlabel\"> ").concat(data.forecast.forecastday[1].date.substring(8, 10), " </div><div id=\"rowlabel\"> ").concat(data.forecast.forecastday[2].date.substring(8, 10), " </div><div id=\"rowlabel\"> ").concat(data.forecast.forecastday[3].date.substring(8, 10), " </div><div id=\"rowlabel\"> ").concat(data.forecast.forecastday[4].date.substring(8, 10), " </div><br>\n  <div id=\"rowlabel\"> ").concat(data.forecast.forecastday[0].day.maxtemp_c, "  </div><div id=\"rowlabel\"> ").concat(data.forecast.forecastday[1].day.maxtemp_c, " </div><div id=\"rowlabel\"> ").concat(data.forecast.forecastday[2].day.maxtemp_c, " </div><div id=\"rowlabel\"> ").concat(data.forecast.forecastday[3].day.maxtemp_c, " </div><div id=\"rowlabel\"> ").concat(data.forecast.forecastday[4].day.maxtemp_c, " </div><br>\n  <div id=\"rowlabel\"> ").concat(data.forecast.forecastday[0].day.mintemp_c, "  </div><div id=\"rowlabel\"> ").concat(data.forecast.forecastday[1].day.mintemp_c, " </div><div id=\"rowlabel\"> ").concat(data.forecast.forecastday[2].day.mintemp_c, " </div><div id=\"rowlabel\"> ").concat(data.forecast.forecastday[3].day.mintemp_c, " </div><div id=\"rowlabel\"> ").concat(data.forecast.forecastday[4].day.mintemp_c, " </div><br>\n  <img id =\"icon\" src=\"https:").concat(data.forecast.forecastday[0].day.condition.icon, " \"><img id =\"icon\" src= \"https:").concat(data.forecast.forecastday[1].day.condition.icon, "\" ><img id =\"icon\" src= \"https:").concat(data.forecast.forecastday[2].day.condition.icon, "\" ><img id =\"icon\" src= \"https:").concat(data.forecast.forecastday[3].day.condition.icon, "\" ><img id =\"icon\" src= \"https:").concat(data.forecast.forecastday[4].day.condition.icon, " \"><br>\n  <hr><br>\n  <div id=\"avglabel1\"> Today </div> <div id=\"avglabel2\">").concat(data.forecast.forecastday[0].day.avgtemp_c, "\u00B0  </div><br>\n  <div id=\"avglabel1\"> Tomorrow </div> <div id=\"avglabel2\">").concat(data.forecast.forecastday[1].day.avgtemp_c, "\u00B0  </div><br>\n  <div id=\"avglabel1\"> Day After Tomorrow </div> <div id=\"avglabel2\">").concat(data.forecast.forecastday[2].day.avgtemp_c, "\u00B0  </div>\n  ");
                    return [2 /*return*/];
            }
        });
    });
}
function weatherForecast() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (inputLocation.value === "")
                        return [2 /*return*/];
                    return [4 /*yield*/, forecasting(inputLocation.value)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function geoWeatherForecast() {
    return __awaiter(this, void 0, void 0, function () {
        var position, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, getLocation()];
                case 1:
                    position = _a.sent();
                    console.log(position);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error("Error:", error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
