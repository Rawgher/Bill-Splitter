import { useState } from 'react';
import Button from './Button';

export default function SplitForm({ selectedFriend }) {
  const [bill, setBill] = useState('');
  const [paidByYou, setPaidByYou] = useState('');
  const [whoIsPaying, setWhoIsPaying] = useState('You');

  let friendExpense = bill ? bill - paidByYou : '';

  function handleYourPortion(e) {
    setPaidByYou(Number(e.target.value) > bill ? paidByYou : Number(e.target.value));
  }

  return (
    <form className="form-split-bill">
      <h2>Split the bill with {selectedFriend.name}</h2>

      <label>💵 Bill Total</label>
      <input type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))} />

      <label>💰 Your portion</label>
      <input type="text" value={paidByYou} onChange={handleYourPortion} />

      <label>😁 {selectedFriend.name}'s portion</label>
      <input type="text" disabled value={friendExpense} />

      <label>💳 Who is paying?</label>
      <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
