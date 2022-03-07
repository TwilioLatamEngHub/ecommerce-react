import firebase from 'services/firebase';
import twilioProducts from 'helpers/products';
import { useState } from 'react';

const usePopulateDB = () => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    const { products } = await firebase.getProducts();

    if (products.length === 0) {
      setIsLoading(true);

      const promises = twilioProducts.map(async (item) => {
        const id = firebase.generateKey();
        return firebase.addProduct(id, item);
      });

      await Promise.all(promises);
      setIsLoading(false);
      window.location.reload();
    }
  };

  return { isLoading, fetchProducts };
};

export default usePopulateDB;
