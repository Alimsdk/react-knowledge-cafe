import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const [totalTime,setTotalTime]=useState(0);

  const handleAddToBookmark=product=>{
    
    const newBookmarks=[...bookmarks,product];
    setBookmarks(newBookmarks);
    
  }

  const handleMarkAsRead=(time)=>{
    const newTotalTime=parseInt(totalTime+ time)
    setTotalTime(newTotalTime);
  }

  return (
    <>
    <Header/>
    <div className='grid grid-cols-3 mx-auto' style={{maxWidth:'80%'}}>

     <div className='col-span-2'>
     <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}/>
     </div> 
      
     <div>
     <Bookmarks bookmarks={bookmarks} totalTime={totalTime}  />
     </div>

    </div>
    </>
  )
}

export default App
