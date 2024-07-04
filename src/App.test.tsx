/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import './lang/i18n';
import '@testing-library/jest-dom';

beforeEach(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

describe('App Component', () => {
  test('renders search input and button', () => {
    const buttonElement = screen.getByText(/search/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders weather card', async () => {
    const inputElement = screen.getByPlaceholderText(/search/i);
    fireEvent.change(inputElement, { target: { value: 'London' } });
    const buttonElement = screen.getByText(/search/i);
    fireEvent.click(buttonElement);
    const weatherCardTitle = await screen.findByTestId('weather-card-title');
    expect(weatherCardTitle).toBeInTheDocument();
  });

  test('switches language from English to Spanish', async () => {
    // Check initial language (English)
    const englishButton = await screen.findByTestId('en');
    expect(englishButton).toBeInTheDocument();
    fireEvent.click(englishButton);
    const weatherCardTitleEn = await screen.findByTestId('weather-card-title');
    expect(weatherCardTitleEn).toHaveTextContent(/weather/i);

    // Switch to Spanish
    const spanishButton = await screen.findByTestId('es');
    expect(spanishButton).toBeInTheDocument();
    fireEvent.click(spanishButton);
    const weatherCardTitleEs = await screen.findByTestId('weather-card-title');
    expect(weatherCardTitleEs).toHaveTextContent(/clima/i);
  });
});
