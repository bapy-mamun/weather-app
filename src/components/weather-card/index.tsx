import './index.scss';
import { useTranslation } from 'react-i18next';
import { useGetWeatherQuery } from '../../store/weatherApi';

type WeatherCardProps = {
  searchBtnClicked: boolean;
  city: string;
};

const WeatherCard = ({ searchBtnClicked, city }: WeatherCardProps) => {
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
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {weatherIsError && <p>{(weatherError as any)?.data?.message}</p>}
      {!weatherIsError && weatherData && (
        <div className="c-weather-card">
          <h2>{t('title')}</h2>
          <p>
            {t('temperature')}: {weatherData?.main.temp}°C
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
