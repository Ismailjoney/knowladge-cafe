 
import Blog from '../blog/Blog';

const Blogs = ({ handdleAddToBookMark, handdleAddTime, blogs}) => {
    
    return (
        <div className='w-2/3  '>
            <h2 className='font-bold text-3xl m-2 '>Our Blogs</h2>

            {
                blogs.map(blog => <Blog
                    blog={blog}
                    key={blog.id}
                    handdleAddToBookMark={handdleAddToBookMark}
                    handdleAddTime={handdleAddTime}
                ></Blog>)
            }

        </div>
    );
};

export default Blogs;