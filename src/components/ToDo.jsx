import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

const ToDo = ({ todosArr, setTodosArr, doneTodo, setDoneTodo }) => {

  useEffect(() => {
    //! localStorage      
    localStorage.setItem('doneData', JSON.stringify(doneTodo));
    localStorage.setItem('todoData', JSON.stringify(todosArr));
  }, [todosArr, doneTodo]);

  const doneButtonHandler = (i) => {
    //? filter selektiert alle nicht(!) geklickten Elemente und
    //? fügt sie "To-DO" hinzu, re-rendert
    const keptTodo = todosArr.filter((todo, index) => i !== index);
    setTodosArr(keptTodo); 
    //! localStorage
    // localStorage.setItem('todoData', JSON.stringify(todosArr));
    //~ find selektiert geklicktes Element und 
    //~ fügt es "DONE & DUSTED" hinzu, re-rendert
    const newDoneTodo = todosArr.find((todo, index) => i === index);
    setDoneTodo([...doneTodo, newDoneTodo]);
    //! localStorage
    // localStorage.setItem('doneData', JSON.stringify(doneTodo));
  };
  return (
    <>
      <div className="todoContainer">
        <h1>TO-DO&#39;s<span className="todoIcon">&nbsp;  📝</span></h1>
        <ul className="todoUL">
          {todosArr.map((todo, i) => (
            <li key={i}>{todo}
              <button onClick={() => doneButtonHandler(i)}>
                <FontAwesomeIcon icon="fa-solid fa-eye-slash" style={{color: "#FEF9EF",}} />
              </button>
            </li>
          ))
          }      
        </ul>
        {/* <Done doneTodo={doneTodo} setDoneTodo={setDoneTodo}  
              todosArr={todosArr} setTodosArr={setTodosArr} /> */}
      </div>
    </>
  )
}
export default ToDo;