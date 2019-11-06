import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceFOrStripe = price * 100;
    const publishableKey = 'pk_test_xJkm9uMmun4G58dEEFxlC36W001rRdNhNl'

    

export default StripeCheckoutButton;