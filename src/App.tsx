import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import TaskLists from "./pages/TaskLists";
import CreateTask from "./pages/CreateTask";
import DeleteTasks from "./pages/DeleteTasks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MainHeading } from "./utils/styles";

function App() {
  return (
    <>
      <MainHeading>Task Manager</MainHeading>
      <div className="App">
        <Routes>
          <Route path="list-tasks" element={<TaskLists />} />
          <Route path="/" element={<Navigate to="/list-tasks" replace />} />
          <Route path="create-task" element={<CreateTask />} />
          <Route path="bulk-delete" element={<DeleteTasks />} />
          <Route path="*" element={<>Page not found</>} />
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
