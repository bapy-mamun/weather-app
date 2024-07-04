import React, { useEffect, useState } from 'react';
import './index.scss';
import { useTranslation } from 'react-i18next';
import { HeaderProps } from '../../types/weatherTypes';

const Header: React.FC<HeaderProps> = ({
  onChangeCity,
  onChangeLanguage,
  setSearchBtnClicked,
  city,
}) => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="c-header">
      <div className="c-header__logo">Weather App</div>
      <div className="c-header__hamburger" onClick={toggleMenu}>
        <span className={`bar ${menuOpen ? 'bar1' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'bar2' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'bar3' : ''}`}></span>
      </div>
      <div className={`c-header__controls ${menuOpen ? 'open' : ''}`}>
        <div className="c-header__controls-search">
          <input
            type="text"
            value={city}
            onChange={(e) => {
              onChangeCity(e.target.value);
              setSearchBtnClicked(false);
            }}
            placeholder={t('searchPlaceholder')}
            className="c-header__input"
          />
          <button
            onClick={() => {
              setSearchBtnClicked((prev) => !prev);
              setMenuOpen(false);
            }}
            className="c-header__button"
          >
            {t('search')}
          </button>
        </div>
        <div className="c-header__controls-language">
          <button
            onClick={() => onChangeLanguage('en')}
            className="c-header__button"
            data-testid="en"
          >
            EN
          </button>
          <button
            onClick={() => onChangeLanguage('es')}
            className="c-header__button"
            data-testid="es"
          >
            ES
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
