import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';

const FoodCard = ({ item }) => {
    const { user } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [, refetch] = useCart()
    const { name, recipe, image, price, _id } = item;
    const handleAddToCart = (item) => {
        if (user && user.email) {
            const cartItem = {
                menuItem: _id,
                name,
                recipe,
                image,
                price,
                email: user.email
            };
            fetch('http://localhost:3000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Your order added successfully!',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                });
        }

        else {
            Swal.fire({
                title: 'Please Login to order the food!!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <span className='absolute right-14 top-14 bg-slate-900 text-white px-2'>${price}</span>
            <div className="card-body flex flex-col items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className='my-2'>{recipe}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-slate-200 border-0 border-b-4 border-b-orange-600">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;