import { useState } from "react";
import TodoComponent from "./TodoComponent";
import { v4 as uuidv4 } from 'uuid';

const TodoForm = () => {
  const [inputData, setInputData] = useState([]);
  const [inputVal, setinputVal] = useState("");
  const handelTodoData = () => {
    const newTodo = { id: uuidv4(), text: inputVal };
    setInputData([...inputData, newTodo]);
    setinputVal("");
  };
  console.log("inputvalue", inputVal);
  console.log("inputdata", inputData);
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter your todo"
          value={inputVal}
          onChange={(e) => setinputVal(e.target.value)}
        />
        <button onClick={handelTodoData}>Add Todo</button>
      </div>
      <TodoComponent inputData={inputData}/>
    </>
  );
};
export default TodoForm;