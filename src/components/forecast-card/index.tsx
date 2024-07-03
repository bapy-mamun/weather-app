import React from "react";
import "./index.scss";

type ForecastCardProps = {
  forecast: {
    dt_txt: string;
    main: {
      temp: number;
      humidity: number;
    };
    weather: {
      description: string;
    }[];
  }[];
};

const ForecastCard: React.FC<ForecastCardProps> = ({ forecast }) => {
  const dailyForecast = forecast
    .filter((entry) => entry.dt_txt.includes("12:00:00"))
    .slice(0, 5);

  return (
    <div className="c-forecast-card">
      <h2 className="c-forecast-card__title">5 Day Forecast</h2>
      {dailyForecast.map((day, index) => (
        <div key={`forecast-day-${index}`} className="c-forecast-card__day">
          <p>Date: {new Date(day.dt_txt).toLocaleDateString()}</p>
          <p>Temperature: {day.main.temp}°C</p>
          <p>Humidity: {day.main.humidity}%</p>
          <p>Conditions: {day.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
};

export default ForecastCard;
