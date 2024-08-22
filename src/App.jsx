
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [time, setTime] = useState(0);
  const markHandle = mark =>{
    setBookmarks([...bookmarks, mark])
  }
  const readTime = add => {
    setTime(time + add)
    
  }
  return (
    <div className='max-w-6xl mx-auto'>
    <Header></Header>
    <div className='flex'>
      <Blogs markHandle = {markHandle} readTime = {readTime}></Blogs>
      <Bookmarks  bookmarks = {bookmarks} time ={time}></Bookmarks>
    </div>
    </div>
  )
}

export default App
