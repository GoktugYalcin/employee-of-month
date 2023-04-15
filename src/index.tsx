import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {ApolloProvider} from "@apollo/client";
import client from "./Apollo/apollo";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <Provider store={store}>
            <App />
          </Provider>
      </ApolloProvider>
  </React.StrictMode>
);
