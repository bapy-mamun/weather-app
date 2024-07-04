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

export type WeatherCardProps = {
  searchBtnClicked: boolean;
  city: string;
};

export type ForecastCardProps = {
  searchBtnClicked: boolean;
  city: string;
};

export type HeaderProps = {
  onChangeCity: (city: string) => void;
  onChangeLanguage: (lng: string) => void;
  setSearchBtnClicked: React.Dispatch<React.SetStateAction<boolean>>;
  city: string;
};
