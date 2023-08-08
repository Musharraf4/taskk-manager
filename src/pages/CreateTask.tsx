import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import listIcon from "../assets/list.png";
import { AppButton, Title, Wrapper } from "../utils/styles";

const CreateTask = () => {
  const navigate = useNavigate();
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);
  const addTask = () => {
    if (!taskText) {
      toast.error("Task Field is Required", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: true,
        theme: "dark",
      });
    } else {
      const task = [...tasks, { id: Date.now(), taskText: taskText.trim() }];
      toast.success("Task Created Successfully", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: true,
        theme: "dark",
      });
      localStorage.setItem("tasks", JSON.stringify(task));
      navigate("/list-tasks");
    }
  };

  return (
    <Wrapper>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Title>Tasks List</Title>

        <img
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/list-tasks")}
          src={listIcon}
          alt="delete"
          width={40}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <input
          style={{ padding: "10px", width: "300px" }}
          type="text"
          maxLength={50}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <br />
        <AppButton onClick={addTask}>Create Task</AppButton>
      </div>
    </Wrapper>
  );
};

export default CreateTask;
