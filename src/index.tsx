import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { Setting } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <App
      cardsCount = {Setting.CardsCount}
    />
  </React.StrictMode>
);
