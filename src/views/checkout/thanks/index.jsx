import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearBasket } from 'redux/actions/basketActions';
import { StepTracker } from '../components';


const Thanks = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearBasket());
  }, []);

  return (
    <div className="checkout">
      <StepTracker current={4} />
      <div className="checkout-step-2">
        <h2 className="text-center">Thanks for your purchase.</h2>
        <h2 className="text-center">
          You will receive a confirmation at
          {' +'}
          {profile.mobile.value}
        </h2>
      </div>
    </div>
  );
};

export default Thanks;
