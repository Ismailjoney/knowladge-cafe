import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";

const BlogCart = ({ blog, handdleRemoveFormCart }) => {
    const { title, posted_date ,id} = blog
    return (
        <div className='md:flex px-4'>
            <div className='border mt-6 '>
                <h4 className=' font-bold text-2xl'>{title}</h4>
                <p>{posted_date}</p>
            </div>
            <button  onClick={() => handdleRemoveFormCart(id)}><AiOutlineDelete  className='text-2xl font-bold  '/></button>
        </div>
    );
};

export default BlogCart;