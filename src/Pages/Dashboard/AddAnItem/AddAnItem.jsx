import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle';
import { useForm } from 'react-hook-form';

const AddAnItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div className='w-full px-10'>
            <Helmet>
                <title>Bistro Boss | Add An Items</title>
            </Helmet>
            <SectionTitle subheading="What's New" heading='Add An Items'></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Recipe name?*</span>
                    </label>
                    <input type="text" placeholder="Type here" {...register("name", {required: true, maxLength: 120})}className="input input-bordered" />
                </div>
                <div className='flex gap-4'>
                    <div className="form-control w-1/2 max-w-full">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select {...register("category", {required: true})} className="select select-bordered">
                            <option disabled selected>Category</option>
                            <option>Salads</option>
                            <option>Pizza</option>
                            <option>Soups</option>
                            <option>Desserts</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                    <div className="form-control w-1/2 max-w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input {...register("price", {required: true})} type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea {...register("description", {required: true})} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                </div>

                <input type="submit" className='btn btn-sm mt-4 btn-warning' value='Add Items' />
            </form>
        </div>
    );
};

export default AddAnItem;