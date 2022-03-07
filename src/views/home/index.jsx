import { ArrowRightOutlined } from '@ant-design/icons';
import { MessageDisplay, Preloader } from 'components/common';
import { ProductShowcaseGrid } from 'components/product';
import { FEATURED_PRODUCTS, RECOMMENDED_PRODUCTS, SHOP } from 'constants/routes';
import {
  useDocumentTitle, useFeaturedProducts, useRecommendedProducts, useScrollTop
} from 'hooks';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'services/firebase';
import twilioProducts from 'helpers/products';


const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  useDocumentTitle('Twilio Store | Home');
  useScrollTop();

  // Add products to Firebase if DB is not populated
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);

      const { products } = await firebase.getProducts();

      if (products.length === 0) {
        const promises = twilioProducts.map(async (item) => {
          const id = firebase.generateKey();
          return firebase.addProduct(id, item);
        });

        await Promise.all(promises);
        setIsLoading(false);
        window.location.reload();
      }

      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured
  } = useFeaturedProducts(6);
  const {
    recommendedProducts,
    fetchRecommendedProducts,
    isLoading: isLoadingRecommended,
    error: errorRecommended
  } = useRecommendedProducts(6);

  return (
    <>
      {isLoading
        ? <Preloader />
        : (
          <main className="content">
            <div className="home">
              <div className="banner">
                <div className="banner-desc">
                  <h1 className="text-thin">Twilio Store</h1>
                  <p>
                    Every swag ever made for Twilions now available for you!
                  </p>
                  <br />
                  <Link to={SHOP} className="button">
                    Shop Now &nbsp;
                    <ArrowRightOutlined />
                  </Link>
                </div>
              </div>
              <div className="display">
                <div className="display-header">
                  <h1>Featured Products</h1>
                  <Link to={FEATURED_PRODUCTS}>See All</Link>
                </div>
                {(errorFeatured && !isLoadingFeatured) ? (
                  <MessageDisplay
                    message={errorFeatured}
                    action={fetchFeaturedProducts}
                    buttonLabel="Try Again"
                  />
                ) : (
                  <ProductShowcaseGrid
                    products={featuredProducts}
                    skeletonCount={1}
                  />
                )}
              </div>
              <div className="display">
                <div className="display-header">
                  <h1>Recommended Products</h1>
                  <Link to={RECOMMENDED_PRODUCTS}>See All</Link>
                </div>
                {(errorRecommended && !isLoadingRecommended) ? (
                  <MessageDisplay
                    message={errorRecommended}
                    action={fetchRecommendedProducts}
                    buttonLabel="Try Again"
                  />
                ) : (
                  <ProductShowcaseGrid
                    products={recommendedProducts}
                    skeletonCount={1}
                  />
                )}
              </div>
            </div>
          </main>
        )}
    </>
  );
};

export default Home;
