import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { fetchTodos, patchTodos } from "./fetch/fetchTodos.jsx";

const TodoApp = () => {

  const [allTodos, setAllTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTodos();
      setAllTodos(data);
    };
    fetchData();
  }, []);

  useEffect(() => {}, [allTodos]);

  const doneButtonHandler = async (id) => {
    await patchTodos(id, false);
    const fetchData = async () => {
      const data = await fetchTodos();
      setAllTodos(data);
    };
    fetchData();
  };

  const refreshButtonHandler = async (id) => {
    await patchTodos(id, true);
    const fetchData = async () => {
      const data = await fetchTodos();
      setAllTodos(data);
    };
    fetchData();
  };

  const deleteButtonHandler = (id) => {
    const fetchData = async () => {
      const data = await fetchTodos();
      setAllTodos(data);
    };
    fetchData();
  };

  return (
    <>
      <div className="todoContainer">
        <h1>
          TO-DO&#39;s<span className="todoIcon">&nbsp; 📝</span>
        </h1>
        <ul className="todoUL">
          {allTodos.map((todo, i) =>
            todo.status ? (
              <div className="true" key={i}>
                <p>{todo.content}</p>
                <button onClick={() => doneButtonHandler(todo._id)}>
                  <FontAwesomeIcon
                    icon="fa-solid fa-eye-slash"
                    style={{ color: "#FEF9EF" }}
                  />
                </button>
              </div>
            ) : (
              <div className="false" key={i}>
                <p>{todo.content}</p>
                <div className="refreshDiv">
                  <button onClick={() => refreshButtonHandler(todo._id)}>
                    <FontAwesomeIcon
                      icon="fa-solid fa-rotate-right"
                      style={{ color: "#FEF9EF" }}
                    />
                  </button>
                </div>
                <div className="deleteDiv">
                  <button onClick={() => deleteButtonHandler(todo._id)}>
                    <FontAwesomeIcon icon="fa-solid fa-trash-can" />
                  </button>
                </div>
              </div>
            )
          )}
        </ul>
      </div>
    </>
  );
};
export default TodoApp;
