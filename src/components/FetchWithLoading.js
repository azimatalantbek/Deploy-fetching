import React, { useState, useEffect } from 'react';

const FetchWithLoading = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Posts with Loading Spinner</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchWithLoading;
