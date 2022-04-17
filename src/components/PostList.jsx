import React from 'react';
import PostItem from './PostItem';


const PostList = ({ posts }) => {

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
                список постов
            </h1>

            {posts.map( (post, index) => {
                return (
                   <PostItem post ={ post } title = 'посты про жс' key={ post.id } num = { index + 1 } />
                )
            })}

        </div>
    );
};

export default PostList;