import React, { useState, useEffect } from "react";
import { CountryPicker, Cards, Chart, Footer, Loader } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchData, fetchDataByCountry, fetchCountries } from "./api";

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("world");
  const [countries, setCountries] = useState([]);

  const handleCountry = (_country) => {
    setCountry(String(_country).toLowerCase());
  };

  const fetchCoronaData = async (_country) => {
    const tempData =
      _country === "world"
        ? await fetchData()
        : await fetchDataByCountry(_country);
    const { cases, recovered, deaths } = tempData;
    setData({
      cases,
      recovered,
      deaths,
    });
  };

  const fetchCountriesInfo = async () => {
    const tempData = await fetchCountries();
    setCountries(tempData);
  };

  useEffect(() => {
    fetchCountriesInfo();
    fetchCoronaData(country);
  }, [country]);

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Covid-19 Live trackers</h1>
        <p className="lead">Special thanks to the doctors.</p>
        <hr className="my-4" />
        <p>According to {new Date().toDateString()}</p>
        <h1>{String(country).charAt(0).toUpperCase() + String(country).slice(1)}</h1>
      </div>
      {!data.cases ? (
        <Loader />
      ) : (
        <>
          <CountryPicker countries={countries} handleCountry={handleCountry} />
          <Cards data={data} />
          <Chart country={country} data={data} />
        </>
      )}
      <Footer />
    </div>
  );
};
export default App;
