import { useState } from "react";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import ModalComponent  from "./Modalcomponent"
import './style.css'; 

const ArrayCrudTodo = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    email:"",
  });
  const [todoErr, setTodoErr] = useState({
    title: "",
    description: "",
    email:"",
  });
//for confirmation modal

const [isModalOpen,setModalOpen] = useState(false);
const [currentTodoId,setCurrentTodoId] = useState(null);
const [actionType,setActionType] = useState('');



  const onTodoInputChange = (e) => {
    const { name, value } = e.target;
    setTodo((prev) => ({ ...prev, [name]: value }));
    console.log(name);
  };

  const onAddTodoToList = () => {
    if (todo.title === "" || todo.title.length < 3) {
      setTodoErr((prev) => ({ ...prev, title: true }));
      return toast.error("Please enter todo title of atleast 3 length");
    } else {
      setTodoErr((prev) => ({ ...prev, title: false }));
    }

    if (!todo.description) {
      setTodoErr((prev) => ({ ...prev, description: true }));
      return toast.error("Please enter todo decription");
    } else {
      setTodoErr((prev) => ({ ...prev, description: false }));
    }
    if (!todo.email) {
      setTodoErr((prev) => ({ ...prev, email: true }));
      return toast.error("Please enter a valid email.");
    } else {
      setTodoErr((prev) => ({ ...prev, email: false }));
    }
    if(todo.id){
   setTodoList((prev)=>{
    return   prev.map((item)=>{
    return   (item.id === todo.id?{...todo}:item)
        })
      })
      toast.success("Todo updated successfully!");
    }
    else{
      const newTodo = { ...todo, id: v4() };
      setTodoList((prev) => [...prev, newTodo]);
      setTodo({ title: "", description: "" });
      toast.success("Todo addedd successfully!");
    }

    setTodo({ title: "", description: "", email: "", id: "" });
  };

  const onDeleteTodo = (id) => {
    console.log("Opening modal for delete");
    setCurrentTodoId(id);
    setModalOpen(true);
    setActionType('delete');
  };

  const confirmDelete = ()=>{
    setTodoList((prev) => {
      return prev.filter((item) => item.id !== currentTodoId);
    });
    setModalOpen(false);
    toast.success("Todo deleted successfully!");
  }

  // Edit todo list

                
  const onEditTodo = (id) => {
    const storeEdit = todoList.find((item) => item.id === id);
    if (storeEdit) {
      setTodo(storeEdit);
    }
  };

  const closeModal = ()=>{
    setCurrentTodoId(null);
    setModalOpen(false);
  }


  console.log("Todo: ", todo);
  return (
   <>
     <div style={{display:"flex",justifyContent:"space-between",width:"1000px",alignItems:"flex-start"}}>
      <div className="add-todo">
        <div>
          <p>Title</p>
          <input
            name="title"
            type="text"
            value={todo.title}
            placeholder="Enter title"
            onChange={onTodoInputChange}
          />
          {todoErr.title && <p>Title is required</p>}
        </div>

        <div>
          <p>Decription</p>
          <input
            name="description"
            type="text"
            value={todo.description}
            placeholder="Enter description"
            onChange={onTodoInputChange}
          />

        {todoErr.description && <p>Decription is required</p>}
        </div>

        <div>
          <p>email</p>
          <input
            name="email"
            type="email"
            value={todo.email}
            placeholder="Enter email"
            onChange={onTodoInputChange}
          />

        {todoErr.email && <p>Email is required</p>}
        </div>

        <button onClick={onAddTodoToList} className="buttton-style">Add Todo</button>
      </div>
      <div>
        <h1 style={{fontSize:"15px"}}>My Work items</h1>
        {todoList.map((item) => {
          return (
            <div key={item.id}>
              <p><span style={{marginRight:"10px"}}><b>title</b></span>{item.title}</p>
              <p><span style={{marginRight:"10px"}}><b>description</b></span>{item.description}</p>
              <p><span style={{marginRight:"10px"}}><b>email</b></span>{item.email}</p>
              <hr />
              <div>
                <button onClick={()=> onEditTodo(item.id)} className="buttton-style-edit">Edit</button>
                <button onClick={() => onDeleteTodo(item.id)} className="buttton-style-del">Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <ModalComponent
          isOpen={isModalOpen}
        onConfirm={confirmDelete}
        onClose={closeModal}
        actionType={actionType}
      />
   </>
  );
};

export default ArrayCrudTodo;
