import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import featuredBg from '../../../assets/home/featured.jpg'
import './featured.css'
const Featured = () => {
    return (
        <section className='py-8 featured my-20 text-white bg-fixed'>
            <SectionTitle
            heading={'From Our Menu'}
            subheading={'---Check it Out---'}
            >
            </SectionTitle>
            <div className='md:flex py-16 justify-center items-center px-32 bg-black bg-opacity-30'>
                <div>
                    <img src={featuredBg} alt="" />
                </div>
                <div className='ml-14 '>
                    <p>March 20,2023</p>
                    <h2 className='uppercase text-lg my-2'>Where can I get some!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ad nemo accusantium blanditiis excepturi. Reprehenderit nulla odit dolorem reiciendis, neque adipisci repellat quas eaque ullam, dolor numquam et optio. Eaque provident labore magnam, quidem enim nostrum molestiae maiores sapiente asperiores dolorum delectus, tempore accusantium aliquam aspernatur. Ratione ex voluptatum voluptate!</p>
                    <button className='btn btn-outline border-0 border-b-4 text-white'>Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;