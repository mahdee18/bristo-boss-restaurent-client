import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import Cover from '../Cover/Cover';

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
        </section>
    );
};

export default MenuCategory;