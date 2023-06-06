import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';

const PaymentForm = ({price}) => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardError,setCardError] = useState('')
    const handleSubmit = async(event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if(card === null){
            return
        }
        console.log('Card',card)
        const {error,paymentMethod}= await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if(error){
            setCardError(error.message)
            console.error('Error', error)
        }
        else{
            setCardError('')
            console.log('Payment Method', paymentMethod)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-outline btn-sm' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-700 ml-10'>{cardError}</p>
            }
        </div>
    );
};

export default PaymentForm;