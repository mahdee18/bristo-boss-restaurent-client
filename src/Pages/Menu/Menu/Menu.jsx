import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import bgImg from '../../../assets/menu/banner3.jpg'
import dessertBg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../../assets/menu/pizza-bg.jpg'
import saladBg from '../../../assets/menu/salad-bg.jpg'
import soupBg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../Hooks/useMenu';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle';
import MenuCategory from '../../Shared/MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();

    const offeredItems = menu.filter(item => item.category === 'offered')
    const dessertItems = menu.filter(item => item.category === 'dessert')
    const pizzaItems = menu.filter(item => item.category === 'pizza')
    const saladItems = menu.filter(item => item.category === 'salad')
    const soupItems = menu.filter(item => item.category === 'soups')


    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover
            img={bgImg}
            title='Our Menu'
            ></Cover>
            <SectionTitle
            subheading='Do not Miss'
            heading='TODAYS OFFER'
            ></SectionTitle>
            {/* Offered Items */}
            <MenuCategory
            items={offeredItems}
            ></MenuCategory>

            {/* Dessert Item */}
            <MenuCategory 
            items={dessertItems}
            img={dessertBg}
            title={'DESSERT'}
            ></MenuCategory>

            {/* Pizza Item */}
            <MenuCategory 
            items={pizzaItems}
            title={'PIZZA'}
            img={pizzaBg}
            ></MenuCategory>

            {/* Salad Item */}
            <MenuCategory 
            items={saladItems}
            title={'SALAD'}
            img={saladBg}
            ></MenuCategory>

            {/* Soup Item */}
            <MenuCategory 
            items={soupItems}
            title={'Soup'}
            img={soupBg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;