import React, { useState, useEffect } from 'react';

const MasterDetailView = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(setUsers)
      .catch(console.error);
  }, []);

  const fetchUserDetails = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) throw new Error('Failed to fetch user details');
    const data = await response.json();
    setSelectedUser(data);
  };

  return (
    <div>
      <h1>Master-Detail View</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} onClick={() => fetchUserDetails(user.id)}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <div>
          <h2>User Details</h2>
          <p><b>Name:</b> {selectedUser.name}</p>
          <p><b>Email:</b> {selectedUser.email}</p>
          <p><b>Phone:</b> {selectedUser.phone}</p>
          <p><b>Website:</b> {selectedUser.website}</p>
        </div>
      )}
    </div>
  );
};

export default MasterDetailView;
