import Friend from './Friend';

export default function FriendsList({ friends, onSelection, currentFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} onSelection={onSelection} currentFriend={currentFriend} />
      ))}
    </ul>
  );
}
