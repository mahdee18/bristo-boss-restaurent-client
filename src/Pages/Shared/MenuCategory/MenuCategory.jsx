import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import Cover from '../Cover/Cover';
import {Link} from 'react-router-dom'

const MenuCategory = ({ items, img, title }) => {
    return (
        <section className='pt-8'>
            {
                title && <Cover
                    img={img}
                    title={title}

                ></Cover>
            }
            <div className='grid md:grid-cols-2 gap-10 my-16'>
                {
                    items.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                }

            </div>
            <Link to={`/order/${title}`}>
                <button className='btn btn-outline border-0 border-b-4'>Order Now</button>
            </Link>

        </section>
    );
};

export default MenuCategory;