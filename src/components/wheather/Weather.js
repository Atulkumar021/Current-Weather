import React, { useState } from "react";
import "./Weather.css";
import Mainwheather from "../../assets/img/main-weather-bg.png";
import Hghlightbg from "../../assets/img/highlight-bg.png";
import Windicon from "../../assets/img/wind-icon.png";
import Sunset from "../../assets/img/sunset.svg";
import Humidityicon from "../../assets/img/humidity-ico.svg";
import Feelsicon from "../../assets/img/feels-ico.svg";
import Visibilityicon from "../../assets/img/visibility-ico.svg";
import Sunrisesvg from "../../assets/img/sunrise.svg";

const Weather = ({ handlechange, city, data }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className={isDarkTheme ? "main dark-theme" : "main light-theme"}>
      <div className="container-fluid">
        <header>
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-8 d-flex align-items-center">
           
              <div className= {isDarkTheme ? "main dark-theme city text-white" : "main light-theme city text-dark"}>
              
                <i className={isDarkTheme ? "fa-solid fa-location-dot fa-xl text-white" : "fa-solid fa-location-dot fa-xl text-dark"}></i>
                <span className="d-inline-block ms-2" id="cityn">
                  {data?.location?.name}
                </span>
                ,
                <em className="opacity-50 ms-2" id="country">
                  {data?.location?.country}
                </em>
              </div>
              <div className="search text-white flex-grow-1">
                <input
                  type="search"
                  name="search-city"
                  id="search-city"
                  className="form-control"
                  value={city}
                  onChange={handlechange}
                  placeholder="Search the city pls "
                />
              </div>
              <div className="search2 text-white" id="button">
                <i className="fa-solid fa-magnifying-glass fa-xl"></i>
              </div>
              <i
                className={`fa-xl ms-3 cursor-pointer ${
                  isDarkTheme ? "fa-regular fa-sun" : "fa-solid fa-moon"
                }`}
                onClick={toggleTheme}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
          </div>
        </header>
        <div className="section">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="weather-slid">
                <img src={Mainwheather} alt="Wheather" className="main-img" />
                <div className="search-date text-center">
                  <p>
                    <em className="date me-2" id="date">
                      {data?.current?.last_updated}
                    </em>
                  </p>
                </div>
                <div className="d-flex mt-5 justify-content-center">
                  <div className="weather-img p-0 text-center">
                    <img
                      src={data?.current?.condition?.icon}
                      alt="Thunderstorm"
                      className="img2"
                      id="weatherimg"
                    />
                  </div>
                </div>
                <div className="d-flex mt-3 justify-content-between align-items-center">
                  <div className="weather-temp pb-3 d-flex align-items-start">
                    <p className="temp" id="temp">
                      {data?.current?.temp_c}
                    </p>
                    <div className="cal">
                      <span>C</span>
                    </div>
                  </div>
                  <div className="quality">
                    <label htmlFor="" className="lab1">
                      Air Quality
                    </label>
                    <p className="mb-0 d-flex p2 align-items-center">
                      <span
                        className="a-color me-2"
                        style={{ backgroundColor: "red" }}
                        id="AQIcolor"
                      ></span>
                      <span id="air-quality">{data?.current?.windchill_c}</span>
                    </p>
                  </div>
                </div>
                <div className="weather-type pt-2">
                  <img
                    src={data?.current?.condition?.icon}
                    alt="Thunderstorm"
                    height="35"
                  />
                  {data?.current?.condition?.text}
                </div>
                <div className="air-quality-value">
                  <p>Air Quality Index Value</p>
                  <div className="row">
                    <div className="col-sm-6 indexs d-flex justify-content-between">
                      <div>
                        <span
                          className="color"
                          style={{ backgroundColor: "#6bdf4e" }}
                        ></span>
                        <span className="value">Good</span>
                      </div>
                      <span className="index"> 0-20 </span>
                    </div>
                    <div className="col-sm-6 indexs d-flex justify-content-between">
                      <div>
                        <span
                          className="color"
                          style={{ backgroundColor: "yellow" }}
                        ></span>
                        <span className="value">Fair</span>
                      </div>
                      <span className="index"> 20-80 </span>
                    </div>
                    <div className="col-sm-6 indexs d-flex justify-content-between">
                      <div>
                        <span
                          className="color"
                          style={{ backgroundColor: "#ffa023" }}
                        ></span>
                        <span className="value">Modrate</span>
                      </div>
                      <span className="index"> 80-250 </span>
                    </div>
                    <div className="col-sm-6 indexs d-flex justify-content-between">
                      <div>
                        <span
                          className="color"
                          style={{ backgroundColor: "#cd5f00" }}
                        ></span>
                        <span className="value">Poor</span>
                      </div>
                      <span className="index"> 250-350 </span>
                    </div>
                    <div className="col-sm-6 indexs d-flex justify-content-between">
                      <div>
                        <span
                          className="color"
                          style={{ backgroundColor: "#c60000" }}
                        ></span>
                        <span className="value">Very Poor</span>
                      </div>
                      <span className="index"> 350-500 </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="main-light">
                <img src={Hghlightbg} alt="Highlightbg" className="main-img" />
                <h6>Trend</h6>
                <div className="highlight-box">
                  <div className="row g-3">
                    <div className="col-xl-4">
                      <div className="trend">
                        <h5>Wind Status</h5>
                        <div className="style">
                          <img
                            src={Windicon}
                            alt="windicon"
                            className="img-fluid"
                          />
                          <div className="text-center">
                            <div className="windtype">
                              {data?.current?.wind_dir} -{data?.current?.wind_degree}
                            </div>
                            <div className="common">
                              <div className="d-flex justify-content-center">
                                <p id="wind">{data?.current?.wind_mph}</p>
                                <p>
                                  <em className="em">km/h</em>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="trend">
                        <h5 className="h51">Uv Index</h5>
                        <div className="uv-index d-flex align-items-center justify-content-center flex-column">
                          <div className="circle-box">
                            <div className="circle-out">
                              <div className="text">
                                <span className="span1">0</span>
                                <span className="span1">2</span>
                                <span className="span1">4</span>
                                <span className="span1">6</span>
                                <span className="span1">8</span>
                                <span className="span1">10</span>
                                <span className="span1">12</span>
                              </div>
                            </div>
                            <div className="circle-in">
                              <div className="circle" id="bar"></div>
                            </div>
                          </div>
                          <div className="common d-flex justify-content-center p-0 text-center">
                            <div className="d-flex align-items-start">
                              <p className="p3 mb-0" id="uv">
                                {data?.current?.uv}
                              </p>
                              <span>
                                <em className="em">UV</em>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="trend">
                        <h5 className="h51">Sunrise & Sunset</h5>
                        <div className="uv-index sunrise-set d-flex align-items-center justify-content-center flex-column">
                          <div className="circle-box">
                            <div className="circle-out"></div>
                            <div className="circle-in">
                              <div className="circle" id="bar"></div>
                            </div>
                          </div>
                          <div className="sun-dealits">
                            <div className="sun-box d-flex justify-content-between">
                              <div className="sun-time text-start">
                                <img src={Sunrisesvg} alt="sunrise" />
                                <span className="spn2">Sunrise</span>
                                <p className="mb-0">05:50 AM</p>
                              </div>
                              <div className="sun-time text-end">
                                <img src={Sunset} alt="sunset" />
                                <span className="spn2">Sunset</span>
                                <p className="mb-0">05:50 PM</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="trend short p-4 pb-3">
                        <h5>Humidity</h5>
                        <div className="highlight-value d-flex justify-content-between">
                          <div className="d-flex align-items-start">
                            <p id="humidity">{data?.current?.humidity}</p>
                            <p>
                              <em className=" ">%</em>
                            </p>
                          </div>
                          <img src={Humidityicon} alt="Humidityicon" />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="trend short p-4 pb-3">
                        <h5>Visibility</h5>
                        <div className="highlight-value d-flex justify-content-between">
                          <div className="d-flex align-items-start">
                            <p id="visibility">{data?.current?.vis_km}</p>
                            <p>
                              <em>km || Miles</em>
                            </p>
                          </div>
                          <img src={Visibilityicon} alt="Visibilityicon" />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="trend short p-4 pb-3">
                        <h5>Feels like</h5>
                        <div className="highlight-value d-flex justify-content-between">
                          <div className="d-flex align-items-start">
                            <p id="feellike">{data?.current?.feelslike_c}</p>
                            <em className=" ">°</em>
                            <span className="spn3">C</span>
                          </div>
                          <img src={Feelsicon} alt="Feelsicon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
