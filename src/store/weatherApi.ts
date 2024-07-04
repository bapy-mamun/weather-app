import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { WeatherResponse, ForecastResponse } from '@/types/weatherTypes';
import { FetchBaseQueryError, ErrorType } from '@/types/storeTypes';

const WEATHER_APP__API_KEY = import.meta.env.VITE_WEATHER_APP__API_KEY;

// Define a service using a base URL and expected endpoints
export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
  }),
  endpoints: (builder) => ({
    getWeather: builder.query<WeatherResponse, string>({
      query: (city) => `weather?q=${city}&appid=${WEATHER_APP__API_KEY}`,
      transformErrorResponse: ({
        status,
        data,
      }: FetchBaseQueryError): ErrorType => {
        return {
          status: status,
          data: {
            message: data?.message ?? '',
          },
        };
      },
    }),
    getForecast: builder.query<ForecastResponse, string>({
      query: (city) => `forecast?q=${city}&appid=${WEATHER_APP__API_KEY}`,
      transformResponse: (response: ForecastResponse) => {
        return {
          list: response.list,
        };
      },
    }),
  }),
});

export const { useGetWeatherQuery, useGetForecastQuery } = weatherApi;
