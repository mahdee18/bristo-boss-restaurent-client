import React from 'react';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
import SectionTitle from '../../../components/SectionTitle';

const Category = () => {
    return (
        <section className='my-10'>
            <SectionTitle
                subheading={'Order Online'}
                heading={'From 11:00am to 10:00pm'}
            >

            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} />
                    <h2 className='text-white text-4xl text-center -mt-16 uppercase'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} />
                    <h2 className='text-white text-4xl text-center -mt-16 uppercase'>Pizzas</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} />
                    <h2 className='text-white text-4xl text-center -mt-16 uppercase'>Soup</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} />
                    <h2 className='text-white text-4xl text-center -mt-16 uppercase'>Desert</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} />
                    <h2 className='text-white text-4xl text-center -mt-16 uppercase'>Salads</h2>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;