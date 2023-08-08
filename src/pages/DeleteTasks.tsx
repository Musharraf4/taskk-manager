import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import listIcon from "../assets/list.png";
import { useNavigate } from "react-router-dom";
import { TaskCard } from "../components/TaskCard";
import { AppButton, Title, Wrapper } from "../utils/styles";
import { Task } from "../utils/interfaces";

const DeleteTasks = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  const [isAnyTaskChecked, setIsAnyTaskChecked] = useState(true);
  console.log("🚀 ~ file: DeleteTasks.tsx:13 ~ DeleteTasks ~ isAnyTaskChecked:", isAnyTaskChecked);
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const handleToggleTask = (taskId: number) => {
    const updatedTasks: any = tasks.map((task: Task) =>
      task.id === taskId ? { ...task, checked: !task.checked } : task
    );
    setIsAnyTaskChecked(!updatedTasks.some((task: Task) => task.checked));
    console.log(!updatedTasks.some((task: Task) => task.checked));

    setTasks(updatedTasks);
  };

  const handleDeleteCheckedTasks = () => {
    const uncheckedTasks = tasks.filter((task: Task) => !task.checked);

    setTasks(uncheckedTasks);
    toast.success("Task Deleted", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      hideProgressBar: true,
      theme: "dark",
    });
    localStorage.setItem("tasks", JSON.stringify(uncheckedTasks));
  };

  return (
    <Wrapper>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Title>Delete Tasks</Title>

        <img
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/list-tasks")}
          src={listIcon}
          alt="delete"
          width={40}
        />
      </div>
      <ul>
        {tasks.map((task: Task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            checkbox
            checked={task.checked}
            onChange={() => handleToggleTask(task.id)}
            taskText={task.taskText}
          />
        ))}
      </ul>
      {!!tasks.length && (
        <div style={{ textAlign: "center" }}>
          <AppButton disabled={isAnyTaskChecked} onClick={handleDeleteCheckedTasks}>
            Delete Tasks
          </AppButton>
        </div>
      )}
      {!!!tasks.length && <p style={{ color: "white" }}>No Tasks</p>}
    </Wrapper>
  );
};

export default DeleteTasks;
