import Button from './Button';

export default function AddFriendForm() {
  return (
    <form className="form-add-friend">
      <label>😁 Name</label>
      <input type="text" />

      <label>📷 Image URL</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
}
