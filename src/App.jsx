import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Blogs from './components/header/Blogs/Blogs'
import Header from './components/header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddBookmark = blog =>{
    console.log('Bookmark Adding soon')
  }

  return (
    <>
      <Header></Header>
      <div className='container mx-auto md:flex'>
      <Blogs handleAddBookmark={handleAddBookmark}></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
