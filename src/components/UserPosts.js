import React, { useState } from 'react';
import { fetchUserPosts } from '../utils/api';

const UserPosts = () => {
  const [userId, setUserId] = useState('');
  const [posts, setPosts] = useState([]);

  const handleFetchPosts = () => {
    if (userId) {
      fetchUserPosts(userId)
        .then(setPosts)
        .catch(console.error);
    }
  };

  return (
    <div>
      <h1>User Posts</h1>
      <input
        type="number"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleFetchPosts}>Fetch Posts</button>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserPosts;
