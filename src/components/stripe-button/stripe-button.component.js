import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HIsvDBRd3Ceexj54yKLro5yTLZXA8J43OC0hjHhxlGMmJ987am2V6aZHAXY6oFhXu2u8eOycf1gDp0nLnlHjgf800rGJHLgha'

const onToken = token =>{
        console.log(token)
        alert('Payment Successful');
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='React Training'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;