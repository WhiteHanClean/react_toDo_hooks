import React, {useState} from 'react';

const PostForm = () => {
    const [post, setPost ] = useState({ title: '', body : ''})


    return (
        <form>
        <MyInput value={post.title} onChange={ e => setPost({...post, title : e.target.value})} type="text" placeholder='название поста'/>
        <MyInput value={post.body} onChange={ e => setPost({...post, body : e.target.value})} type="text" placeholder='описание поста'/>

        <MyButton onClick={addNewPost}>создать пост</MyButton>
        
      </form>
    );
};

export default PostForm