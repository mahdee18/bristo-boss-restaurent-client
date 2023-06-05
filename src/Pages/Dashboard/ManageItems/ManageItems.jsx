import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const ManageItems = () => {
    const [axiosSecure] = useAxiosSecure()
    const [menu, , refetch] = useMenu();
    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${item._id}`)
                .then(res=> {
                    refetch()
                    if (res.data.deletedCount > 0) {
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success')
                    }
                })
            }
        })
    }

    return (
        <div className='w-full'>

            <Helmet>
                <title>Bistro Boss | Manage Items</title>
            </Helmet>
            <SectionTitle heading='Manage All Items' subheading='Hurry Up'></SectionTitle>
            <div className='uppercase font-semibold flex justify-evenly'>
                <h3>Total Items : {menu.length}</h3>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full mt-12">
                    {/* head */}
                    <thead>
                        <tr className='text-center'>
                            <th>#</th>
                            <th>Food</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            menu.map((item, index) =>
                                <tr>
                                    <td>
                                        {
                                            index + 1
                                        }
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className=" w-24 h-24">
                                                <img src={item.image} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td className='text-end'>
                                        $ {item.price}
                                    </td>
                                    <td className='text-end'>
                                        Details
                                    </td>
                                    <td className='text-center'>
                                        <button onClick={() => handleDelete(item)} className="btn btn-
                                        bg-red-700 border-0 btn-lg">
                                            <FaTrashAlt></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageItems;