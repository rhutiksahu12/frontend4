import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PostDetail = () => {
    const { id } = useParams();
    const post = useSelector((state) =>
        state.posts.items.find((post) => post.id.toString() === id)
    );

    if (!post) {
        return <div className="text-center py-8">Post not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8 text-gray-400 min-h-screen">
            <h1 className='text-2xl mb-4'>Details Page for Post With ID {id}</h1>
            <div className="w-1/2">
            <img src={post.imgSrc} alt={post.title} className="w-64 h-64 rounded-2xl " />

            <div className="pt-5 gap-2">
                <h2 className="text-3xl py-2">User ID: {post.userId}</h2>
                <h2 className="text-3xl py-2">Title: {post.title}</h2>
                <p className="text-gray-400 mb-4 py-2">Body: {post.body}</p>
                {/* <p className="text-sm text-gray-500"></p> */}
                <Link to="/" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Back to Posts
                </Link>
            </div>
            </div>
        </div>
    );
};

export default PostDetail;