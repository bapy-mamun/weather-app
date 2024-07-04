import React from 'react';
import './index.scss';
import { useTranslation } from 'react-i18next';
import { useGetWeatherQuery } from '../../store/weatherApi';
import { ErrorType } from '../../types/storeTypes';
import { WeatherCardProps } from '../../types/weatherTypes';
import DateIcon from '../icon/date-icon';
import HumidityIcon from '../icon/humidity-icon';
import ConditionIcon from '../icon/condition-icon';
import LoadingSkeleton from '../loading-skeleton';

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
      {weatherIsLoading && <LoadingSkeleton />}
      {weatherIsError && (
        <div className="c-weather-card__error">
          {(weatherError as ErrorType)?.data?.message}
        </div>
      )}
      {!weatherIsError && weatherData && (
        <div className="c-weather-card">
          <h2 data-testid="weather-card-title">{t('title')}</h2>
          <h3 className="c-weather-card__title">{city}</h3>
          <p className="c-weather-card__item">
            <DateIcon /> {(weatherData?.main.temp - 273.15).toFixed(2)}°C
          </p>
          <p className="c-weather-card__item">
            <HumidityIcon /> {weatherData?.main.humidity}%
          </p>
          <p className="c-weather-card__item">
            <ConditionIcon /> {weatherData?.weather[0].description}
          </p>
        </div>
      )}
    </>
  );
};

export default WeatherCard;
