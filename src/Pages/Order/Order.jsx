import React from 'react';
import useMenu from '../../Hooks/useMenu';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from '../Shared/Cover/Cover';
import orderBg from '../../assets/shop/banner2.jpg'
import { useState } from 'react';
import OrderTab from './OrderTab/OrderTab';

import {useParams} from 'react-router-dom'

const Order = () => {
    const [menu] = useMenu();
    const categories = ['salad','pizza','soup','desert','drink']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    
    const drinksItem = menu.filter(item => item.category === 'drinks')
    const dessertItems = menu.filter(item => item.category === 'dessert')
    const pizzaItems = menu.filter(item => item.category === 'pizza')
    const saladItems = menu.filter(item => item.category === 'salad')
    const soupItems = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Cover img={orderBg} title={'Order Food'}></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drink</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={saladItems}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizzaItems}></OrderTab></TabPanel>
                <TabPanel>
                    <OrderTab items={soupItems}></OrderTab></TabPanel>
                <TabPanel>
                    <OrderTab items={dessertItems}></OrderTab></TabPanel>
                <TabPanel>
                    <OrderTab items={drinksItem}></OrderTab></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;