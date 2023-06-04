import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['user'], async () => {
        const res = await axiosSecure.get('/user')
        console.log(res.data)
        return res.data
    })
    const handleMakeAdmin = user => {
        fetch(`http://localhost:3000/user/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is now admin!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }
    const handleDelete = user => {

    }
    return (
        <div className='w-full'>
            <Helmet>
                <title>Bistro Boss | All Users</title>
            </Helmet>

            <h3>Total Users :{users.length}</h3>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role == 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-
                                    bg-[#D1A054] border-0 btn-lg">
                                        <FaUserShield></FaUserShield>
                                    </button>}</td>
                                    <td>
                                        <button onClick={() => handleDelete(user)} className="btn btn-
                                        bg-red-700 border-0 btn-lg">
                                            <FaTrashAlt></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
