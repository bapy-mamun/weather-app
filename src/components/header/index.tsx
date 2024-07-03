import React from "react";
import "./index.scss";
import { useTranslation } from "react-i18next";

type HeaderProps = {
  onSearch: (city: string) => void;
  onChangeLanguage: (lng: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onChangeLanguage }) => {
  const { t } = useTranslation();
  const [city, setCity] = React.useState("");

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <header className="c-header">
      <div className="c-header__logo">Weather App</div>
      <div className="c-header__controls">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder={t('searchPlaceholder')}
          className="c-header__input"
        />
        <button onClick={handleSearch} className="c-header__button">
          {t('search')}
        </button>
        <button
          onClick={() => onChangeLanguage("en")}
          className="c-header__button"
        >
          EN
        </button>
        <button
          onClick={() => onChangeLanguage("es")}
          className="c-header__button"
        >
          ES
        </button>
      </div>
    </header>
  );
};

export default Header;
