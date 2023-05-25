import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Testimonial = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <section>
            <SectionTitle
                subheading={'What our client say'}
                heading={'Tesimonial'}
            >
            </SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    review.map(item => <SwiperSlide key={item._id}>
                        <div className='mx-24 py-14 flex flex-col items-center'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={item.rating}
                                readOnly
                            />
                            <p className='py-4'>{item.details}</p>
                            <h4 className='text-yellow-600 text-2xl'>{item.name}</h4>
                        </div>
                    </SwiperSlide>)
                }


            </Swiper>
        </section>
    );
};

export default Testimonial;