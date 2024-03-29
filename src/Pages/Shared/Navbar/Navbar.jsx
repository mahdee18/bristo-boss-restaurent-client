import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../Hooks/useCart';
import useAdmin from '../../../Hooks/useAdmin';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart()
    const [isAdmin] = useAdmin()
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.error(error.message)
            })
    }
    const navItem = <>
        <Link to='/'><li><a>Home</a></li></Link>
        <Link to='/menu'><li><a>Menu</a></li></Link>
        <Link to='/order/salad'><li><a>Order</a></li></Link>
        <Link to='/order/salad'><li><a>Our Shop</a></li></Link>
        {
            isAdmin ? <Link to='/dashboard/adminhome'><li><a>Dashboard</a></li></Link> :
                user ? <Link to='/dashboard/userhome'><li><a>Dashboard</a></li></Link> : " "
        }
        {
            user ? <Link to='/dashboard/mycart'>
                <button className="btn gap-2">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>

            </Link> : ""
        }
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-25 bg-black text-white mx-auto">
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
                {
                    user ?
                        <>
                            <span>{user?.displayName}</span>
                            <button onClick={handleLogOut} className='btn btn-ghost'>Log Out</button></> :
                        <><Link to='/login' className='btn btn-ghost'>Login</Link></>
                }
            </div>
        </div>
    );
};

export default Navbar;