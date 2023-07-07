import Button from './Button';

export default function SplitForm({ selectedFriend }) {
  return (
    <form className="form-split-bill">
      <h2>Split the bill with {selectedFriend.name}</h2>

      <label>💵 Bill Total</label>
      <input type="text" />

      <label>💰 Your portion</label>
      <input type="text" />

      <label>😁 {selectedFriend.name}'s portion</label>
      <input type="text" disabled />

      <label>💳 Who is paying?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
