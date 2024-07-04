import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { WeatherResponse, ForecastResponse } from '@/types/weatherTypes';

const WEATHER_APP__API_KEY = '7f600e164311cccca44198772374fe30';

// Define a service using a base URL and expected endpoints
export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
  }),
  endpoints: (builder) => ({
    getWeather: builder.query<WeatherResponse, string>({
      query: (city) => `weather?q=${city}&appid=${WEATHER_APP__API_KEY}`,
    }),
    getForecast: builder.query<ForecastResponse, string>({
      query: (city) => `forecast?q=${city}&appid=${WEATHER_APP__API_KEY}`,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transformResponse: (response: any) => {
        return {
          list: response.list,
        };
      },
    }),
  }),
});

export const { useGetWeatherQuery, useGetForecastQuery } = weatherApi;
