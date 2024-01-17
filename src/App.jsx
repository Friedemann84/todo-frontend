import { useEffect, useState } from 'react';
import './App.css';
import Done from './components/Done.jsx';
import Header from './components/Header.jsx';
import Input from './components/Input.jsx';
import ToDo from './components/ToDo.jsx';
import Footer from './components/Footer.jsx';

function App() {

  useEffect(() => {
    //TODO -> beide const's bleiben leer ?!?!
    const lsTodoData = JSON.parse(localStorage.getItem('todoData'));
    const lsDoneData = JSON.parse(localStorage.getItem('doneData'));
    console.log('lsTodoData: ', lsTodoData);
    console.log('lsDoneData: ', lsDoneData);

    if (lsTodoData !== null) {
      setTodosArr(lsTodoData);
    }

    if (lsDoneData !== null) {
      setDoneTodo(lsDoneData);
    }
    // theoretisch -> Ausführung nur beim mounten / 1st render
  }, [])

  const [todoInput, setTodoInput] = useState('');
  const [todosArr, setTodosArr] = useState([]);
  const [doneTodo, setDoneTodo] = useState([]);
  
  // useEffect(() => {}, [doneTodo]);
  
  return (
    <div className='allesBox'>
      <Header />
      <Input todosArr={todosArr} setTodosArr={setTodosArr}
             todoInput={todoInput} setTodoInput={setTodoInput}
      />
      <ToDo todosArr={todosArr} setTodosArr={setTodosArr}
            doneTodo={doneTodo} setDoneTodo={setDoneTodo} 
      />
      <Done doneTodo={doneTodo} setDoneTodo={setDoneTodo}  
              todosArr={todosArr} setTodosArr={setTodosArr} 
      />
      <Footer />
    </div>
  )
}
export default App;


//!↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
//TODO -> li's im localStorage speichern / abrufen bei Neustart
//^↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
//*↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
//?↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
//~↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
