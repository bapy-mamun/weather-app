export type WeatherResponse = {
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
};

export type ForecastResponse = {
  list: {
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
