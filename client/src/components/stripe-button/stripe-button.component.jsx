import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51Hvde7JDUf4u5jXlnqdi7bagZiEQ6Cg0JMfddzUYJdhRk0P7rd361hlJviHprpKGwR4lwk2YXyuTvM6tm4EwBTCl00omuJyplG';

  const onToken = async (token) => {
    try {
      const response = await axios({
        url: 'payment',
        method: 'post',
        data: {
          amount: priceForStripe,
          token,
        },
      });

      console.log('Payment Successful', response);
    } catch (error) {
      console.log('Payment Failed: ', error);
      alert(
        'There was an issue with your payment. Please sure you use the provided credit card'
      );
    }
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      description={`Your total price is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
