import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/main/blogs/Blogs'
import BlogsCart from './components/main/blogsCart/BlogsCart'
import { addCartToLocalStorage, getLocalStoragecart, removeToLocalStorage } from './utilities/Utilities'


function App() {

  const [clickableBlog, setClickableBlog] = useState([])
  const [addedTime, setAddedTime] = useState(0)
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch(`knowladgeCafe.json`)
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])



  const handdleAddToBookMark = (blog) => {
    const newClickBlog = [...clickableBlog, blog]
    setClickableBlog(newClickBlog)
    addCartToLocalStorage(blog.id)
  }

  const handdleAddTime = (id, time) => {
    const readingTime = addedTime + time;
    setAddedTime(readingTime)
    //remove specific blog
    const remaining = clickableBlog.filter(blg => blg.id !== id)
    setClickableBlog(remaining)
  }


  //get producu id localstorage 
  useEffect(() => {

    if (blogs.length > 0) {
      const getLsProductId = getLocalStoragecart()

      const saveCart = []
      for (const id of getLsProductId) {
        const findBlogsId = blogs.find(blg => blg.id === id)

        if (findBlogsId) {
          saveCart.push(findBlogsId)
        }
      }
      setClickableBlog(saveCart)
    }
  }, [blogs])


  const handdleRemoveFormCart = id => {
    const remainingBlog = clickableBlog.filter(blg => blg.id !== id)
    setClickableBlog(remainingBlog)
    removeToLocalStorage(id)
  }


  


  return (
    <div className='max-w-screen-lg mx-auto'>
      <Header></Header>
      <div className='md:flex  gap-4'>
        <Blogs
          blogs={blogs}
          handdleAddToBookMark={handdleAddToBookMark}
          handdleAddTime={handdleAddTime}
        ></Blogs>
        <BlogsCart
          clickableBlog={clickableBlog}
          addedTime={addedTime}
          handdleRemoveFormCart={handdleRemoveFormCart}
        ></BlogsCart>
      </div>
    </div>
  )
}

export default App
