import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import deleteIcon from "../assets/delete.svg";
import addIcon from "../assets/add.png";
import { TaskCard } from "../components/TaskCard";
import { Title, Wrapper } from "../utils/styles";
import { Task } from "../utils/interfaces";

const TaskLists = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);
  return (
    <Wrapper>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Title>Tasks List</Title>
        <div style={{ marginTop: "10px" }}>
          <img
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/bulk-delete")}
            src={deleteIcon}
            alt="delete"
            width={40}
          />
          <img
            src={addIcon}
            alt="add"
            style={{ cursor: "pointer" }}
            width={40}
            onClick={() => navigate("/create-task")}
          />
        </div>
      </div>
      <ul>
        {tasks &&
          tasks.map((task: Task) => (
            <TaskCard key={task.id} id={task.id} taskText={task.taskText} />
          ))}
      </ul>
      {!!!tasks.length && <p style={{ color: "white" }}>No Tasks</p>}
    </Wrapper>
  );
};

export default TaskLists;
