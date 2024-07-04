# WeatherApp

WeatherApp is a responsive web application that provides weather forecasts for different cities. It displays current weather conditions, temperature, humidity, and a 5-day forecast. The app also supports multiple languages and features a responsive design with a hamburger menu for smaller screens.

## Features

- Current weather conditions
- 5-day weather forecast
- Responsive design with a hamburger menu for smaller screens
- Language switcher (English and Spanish)
- Custom icons for date, temperature, humidity, and weather conditions

### Live App URL
```bash
https://weather-app-five-topaz.vercel.app/
```

## Technologies Used

- **React**: A JavaScript library for building user interfaces
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width="20" height="20" />
- **Vite**: A fast build tool and development server
  <img src="https://vitejs.dev/logo.svg" alt="Vite" width="20" height="20" />
- **TypeScript**: A typed superset of JavaScript
  <img src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" width="20" height="20" />
- **Redux Toolkit**: A library for managing application state
  <img src="https://redux-toolkit.js.org/img/redux-logo-landscape.png" alt="Redux Toolkit" width="20" height="20" />
- **react-i18next**: A library for internationalization
- **SCSS**: A CSS preprocessor for writing more maintainable styles
  <img src="https://user-images.githubusercontent.com/25181517/192158956-48192682-23d5-4bfc-9dfb-6511ade346bc.png" alt="SCSS" width="20" height="20" />

## Setup Instructions

Follow these steps to set up and run the WeatherApp on your local machine.

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/bapy-mamun/weather-app.git
```
2. **Install the dependencies:**
```bash
npm install
```
3. **Create a `.env` file in the root directory and put weather api key:**
```bash
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```
4. **Run the development server:**
```bash
npm run dev
```
5. **Run the unit test:**
```bash
npm run test
```
6. **Run the unit test coverage:**
```bash
npm run test:coverage
```

### Usage

1. **Search for a city:**

   Enter the name of a city in the search input and click the "Search" button. The app will display the current weather conditions and a 5-day forecast for the specified city.

2. **Change language:**

   Click the "English" or "Español" button to switch the language of the app.


### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API
- [React](https://reactjs.org/) for the UI library
- [Vite](https://vitejs.dev/) for the build tool and development server
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management
- [react-i18next](https://react.i18next.com/) for internationalization
