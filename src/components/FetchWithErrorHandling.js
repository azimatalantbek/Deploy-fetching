import React, { useState } from 'react';

const FetchWithErrorHandling = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/invalid-endpoint');
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Posts with Error Handling</h1>
      {error ? (
        <div>
          <p>Error: {error}</p>
          <button onClick={fetchData}>Retry</button>
        </div>
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

export default FetchWithErrorHandling;
