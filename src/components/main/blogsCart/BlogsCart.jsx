import React from 'react';
import BlogCart from '../blogCart/BlogCart';

const BlogsCart = ({ clickableBlog, addedTime , handdleRemoveFormCart}) => {
     
    return (
        <div className='w-1/3 border bg-gray-200'>
            <h2 className='font-bold text-2xl m-2 '>Add Your Blog: {clickableBlog.length}</h2>
            <h2 className='font-bold   m-2 '>Your Total Added Time : {addedTime} </h2>
            <div>
                {
                    clickableBlog.map((blog, idx) => <BlogCart
                        blog={blog}
                        key={idx}
                        handdleRemoveFormCart={handdleRemoveFormCart}
                    ></BlogCart>)
                }
            </div>
        </div>
    );
};

export default BlogsCart;