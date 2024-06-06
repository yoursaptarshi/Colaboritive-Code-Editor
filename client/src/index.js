import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import Store from "./Store"
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript initialColorMode='dark'  />
    <Provider store={Store}>
    <App />
    </Provider>
  </StrictMode>
);

