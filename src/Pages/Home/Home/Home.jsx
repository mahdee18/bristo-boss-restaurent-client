import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularItem from '../PopularItem/PopularItem';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';
import Recommended from './Recommended/Recommended';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularItem></PopularItem>
            <Recommended></Recommended>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;