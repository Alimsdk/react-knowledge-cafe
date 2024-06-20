import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmark,handleMarkAsRead}) => {
    const [blogs,setBlogs]=useState([]);

    useEffect(()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(value=>setBlogs(value))
    },[]);

    return (
        <div>
           
           {
            blogs.map(blog=><Blog key={blog.id} blog={blog} handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}/>)
           }

        </div>
    );
};

export default Blogs;