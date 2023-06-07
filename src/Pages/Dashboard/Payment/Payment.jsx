import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import { Helmet } from 'react-helmet-async';
import PaymentForm from './PaymentForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../../Hooks/useCart';

const Payment = () => {
    const [cart] = useCart()
    const total = cart.reduce((sum,item)=> sum+item.price,0);
    const price = parseFloat(total.toFixed(2))
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
    console.log(stripePromise);
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Payment</title>
            </Helmet>
            <SectionTitle subheading='Please Proceed' heading='Payment'></SectionTitle>
            <Elements stripe={stripePromise}>

            <PaymentForm cart={cart} price={price} ></PaymentForm>
            </Elements>
        </div>
    );
};

export default Payment;