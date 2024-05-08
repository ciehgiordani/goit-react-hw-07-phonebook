import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // in order to pass the store to all components that will use the data from the store
import { store } from './redux/store';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* Provider - a component that transfers the store to all components that will use data from the store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

