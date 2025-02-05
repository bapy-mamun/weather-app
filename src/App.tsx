import React, { useCallback, useState } from 'react';
import Header from './components/header';
import WeatherCard from './components/weather-card';
import Footer from './components/footer';
import ForecastCard from './components/forecast-card';
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
  const [searchBtnClicked, setSearchBtnClicked] = useState(true);
  const [city, setCity] = useState('Tokyo');
  const { i18n } = useTranslation();

  const onChangeCity = useCallback((city: string) => {
    setCity(city);
  }, []);

  const changeLanguage = useCallback(
    (lng: string) => {
      i18n.changeLanguage(lng);
    },
    [i18n]
  );

  return (
    <>
      <Header
        onChangeCity={onChangeCity}
        onChangeLanguage={changeLanguage}
        city={city}
        setSearchBtnClicked={setSearchBtnClicked}
      />
      <main>
        <WeatherCard searchBtnClicked={searchBtnClicked} city={city} />
        <ForecastCard searchBtnClicked={searchBtnClicked} city={city} />
      </main>
      <Footer />
    </>
  );
};

export default App;
