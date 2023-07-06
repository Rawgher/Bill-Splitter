import Button from './Button';

export default function SplitForm() {
  return (
    <form className="form-split-bill">
      <h2>Split the bill with (Friend Name Here)</h2>

      <label>💵 Bill Total</label>
      <input type="text" />

      <label>💰 Your portion</label>
      <input type="text" />

      <label>😁 (Friend Name Here)'s portion</label>
      <input type="text" disabled />

      <label>💳 Who is paying?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">(Friend Name Here)</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
