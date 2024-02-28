import React from 'react';
import BlogCart from '../blogCart/BlogCart';

const BlogsCart = ({ clickableBlog }) => {
    console.log(clickableBlog)
    return (
        <div className='w-1/3 border'>
            <h2 className='font-bold text-2xl m-2 '>Add Your Blog</h2>
            <div>
                {
                    clickableBlog.map(blog => <BlogCart
                        blog={blog}
                        key={blog.id}
                    ></BlogCart>)
                }
            </div>
        </div>
    );
};

export default BlogsCart;