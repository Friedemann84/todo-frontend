import { useEffect, useRef } from "react";

const Input = ( {todosArr, setTodosArr, todoInput, setTodoInput} ) => {

  const onFocus = useRef();

  useEffect(() => {
    onFocus.current.focus();
  }, [todosArr, todoInput]);

  const inputHandler = (event) => {
    const newTodo = {
      content: event.target.value,
      status: true,
      user: ""
    }
    setTodoInput(newTodo);
  }; 

  const enterHandler = (event) => {
    if(event.key === 'Enter') {
      if (todoInput.content.trim() === '') {
        alert(` 
        (*・‿・)ノ⌒*:･ﾟ✧ 
  
        Bitte das Textfeld ausfüllen.      
  `);  
      } else {
        event.preventDefault();
        todosArr.unshift(todoInput);
        setTodosArr(todosArr);
        setTodoInput('');
      }
     //! BUG -> input-Cursor setzt sich bei Leerzeichen nicht zurück
    }
  };

  const buttonHandler = (event) => {
    if (todoInput.content.trim() === '') {
      alert(` 
      (*・‿・)ノ⌒*:･ﾟ✧ 

      Bitte das Textfeld ausfüllen.      
`);  
    } else {
      event.preventDefault();
      todosArr.unshift(todoInput);
      setTodosArr(todosArr);
      setTodoInput({
        content: ""
      });
      localStorage.setItem('todoData', JSON.stringify(todosArr));
    }
  };
  return (
    <div className="inputContainer">
      <div className="innerInputContainer">
        <input 
          type="text" 
          value={todoInput.content} 
          onChange={inputHandler}  
          onKeyDown={enterHandler} 
          ref={onFocus}
          placeholder="New Todo ..."
          // onFocus={(event) => event.target.placeholder = ''}
        />
        <button className="addBtn" onClick={buttonHandler}>add</button>
      </div>
    </div>
  )
};
export default Input;