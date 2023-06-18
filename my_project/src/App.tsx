import React, { useState } from 'react';
// import '' from input_field
import './App.css';
import InputField from './container/InputField';
import {Todo} from './modal';
import TodoList from './container/TodoList';


const App:React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos,setTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo){
      setTodos([...todos,{id: Date.now(),todo:todo,is_done:false}]);
    }
    setTodo("");
    console.log(todos);
  };
  return (
    
   <div className="App">
    <span className='heading'>task</span>
    {/* <input type="text" name="" id="" /> */}
    <InputField todo={todo} setTodo={setTodo} handleAdd = {handleAdd}/>
    <TodoList todos={todos} setTodos={setTodos}/>
   </div>
  );
};

export default App;
