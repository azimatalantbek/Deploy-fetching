import React, { useState, useEffect, useRef } from 'react';

const InfiniteScrollPosts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then(response => response.json())
      .then(newPosts => setPosts(prev => [...prev, ...newPosts]))
      .catch(console.error);
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setPage(prev => prev + 1);
    });

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <h1>Infinite Scrolling Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <div ref={loaderRef} style={{ height: '50px', background: 'lightgray' }}>
        Loading...
      </div>
    </div>
  );
};

export default InfiniteScrollPosts;
