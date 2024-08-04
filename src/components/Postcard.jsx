import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };

    return (
        <div className="bg-black text-gray-400 rounded-lg shadow-md border border-gray-500 overflow-hidden">
            <img src={post.imgSrc} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className='"text-xl font-semibold mb-2"'>ID: {post.id}</h2>
                <h2 className="text-xl font-semibold mb-2">Title: {truncateText(post.title, 50)}</h2>
                <p className="text-gray-400 mb-4">Body: {truncateText(post.body, 100)}</p>
                <Link to={`/item/${post.id}`} className="text-blue-500 hover:text-blue-600">Read More...</Link>
            </div>
        </div>
    );
};

export default PostCard;