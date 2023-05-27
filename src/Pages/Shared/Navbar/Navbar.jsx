
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navItem = <>
        <Link to='/'><li><a>Home</a></li></Link>
        <Link to='/contact-us'><li><a>Contact Us</a></li></Link>
        <Link to='/dashboard'><li><a>Dashboard</a></li></Link>
        <Link to='/menu'><li><a>Menu</a></li></Link>
        <Link to='/order/salad'><li><a>Order</a></li></Link>
        <Link to='/shop'><li><a>Our Shop</a></li></Link>
        <Link to='/login'><li><a>Login</a></li></Link>
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-25 bg-black text-white max-w-6xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bristo Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Navbar;