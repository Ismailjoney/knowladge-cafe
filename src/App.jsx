import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/main/blogs/Blogs'
import BlogsCart from './components/main/blogsCart/BlogsCart'
import { addCartToLocalStorage, getLocalStoragecart, removeToLocalStorage } from './utilities/Utilities'


function App() {
  const [blog, setBlogs] = useState([])
  const [clickableBlog, setClickableBlog] = useState([])
  const [addedTime, setAddedTime] = useState(0)


  useEffect(() => {
    fetch(`knowladgeCafe.json`)
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])

//add bookmar in book mark cart
  const handdleAddToBookMark = (blog) => {
    const newClickBlog = [...clickableBlog, blog]
    setClickableBlog(newClickBlog)
    addCartToLocalStorage(blog.id)
  }
//add calculation time add bookmark cart
  const handdleAddTime = (id, time) => {
    const readingTime = addedTime + time;
    setAddedTime(readingTime)
    //remove specific blog
    const remaining = clickableBlog.filter(blg => blg.id !== id)
    setClickableBlog(remaining)
  }


  //get product id localstorage 
  useEffect(() => {

    if (blog.length > 0) {
      const getLsProductId = getLocalStoragecart()

      const saveCart = []
      for (const id of getLsProductId) {
        const findBlogsId = blog.find(blg => blg.id === id)

        if (findBlogsId) {
          saveCart.push(findBlogsId)
        }
      }
      setClickableBlog(saveCart)
    }
  }, [blog])

//remove blog bookmark cart and localstorage
  const handdleRemoveFormCart = id => {
    const remainingBlog = clickableBlog.filter(blg => blg.id !== id)
    setClickableBlog(remainingBlog)
    removeToLocalStorage(id)
  }

  return (
    <div className='max-w-screen-lg mx-auto mb-18'>
      <Header></Header>
      <div className='md:flex  gap-4'>
        <Blogs
          blogs={blog}
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
