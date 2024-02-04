import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Input from './components/Input.jsx';
import TodoApp from './components/TodoApp.jsx';
import Footer from './components/Footer.jsx';

function App() {

  const [todoInput, setTodoInput] = useState('');
  const [todosArr, setTodosArr] = useState([]);
  const [doneTodo, setDoneTodo] = useState([]);
  
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('http://localhost:1984/todos', {
        method: 'POST',
        withCredentials: true,
        headers: {
          "content-type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({user: "65a7e0d35b7e7cd382e02d88"}) 
      });
      const data = await response.json();
      setTodosArr(data);
    }
    fetchTodos();
  }, []);
  
  return (
    <div className='allesBox'>
      <Header />
      <Input 
        todosArr={todosArr} setTodosArr={setTodosArr}
        todoInput={todoInput} setTodoInput={setTodoInput}    
      />

      <TodoApp />

      <Footer />
    </div>
  )
}
export default App;


//&↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
//!↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
//TODO↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
//^ -> li's im localStorage speichern / abrufen bei Neustart
//*↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
//?↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
//~↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
