/* eslint-disable react/forbid-prop-types */
import { Preloader } from 'components/common';
import PropType from 'prop-types';
import React, { StrictMode, useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppRouter from 'routers/AppRouter';
import firebase from 'services/firebase';
import twilioProducts from 'helpers/products';

const App = ({ store, persistor }) => {
  // Add products to Firebase if DB is not populated
  useEffect(() => {
    const fetchProducts = async () => {
      const { products } = await firebase.getProducts();

      if (products.length === 0) {
        console.log('Adding products to Firebase');

        twilioProducts.forEach(async (item) => {
          const id = firebase.generateKey();
          await firebase.addProduct(id, item);
        });
      }
    };

    fetchProducts();
  }, []);

  return (
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={<Preloader />} persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
    </StrictMode>
  );
};

App.propTypes = {
  store: PropType.any.isRequired,
  persistor: PropType.any.isRequired
};
export default App;
