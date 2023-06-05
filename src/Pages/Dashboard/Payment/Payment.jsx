import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import { Helmet } from 'react-helmet-async';

const Payment = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Payment</title>
            </Helmet>
            <SectionTitle subheading='Please Proceed' heading='Payment'></SectionTitle>
        </div>
    );
};

export default Payment;