import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,totalTime}) => {
  
    return (
      <>
      <div className="px-4 py-2 mb-4 rounded " style={{backgroundColor:'#efedfd'}}>
        <p className="font-semibold text-violet-500 text-lg text-center">Spent time on read : {totalTime} min </p>
      </div>
      <div style={{backgroundColor:'#f3f3f3'}} className=" h-screen">
        <div>
            <h3 className="text-2xl font-bold text-center">Bookmarked Blogs : {bookmarks.length}</h3>
        </div>
         <div>
            {
                bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}/>)
            }
        </div>
       </div>
      </>
    );
};

export default Bookmarks;