import React from 'react';
const MenuItem = ({item}) => {
    const {name,recipe,image,price} = item;
    return (
        <div className='flex space-x-3'>
            <img src={image} style={{borderRadius:'0 200px 200px 200px'}} className='w-[100px]' alt="" />
            <div>
                <h3 className='uppercase'>{name}--------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'> ${price}</p>
        </div>
    );
};

export default MenuItem;