import { useEffect, useState } from "react";
import { addTask } from "../../firebase/addTask";
import { deleteTask } from "../../firebase/deleteTask";
import { fetchCurrentTasks } from "../../firebase/getCurrentTasks";
import { fetchFinishedTasks } from "../../firebase/getFinishedTasks";
import { updateTask } from "../../firebase/updateTask";
import "./TodoList.scss";

export const TodoList = () => {
  const [task, setTask] = useState("");
  const [currentTasks, setCurrentTasks] = useState([]);
  const [finishedTasks, setFinishedTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasksData = await fetchCurrentTasks();
        setCurrentTasks(tasksData);
        console.log("tasks hehe", currentTasks);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasksData = await fetchFinishedTasks();
        setFinishedTasks(tasksData);
        console.log("tasks hehe", finishedTasks);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = (task: string) => {
    addTask(task);
  };

  const handleUpdateTask = (id: string, task: string) => {
    updateTask(id, task);
  };

  const handleDeleteTask = (id: string) => {
    deleteTask(id);
  };

  return (
    <div className="TodoListContainer">
      <h1 className="TitleTodoList">TodoList</h1>
      <div className="InputButtonContainer">
        <input
          type="text"
          className="InputAddTodo"
          value={task}
          onChange={handleInputChange}
        />
        <button className="ButtonAddTodo" onClick={() => handleAddTask(task)}>
          +
        </button>
      </div>
      <div className="TasksLists">
        <div className="CurrentTasks">
          <h2 className="TasksTitle">Current tasks</h2>
          <div className="TasksContainer">
            <ul>
              {currentTasks.map((task) => (
                <li className="taskContainer" key={task.id}>
                  <p className="currentTaskText">{task.task}</p>
                  <button
                    className="todoButton"
                    onClick={() => handleUpdateTask(task.id, task.task)}
                  >
                    ✔
                  </button>
                  <button
                    className="todoButton"
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="CompletedTasks">
          <h2 className="TasksTitle">Completed tasks</h2>
          <div className="TasksContainer">
            <ul>
              {finishedTasks.map((task) => (
                <li className="taskContainer" key={task.id}>
                  <p className="finishedTaskText">{task.task}</p>
                  <button
                    className="todoButton"
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
