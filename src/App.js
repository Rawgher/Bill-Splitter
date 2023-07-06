import './App.css';
import AddFriendForm from './components/AddFriendForm';
import Button from './components/Button';
import FriendsList from './components/FriendsList';
import SplitForm from './components/SplitForm';

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <AddFriendForm />
        <Button>Add Friend</Button>
      </div>
      <SplitForm />
    </div>
  );
}

export default App;
