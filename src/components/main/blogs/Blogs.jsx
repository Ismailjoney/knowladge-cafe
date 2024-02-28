import React, { useEffect, useState } from 'react';
import Blog from '../blog/Blog';

const Blogs = ({ handdleAddToBookMark }) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch(`knowladgeCafe.json`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='w-2/3 border '>
            <h2 className='font-bold text-3xl m-2 '>Our Blogs</h2>

            {
                blogs.map(blog => <Blog
                    blog={blog}
                    key={blog.id}
                    handdleAddToBookMark={handdleAddToBookMark}
                ></Blog>)
            }

        </div>
    );
};

export default Blogs;