

import React from 'react';
import { createPost } from '../api';

const CreatePost = ({ token }) => {
  const newPost = {
    title: 'test post',
    description: 'testing',
    price: 'free',
    location: 'state',
    willDeliver: false
  }
  
  async function addPost() {
    const result = await createPost(token, newPost)
    console.log(result)
  }
  
  return (
    // This needs to be a form that accepts the 5 request parameters for creating a post
    <input
    type='text'
    placeholder={title}
    onChange={(ev) => setNewTitle(ev.target.value)}
    
/>
<input
    type='text'
    placeholder={title}
    onChange={(ev) => setNewDescription(ev.target.value)}
    
/>

<input
    type='text'
    placeholder={location}
    onChange={(ev) => setNewLocation(ev.target.value)}
    
/>

<input
    type='text'
    placeholder={price}
    onChange={(ev) => setNewPrice(ev.target.checked)}
    
/>
    <button onClick={() => addPost()}>Create a New Post</button>
  )
}

export default CreatePost;
