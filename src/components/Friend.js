import Button from './Button';

export default function Friend({ friend, onSelection, currentFriend }) {
  const isCurrent = currentFriend?.id === friend.id;

  return (
    <li className={isCurrent ? 'selected' : ''}>
      <img src={friend.img} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onClick={() => onSelection(friend)}>{isCurrent ? 'Close' : 'Select'}</Button>
    </li>
  );
}
