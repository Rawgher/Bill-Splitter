import { useState } from 'react';
import AddFriendForm from './components/AddFriendForm';
import Button from './components/Button';
import FriendsList from './components/FriendsList';
import SplitForm from './components/SplitForm';
import './App.css';

function App() {
  const [showAddButton, setShowAddButton] = useState(false);

  function handleShowAddForm() {
    setShowAddButton((show) => !showAddButton);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddButton && <AddFriendForm />}
        <Button onClick={handleShowAddForm}>{showAddButton ? 'Close Form' : 'Add Friend'}</Button>
      </div>
      <SplitForm />
    </div>
  );
}

export default App;
