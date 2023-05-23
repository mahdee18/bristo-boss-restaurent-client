import React from 'react';

const SectionTitle = ({heading,subheading}) => {
    return (
        <div className='text-center md:w-4/12 my-5 mx-auto '>
            <p className='text-yellow-600 mb-2'>--- {subheading} ---</p>
            <h2 className='border-y-4 text-3xl py-2'>{heading}</h2>
        </div>
    );
};

export default SectionTitle;