import React from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import img1 from '../../../../assets/home/slide1.jpg'
import img2 from '../../../../assets/home/slide2.jpg'
import img3 from '../../../../assets/home/slide3.jpg'

const Recommended = () => {
    return (
        <div>
            <SectionTitle
                heading={'Chef Recommend'}
                subheading={'Should try'}
            ></SectionTitle>

            <div className='grid md:grid-cols-3 gap-10'>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl w-[400px] h-[220px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                        <button className='btn btn-outline border-0 border-b-4 text-yellow-600'>Order Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl w-[400px] h-[220px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                        <button className='btn btn-outline border-0 border-b-4 text-yellow-600'>Order Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl w-[400px] h-[220px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                        <button className='btn btn-outline border-0 border-b-4 text-yellow-600'>Order Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Recommended;