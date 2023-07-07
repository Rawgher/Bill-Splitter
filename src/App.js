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
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddForm() {
    setShowAddButton(() => !showAddButton);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddButton(false);
  }

  function handleSelectedFriend(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((selected) => (selected?.id === friend.id ? null : friend));
    setShowAddButton(false);
  }

  function hanldeSplitBill(val) {
    setFriends((friends) => friends.map((friend) => (friend.id === selectedFriend.id ? { ...friend, balance: friend.balance + val } : friend)));
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} onSelection={handleSelectedFriend} currentFriend={selectedFriend} />
        {showAddButton && <AddFriendForm onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddForm}>{showAddButton ? 'Close Form' : 'Add Friend'}</Button>
      </div>

      {selectedFriend && <SplitForm selectedFriend={selectedFriend} onSplit={hanldeSplitBill} />}
    </div>
  );
}

export default App;
