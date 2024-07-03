import Header from "./components/header";
import WeatherCard from "./components/weather-card";
import Footer from "./components/footer";
import ForecastCard from "./components/forecast-card";

function App() {
  return (
    <>
      <Header onSearch={() => {}} onChangeLanguage={() => {}} />
      <main >
        <WeatherCard temperature={23} humidity={30} description="Cloudy" />
        <ForecastCard forecast={[]} />
      </main>
      <Footer />
    </>
  );
}

export default App;
