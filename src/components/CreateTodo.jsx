import React, { useState } from "react";

const CreateTodo = () => {
  const [task, setTask] = useState(0);

  let hideButton = false;
  const countTask = () => {
    return task === 0 ? "No tasks" : `Task: ${task}`;
  };
  const handleClick = () => {
    console.log("click");
    setTask((prev) => prev + 1);
  };
  return (
    <>
      <h1>{countTask()}</h1>
      <button
        className="btn"
        disabled={hideButton}
        value="Add Task"
        onClick={handleClick}
      >
        Add Task
      </button>
    </>
  );
};

export default CreateTodo;
