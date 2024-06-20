import React from 'react';

const Bookmark = ({bookmark}) => {
    return (
        <div className='mx-4 px-4 mt-4 py-4 bg-white'>
            <p className='font-semibold'> {bookmark?.title}</p>
        </div>
    );
};

export default Bookmark;