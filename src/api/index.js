import { NovelCovid } from "novelcovid";

export const fetchData = async () => {
  const covid = await new NovelCovid();
  return covid.all();
};
export const fetchDataByCountry = async (country) => {
  const covid = await new NovelCovid();
  return covid.countries(country);
};
export const fetchCountries = async () => {
  const covid = await new NovelCovid();
  return covid.countryNames();
};
