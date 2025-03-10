import { useEffect } from "react"
import { useState } from "react"
import Blog from "../Blog/Blog"

const Blogs = ({markHandle, readTime}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
  return (
    <div className="md:w-2/3">
        {
            blogs.map(blog => <Blog blog = {blog} markHandle = {markHandle} readTime = {readTime}></Blog>)
        }
    </div>
  )
}

export default Blogs