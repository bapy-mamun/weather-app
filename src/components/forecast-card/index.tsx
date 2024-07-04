import React from 'react';
import './index.scss';
import { useTranslation } from 'react-i18next';
import { useGetForecastQuery } from '../../store/weatherApi';
import { ForecastCardProps } from '../../types/weatherTypes';
import DateIcon from '../icon/date-icon';
import TemperatureIcon from '../icon/temperature-icon';
import HumidityIcon from '../icon/humidity-icon';
import ConditionIcon from '../icon/condition-icon';

const ForecastCard: React.FC<ForecastCardProps> = ({
  searchBtnClicked,
  city,
}) => {
  const { t } = useTranslation();
  const { data: forecastData, isError: isForecastDataError } =
    useGetForecastQuery(city, {
      skip: !searchBtnClicked,
    });
  const dailyForecast = forecastData?.list
    ?.filter((entry) => entry.dt_txt.includes('12:00:00'))
    .slice(0, 5);

  return (
    <>
      {!isForecastDataError && dailyForecast?.length && (
        <div className="c-forecast-card">
          <h2 className="c-forecast-card__title">{t('forecast')}</h2>
          <div className="c-forecast-card__days">
            {dailyForecast?.map((day, index) => (
              <div
                key={`forecast-day-${index}`}
                className="c-forecast-card__day"
              >
                <p className="c-forecast-card__date-item">
                  <DateIcon /> {new Date(day.dt_txt).toLocaleDateString()}
                </p>
                <p className="c-forecast-card__date-item">
                  <TemperatureIcon /> {(day.main.temp - 273.15).toFixed(2)}°C
                </p>
                <p className="c-forecast-card__date-item">
                  <HumidityIcon /> {day.main.humidity}%
                </p>
                <p className="c-forecast-card__date-item">
                  <ConditionIcon /> {day.weather[0].description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ForecastCard;
