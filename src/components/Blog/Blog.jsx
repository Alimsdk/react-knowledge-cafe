import PropTypes from 'prop-types';
import { LuBookmark } from "react-icons/lu";

const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    const {title,banner_img,author_name,author_img,posted_date,reading_time,hashtags} = blog;
    return (
        <div className='mb-12'>
            <img style={{height:'300px',width:'100%'}} src={banner_img} alt={`image of {title}`} />
            <div className='flex justify-between pt-4'>
                <div className='flex'>
                   <div> <img style={{width:'50px'}} src={author_img} alt="" /></div>
                   <div>
                   <p>{author_name}</p>
                   <p>{posted_date}</p>
                   </div>
                </div>
                <div className='flex items-center'>                
                    <p>{`0${reading_time} minute read`}</p>
                   &nbsp; <div className='text-2xl cursor-pointer' onClick={()=>handleAddToBookmark(blog)}><LuBookmark /></div>
                </div>
            </div>
            <div className='w-3/4 py-5'>
                <h1 className='text-2xl font-bold'>{title}</h1>
            </div>
            <div className='flex gap-x-4'>
                {hashtags.map((hash,index)=> <p key={index} className='font-semibold'>{hash}</p> )}
            </div>
            <div className='mt-8' onClick={()=>handleMarkAsRead(reading_time)}>
            <a className=' underline' href="#">Mark as Read</a>
            </div>
           
        </div>
    );
};

Blog.propType={
    blog: PropTypes.object.isRequired
}

export default Blog;