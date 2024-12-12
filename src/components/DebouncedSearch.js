import React, { useState, useEffect, useRef } from 'react';

const DebouncedSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const debounceTimer = useRef(null); // Use useRef to persist timer

  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)
        .then((res) => res.json())
        .then(setResults)
        .catch(console.error);
    }, 300);

    return () => clearTimeout(debounceTimer.current); // Cleanup on unmount
  }, [query]); // Correct dependencies

  return (
    <div>
      <h1>Debounced Search</h1>
      <input
        type="text"
        placeholder="Search posts"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {results.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DebouncedSearch;
