import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularItem from '../PopularItem/PopularItem';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';
import Recommended from './Recommended/Recommended';
import { Helmet } from 'react-helmet-async';

const Home = () => {


    return (
        <div>
            <Helmet>
                <title>Bristo Boss | Home</title>
            </Helmet>

            <Banner></Banner>
            <div className='w-6/7 mx-auto'>
                <Category></Category>
                <PopularItem></PopularItem>
                <Recommended></Recommended>
                <Featured></Featured>
                <Testimonial></Testimonial>
            </div>

        </div>
    );
};

export default Home;