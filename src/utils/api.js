const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Fetch all users
export const fetchUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  if (!response.ok) throw new Error('Failed to fetch users');
  return response.json();
};

// Fetch posts by userId
export const fetchUserPosts = async (userId) => {
  const response = await fetch(`${BASE_URL}/posts?userId=${userId}`);
  if (!response.ok) throw new Error('Failed to fetch user posts');
  return response.json();
};

// Fetch paginated users
export const fetchPaginatedUsers = async (page, limit) => {
  const response = await fetch(`${BASE_URL}/users?_page=${page}&_limit=${limit}`);
  if (!response.ok) throw new Error('Failed to fetch paginated users');
  return response.json();
};

// Fetch all posts
export const fetchAllPosts = async () => {
  const response = await fetch(`${BASE_URL}/posts`);
  if (!response.ok) throw new Error('Failed to fetch posts');
  return response.json();
};
