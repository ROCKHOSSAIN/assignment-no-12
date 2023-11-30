import React from 'react';
import { Link } from 'react-router-dom';

const ContentManagement = () => {
    return (
        <div className="relative">
           <Link to='add-blog'>
            <button className='p-5 bg-red-400 absolute top-0 right-0'>Add Blog</button>
            </Link>
        </div>
    );
};

export default ContentManagement;
