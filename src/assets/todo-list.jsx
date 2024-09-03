import { useState } from "react";

const TodoLogic = () => {
  const [inputText, setInputText] = useState("");
  const [todoItem, setTodoItem] = useState([]);

  const addItems = () => {
    setTodoItem((prevstate) => [...prevstate, inputText]);
    setInputText("");
  };

  const deleteIndex = (index) => {
    setTodoItem((prevstate) =>
      prevstate.filter((elem, i) => {
        return i !== index;
      })
    );
  };

  console.log(inputText);
  return (
    <>
      <h1 className="head">todo-list-task</h1>
      <div className="divi">
        <div className="input-filed">
          <label>Enter your task</label>
          <input
            type="text"
            value={inputText}
            placeholder="write here......"
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
        <div>
          <button className="button-sty" onClick={addItems}>
            Add
          </button>
        </div>
      </div>
      <div className="todoItemsListPrint">
        {todoItem?.length > 0 ? (
          <ul>
            {todoItem.map((item, index) => {
              return (
                <>
                  <li key={index}>{item}</li>
                  <li>
                    <button
                      className="button-sty"
                      style={{ backgroundColor: "red", color: "white" }}
                      onClick={() => deleteIndex(index)}
                    >
                      delete
                    </button>
                  </li>
                  <li>
                    <button
                      className="button-sty"
                      style={{ backgroundColor: "green", color: "white" }}
                    >
                      edit
                    </button>
                  </li>
                  <li>
                    <button
                      className="emoji-sty"
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      +
                    </button>
                    <div className="emoji-picker">
                      <span  className="emoji">✔️</span>
                      <span  className="emoji">❌</span>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        ) : (
          <p>no data found</p>
        )}
      </div>
    </>
  );
};

export default TodoLogic;
