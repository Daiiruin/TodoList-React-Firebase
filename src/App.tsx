import "./App.scss";
import { TodoList } from "./pages/TodoList/TodoList";

export const App = () => {
  return (
    <div className="MainContainer">
      <TodoList />
    </div>
  );
};
