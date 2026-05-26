import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { store } from './redux/store.js';
import './styles/variables.css';
import './styles/global.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/dashboard.css';
import './styles/cards.css';
import './styles/footer.css';
import './styles/responsive.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
