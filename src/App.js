import { useState } from 'react';
import AddFriendForm from './components/AddFriendForm';
import Button from './components/Button';
import FriendsList from './components/FriendsList';
import SplitForm from './components/SplitForm';
import './App.css';

function App() {
  const initialFriends = [
    {
      id: 118836,
      name: 'Clark',
      img: 'https://i.pravatar.cc/48?u=118836',
      balance: -7,
    },
    {
      id: 933372,
      name: 'Sarah',
      img: 'https://i.pravatar.cc/48?u=933372',
      balance: 20,
    },
    {
      id: 499476,
      name: 'Anthony',
      img: 'https://i.pravatar.cc/48?u=499476',
      balance: 0,
    },
  ];

  const [friends, setFriends] = useState(initialFriends);
  const [showAddButton, setShowAddButton] = useState(false);

  function handleShowAddForm() {
    setShowAddButton(() => !showAddButton);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddButton(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {showAddButton && <AddFriendForm onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddForm}>{showAddButton ? 'Close Form' : 'Add Friend'}</Button>
      </div>
      <SplitForm />
    </div>
  );
}

export default App;
