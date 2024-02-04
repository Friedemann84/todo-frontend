import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useEffect } from "react";

const Done = ({ todosArr, setTodosArr, doneTodo, setDoneTodo }) =>  {

  // useEffect(() => {}, [doneTodo, todosArr]);

  const refreshButtonHandler =  (i) => {

    //? filter selektiert alle nicht(!) geklickten Elemente und
    //? fügt sie "DONE & DUSTED" hinzu, re-rendert
    const stillDoneTodos =  doneTodo.filter((todo, index) => i !== index);
    setDoneTodo(stillDoneTodos)
    //~ find() selektiert geklicktes Element und fügt es "TO-DO" hinzu
    //~ spliced gleiches Element aus "DONE & DUSTED" raus,re-rendert
    const refreshedTodo =  doneTodo.find((todo, index) => i === index);
    // await todosArr.unshift(refreshedTodo);
    setTodosArr([refreshedTodo, ...todosArr]);
    // setTodosArr und setDoneTodo rendern Done.jsx nicht neu
    // await setTodosArr(todosArr);
    // doneTodo.splice(i, 1);
    // await setDoneTodo(doneTodo);
    //! localStorage
    localStorage.setItem('todoData', JSON.stringify(todosArr));
    localStorage.setItem('doneData', JSON.stringify(doneTodo));
  };

  const deleteButtonHandler = (i) => {
    const notDeleted = doneTodo.filter((todo, index) => i !== index )
    // doneTodo.splice(i, 1)
     setDoneTodo(notDeleted);
     //! localStorage
     localStorage.setItem('doneData', JSON.stringify(doneTodo));
  };

  return (
    <>
      <div className="doneContainer">
        <h1>DONE & DUSTY<span className="doneIcon">&nbsp; 🎯</span></h1>
        <ul className="dustUL">
          {doneTodo.map((dustyTodo, i) => (
            <li key={i}>{dustyTodo}
              <div>
                <div className="refreshDiv">
                  <button onClick={() => refreshButtonHandler(i)}>
                    <FontAwesomeIcon icon="fa-solid fa-rotate-right" style={{color: "#FEF9EF",}}/>
                  </button>
                </div>
                <div className="deleteDiv">
                  <button onClick={() => deleteButtonHandler(i)}>
                    <FontAwesomeIcon icon="fa-solid fa-trash-can" />
                  </button>
                </div>
              </div>
            </li>
          ))
          }
        </ul>
      </div >
    </>
  )
}
export default Done;