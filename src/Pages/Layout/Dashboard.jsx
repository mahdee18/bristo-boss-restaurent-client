import React from 'react';
import { FaCalendar, FaHamburger, FaHome, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../../Hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart()
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-base-content">

                    <li><NavLink to='/dashboard/userhome' ><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar> Reservation</NavLink></li>
                    <li><NavLink to='/dashboard/payment'><FaWallet></FaWallet>Payment History</NavLink></li>
                    <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart  <span className="badge badge-secondary">+{cart?.length || 0}</span>
                    </NavLink></li>
                    <div className='divider'></div>
                    <li><NavLink><FaHome></FaHome>Home</NavLink></li>
                    <NavLink to='/menu'><li><FaHamburger></FaHamburger>Menu</li></NavLink>
                    <NavLink to='/order/salad'><li>Order</li></NavLink>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;