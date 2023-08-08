import { Task } from "../utils/styles";

export const TaskCard = (props: any) => {
  return (
    <Task key={props.id}>
      {props?.checkbox && (
        <input
          style={{ marginRight: "20px" }}
          type="checkbox"
          id={props.id}
          checked={props?.checked}
          onChange={props?.onChange}
        />
      )}
      <label htmlFor={props.id}>{props.taskText}</label>
    </Task>
  );
};
