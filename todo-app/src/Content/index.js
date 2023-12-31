import { useTodo } from "../context/TodoContext";
import List from "./List";

function Content() {
  const { todos, toggleAllTodo } = useTodo();

  const onSelect = () => {
    toggleAllTodo();
  };
  return (
    <section className="main">
      <input property="toggle_all" id="toggle-all"
				 className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all" onClick={onSelect} style={{ display: todos.length === 0 ? 'none' : 'block' }} >Mark all as complete</label>
      <List />
    </section>
  );
}

export default Content;
