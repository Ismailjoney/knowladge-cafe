import React from 'react';
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog , handdleAddToBookMark}) => {
   
    const { title, author, author_img, cover, id, posted_date, reading_time, hashtags } = blog
    return (
        <div className='mt-10 px-4'>
            <img src={cover} alt="" />
            <div className='px-2  '>
                <div className='md:flex justify-between items-center mt-2 px-2'>
                    <div className='md:flex '>
                        <div>
                            <img className='w-16 h-16' src={author_img} alt="" />
                        </div>
                        <div className='md:flex items-start px-2 flex-col'>
                            <p className='font-bold'>{author}</p>
                            <p>{posted_date}</p>
                        </div>
                    </div>
                    <div className='md:flex items-center '>
                        <p className='px-2'>Time :{reading_time}</p>
                        <button onClick={() => handdleAddToBookMark(blog)}>
                            <FaRegBookmark />
                        </button>
                    </div>
                </div>
                <h4 className='text-3xl font-bold'>{title}</h4>

                {
                    hashtags.map((tags, idx) => <span key={idx}> <a href="">{tags}</a> </span>)
                }

            </div>

        </div>
    );
};

export default Blog;