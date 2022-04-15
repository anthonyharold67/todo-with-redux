import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { clearTodos } from "../../redux/actions/todoActions";

const TodoList = () => {
  const dispatch = useDispatch()
  const {list} = useSelector((state) => state.todoReducer);
  const [count,setCount] = useState(0);
  const handleClearList = () => {
      dispatch(clearTodos())
  };
  return (
    <div>
      <div>
        {list.map((todo) => (
          <TodoItem key={todo.id} {...todo} count={count} setCount={setCount}/>
          
        ))}
      </div>
      <div className="clear-wrapper">
        {list.length > 0 &&<button onClick={handleClearList} className="clear-button">
          DELETE ALL
        </button>}
      </div>
    </div>
  );
};

export default TodoList;
