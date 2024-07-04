import React from 'react';
import './index.scss';
import { useTranslation } from 'react-i18next';
import { useGetWeatherQuery } from '../../store/weatherApi';
import { ErrorType } from '../../store/weatherApi';

type WeatherCardProps = {
  searchBtnClicked: boolean;
  city: string;
};

const WeatherCard: React.FC<WeatherCardProps> = ({
  searchBtnClicked,
  city,
}) => {
  const { t } = useTranslation();
  const {
    data: weatherData,
    isLoading: weatherIsLoading,
    isError: weatherIsError,
    error: weatherError,
  } = useGetWeatherQuery(city, {
    skip: !searchBtnClicked,
  });

  return (
    <>
      {weatherIsLoading && <p>Loading...</p>}
      {weatherIsError && <p>{(weatherError as ErrorType)?.data?.message}</p>}
      {!weatherIsError && weatherData && (
        <div className="c-weather-card">
          <h2 data-testid="weather-card-title">{t('title')}</h2>
          <p>
            {t('temperature')}: {(weatherData?.main.temp - 273.15).toFixed(2)}°C
          </p>
          <p>
            {t('humidity')}: {weatherData?.main.humidity}%
          </p>
          <p>
            {t('conditions')}: {weatherData?.weather[0].description}
          </p>
        </div>
      )}
    </>
  );
};

export default WeatherCard;
