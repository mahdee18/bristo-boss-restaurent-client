import React from 'react';
import { FaBook, FaCalendar, FaHamburger, FaHome, FaShoppingCart, FaUser, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart()
    const [isAdmin] = useAdmin();
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-base-content">
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to='/dashboard/adminhome' ><FaHome></FaHome>Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/manageitems'><FaWallet></FaWallet>Manage Items</NavLink></li>
                                <li><NavLink to='/dashboard/additems'><FaUtensils></FaUtensils>Add An Items</NavLink></li>
                                <li><NavLink to='/dashboard/payment'><FaBook></FaBook> Manage Bookings</NavLink></li>
                                <li><NavLink to='/dashboard/allusers'><FaUsers></FaUsers> All Users</NavLink></li>
                            </>
                            : <>
                                <li><NavLink to='/dashboard/userhome' ><FaHome></FaHome>User Home</NavLink></li>
                                <li><NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar> Reservation</NavLink></li>
                                <li><NavLink to='/dashboard/payment'><FaWallet></FaWallet>Payment History</NavLink></li>
                                <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart  <span className="badge badge-secondary">+{cart?.length || 0}</span>
                                </NavLink></li>
                            </>
                    }

                    <div className='divider'></div>
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    <NavLink to='/menu'><li><FaHamburger></FaHamburger>Menu</li></NavLink>
                    <NavLink to='/order/salad'><li>Order</li></NavLink>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;