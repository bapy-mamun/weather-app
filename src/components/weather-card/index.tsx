import './index.scss';
import { useTranslation } from 'react-i18next';

type WeatherCardProps = {
  temperature: number;
  humidity: number;
  description: string;
};

const WeatherCard = ({
  temperature,
  humidity,
  description,
}: WeatherCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="c-weather-card">
      <h2>{t('title')}</h2>
      <p>
        {t('temperature')}: {temperature}°C
      </p>
      <p>
        {t('humidity')}: {humidity}%
      </p>
      <p>
        {t('conditions')}: {description}
      </p>
    </div>
  );
};

export default WeatherCard;
