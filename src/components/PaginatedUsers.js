import React, { useState, useEffect } from 'react';
import { fetchPaginatedUsers } from '../utils/api';

const PaginatedUsers = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPaginatedUsers(page, 2)
      .then(setUsers)
      .catch(console.error);
  }, [page]);

  return (
    <div>
      <h1>Paginated Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
      <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>
        Previous
      </button>
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
};

export default PaginatedUsers;
