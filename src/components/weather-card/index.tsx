import "./index.scss";

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
  return (
    <div className="c-weather-card">
      <h2>Current Weather</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Humidity: {humidity}%</p>
      <p>Conditions: {description}</p>
    </div>
  );
};

export default WeatherCard;
