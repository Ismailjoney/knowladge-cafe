import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/main/blogs/Blogs'
import BlogsCart from './components/main/blogsCart/BlogsCart'


function App() {

  const [clickableBlog, setClickableBlog] = useState([])
  const [addedTime, setAddedTime] = useState(0)

  const handdleAddToBookMark = (blog) => {
    const newClickBlog = [...clickableBlog, blog]
    setClickableBlog(newClickBlog)
  }


  const handdleAddTime = (id, time) => {
    const readingTime = addedTime + time;
    setAddedTime(readingTime)
    //remove specific blog
    const remaining = clickableBlog.filter(blg => blg.id !== id)
    setClickableBlog(remaining)

  }


  return (
    <div className='max-w-screen-lg mx-auto'>
      <Header></Header>
      <div className='md:flex  gap-4'>
        <Blogs
          handdleAddToBookMark={handdleAddToBookMark}
          handdleAddTime={handdleAddTime}
        ></Blogs>
        <BlogsCart
          clickableBlog={clickableBlog}
          addedTime={addedTime}
        ></BlogsCart>
      </div>
    </div>
  )
}

export default App
