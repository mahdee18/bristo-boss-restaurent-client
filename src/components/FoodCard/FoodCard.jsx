import React from 'react';

const FoodCard = ({item}) => {
    const {name,recipe,image,price} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <span className='absolute right-14 top-14 bg-slate-900 text-white px-2'>${price}</span>
            <div className="card-body flex flex-col items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className='my-2'>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-outline bg-slate-200 border-0 border-b-4 border-b-orange-600">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;