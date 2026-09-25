import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <div>
      <h1>My To-Do List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}