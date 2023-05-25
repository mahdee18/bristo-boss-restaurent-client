import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopularItem = () => {
const [menu] =  useMenu();
const popularItems = menu.filter(item=>item.category === 'popular')
    return (
        <section className='my-4'>
            <SectionTitle
                heading={'From Our Menu'}
                subheading={'Popular Items'}
            >

            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popularItems.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                }

            </div>
            <div className='text-center mt-10'>
                <button className='btn btn-outline border-0 border-b-4 text-yellow-700'>View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularItem;