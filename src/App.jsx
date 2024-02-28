import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/main/blogs/Blogs'
import BlogsCart from './components/main/blogsCart/BlogsCart'


function App() {

  const [clickableBlog, setClickableBlog] = useState([])

  const handdleAddToBookMark =(blog) => {
    // console.log('bbb', blog)
    const newClickBlog = [...clickableBlog, blog]
    setClickableBlog(newClickBlog)
  }

  return (
    <div className='max-w-screen-lg mx-auto'>
      <Header></Header>
      <div className='md:flex border '>
        <Blogs
        handdleAddToBookMark={handdleAddToBookMark}
        ></Blogs>
        <BlogsCart
        clickableBlog={clickableBlog}
        ></BlogsCart>
      </div>
    </div>
  )
}

export default App
