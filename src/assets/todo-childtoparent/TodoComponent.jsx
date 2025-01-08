const TodoComponent = ({ inputData }) => {
  if (!inputData) {
    return (
      <>
        <h2>this is my todo</h2>
        <div>
          <p>there is not data</p>
        </div>
      </>
    );
  }

  return (
    <>
      <h2>this is my todo</h2>
      <div>
        {inputData.length > 0 ? (
          inputData.map((item) => {
            return (
              <div key={item.id}>
                <span>{item.text}</span>
                <button>Delete</button>
                <button>Edit</button>
              </div>
            );
          })
        ) : (
          <p>there is not data</p>
        )}
      </div>
    </>
  );
};

export default TodoComponent;