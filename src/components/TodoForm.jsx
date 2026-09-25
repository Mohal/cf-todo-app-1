export default function TodoForm() {
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Enter a task..." />
        <button type="submit">Add</button>
      </form>
    );
  }