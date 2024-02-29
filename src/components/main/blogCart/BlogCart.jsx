import React from 'react';

const BlogCart = ({ blog }) => {
    const { title, posted_date} = blog
    return (
        <div className='border mt-6 px-4'>
            <h4 className=' font-bold text-2xl'>{title}</h4>
            <p>{posted_date}</p>
        </div>
    );
};

export default BlogCart;