import { ArrowLeftOutlined, LoadingOutlined } from '@ant-design/icons';
import { ImageLoader, MessageDisplay } from 'components/common';
import { ProductShowcaseGrid } from 'components/product';
import { RECOMMENDED_PRODUCTS, SHOP } from 'constants/routes';
import { displayMoney } from 'helpers/utils';
import {
  useBasket,
  useDocumentTitle,
  useProduct,
  useRecommendedProducts,
  useScrollTop
} from 'hooks';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Select from 'react-select';

const ViewProduct = () => {
  const { id } = useParams();
  const { product, isLoading, error } = useProduct(id);

  const { addToBasket, isItemOnBasket } = useBasket(id);
  useScrollTop();
  useDocumentTitle(`View ${product?.name || 'Item'}`);

  const [selectedImage, setSelectedImage] = useState(product?.image || '');
  const [selectedSize, setSelectedSize] = useState('');

  const {
    recommendedProducts,
    fetchRecommendedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured
  } = useRecommendedProducts(6);

  useEffect(() => {
    setSelectedImage(product?.image);
  }, [product]);

  const onSelectedSizeChange = (newValue) => {
    setSelectedSize(newValue.value);
  };

  const handleAddToBasket = () => {
    addToBasket({ ...product, selectedSize: selectedSize || product.sizes[0] });
  };

  return (
    <main className="content">
      {isLoading && (
        <div className="loader">
          <h4>Loading Product...</h4>
          <br />
          <LoadingOutlined style={{ fontSize: '3rem' }} />
        </div>
      )}
      {error && (
        <MessageDisplay message={error} />
      )}
      {(product && !isLoading) && (
        <div className="product-view">
          <Link to={SHOP}>
            <h3 className="button-link d-inline-flex">
              <ArrowLeftOutlined />
              &nbsp; Back to shop
            </h3>
          </Link>
          <div className="product-modal">
            <div className="product-modal-image-wrapper">
              <ImageLoader
                alt={product.name}
                className="product-modal-image"
                src={selectedImage}
              />
            </div>
            <div className="product-modal-details">
              <br />
              <span className="text-subtle">{product.brand}</span>
              <h1 className="margin-top-0">{product.name}</h1>
              <span>{product.description}</span>
              <br />
              <br />
              <div className="divider" />
              <br />
              <div type="">
                <Select
                  placeholder="--Select Size--"
                  onChange={onSelectedSizeChange}
                  // TODO: Fix sizes shortcuts such as cm, ml, etc
                  options={product.sizes.map((size) => ({ label: size, value: size }))}
                  styles={{ menu: (provided) => ({ ...provided, zIndex: 10 }) }}
                />
              </div>
              <br />
              <h1>{displayMoney(product.price)}</h1>
              <div className="product-modal-action">
                <button
                  className={`button button-small ${isItemOnBasket(product.id) ? 'button-border button-border-gray' : ''}`}
                  onClick={handleAddToBasket}
                  type="button"
                >
                  {isItemOnBasket(product.id) ? 'Remove From Basket' : 'Add To Basket'}
                </button>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '10rem' }}>
            <div className="display-header">
              <h1>Recommended</h1>
              <Link to={RECOMMENDED_PRODUCTS}>See All</Link>
            </div>
            {errorFeatured && !isLoadingFeatured ? (
              <MessageDisplay
                message={error}
                action={fetchRecommendedProducts}
                buttonLabel="Try Again"
              />
            ) : (
              <ProductShowcaseGrid products={recommendedProducts} skeletonCount={3} />
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default ViewProduct;
