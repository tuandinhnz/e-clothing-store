import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HQ2dED3zx2HsI9EYfAK5mToJQbGbwFvjkUkdk4OW8Xg6nfmZ1NTfvMRxurcndAQkYKohQdcvomEXNEHbI3g8zrG00x4xLda1u';

  const onToken = (token) => {
    console.log(token);

    const response = axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment Successful');
      })
      .catch((error) => {
        console.log('Payment error: ', JSON.parse(error));
        alert(
          'There was an issue with your payment. Please ensure you use the provided test credit card'
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Absolute Fashion Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total amount is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
