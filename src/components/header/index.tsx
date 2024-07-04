import React from 'react';
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

  return (
    <header className="c-header">
      <div className="c-header__logo">Weather App</div>
      <div className="c-header__controls">
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
          onClick={() => setSearchBtnClicked((prev) => !prev)}
          className="c-header__button"
        >
          {t('search')}
        </button>
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
    </header>
  );
};

export default Header;
