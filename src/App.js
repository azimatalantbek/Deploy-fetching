import React, { useState } from 'react';
import UserList from './components/UserList';
import UserPosts from './components/UserPosts';
import PaginatedUsers from './components/PaginatedUsers';
import SearchablePosts from './components/SearchablePosts';
import MasterDetailView from './components/MasterDetailView';
import DebouncedSearch from './components/DebouncedSearch';
import InfiniteScrollPosts from './components/InfiniteScrollPosts';
import FetchWithLoading from './components/FetchWithLoading';
import FetchWithErrorHandling from './components/FetchWithErrorHandling';
import './App.css';

const App = () => {
  const [currentComponent, setCurrentComponent] = useState('UserList');

  const renderComponent = () => {
    switch (currentComponent) {
      case 'UserList': return <UserList />;
      case 'UserPosts': return <UserPosts />;
      case 'PaginatedUsers': return <PaginatedUsers />;
      case 'SearchablePosts': return <SearchablePosts />;
      case 'MasterDetailView': return <MasterDetailView />;
      case 'DebouncedSearch': return <DebouncedSearch />;
      case 'InfiniteScrollPosts': return <InfiniteScrollPosts />;
      case 'FetchWithLoading': return <FetchWithLoading />;
      case 'FetchWithErrorHandling': return <FetchWithErrorHandling />;
      default: return <UserList />;
    }
  };

  return (
    <div>
      <nav>
        {['UserList', 'UserPosts', 'PaginatedUsers', 'SearchablePosts', 'MasterDetailView', 'DebouncedSearch', 'InfiniteScrollPosts', 'FetchWithLoading', 'FetchWithErrorHandling'].map(name => (
          <button key={name} onClick={() => setCurrentComponent(name)}>
            {name}
          </button>
        ))}
      </nav>
      <hr />
      {renderComponent()}
    </div>
  );
};

export default App;
