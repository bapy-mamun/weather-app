import Header from "./components/header";
import WeatherCard from "./components/weather-card";
import Footer from "./components/footer";
import ForecastCard from "./components/forecast-card";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  const handleSearch = () => {
    console.log('first')
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Header onSearch={handleSearch} onChangeLanguage={changeLanguage} />
      <main>
        <WeatherCard temperature={23} humidity={30} description="Cloudy" />
        <ForecastCard forecast={[]} />
      </main>
      <Footer />
    </>
  );
}

export default App;
