import { useEffect, useRef } from "react";

const Input = ( {todosArr, setTodosArr, todoInput, setTodoInput} ) => {

  const onFocus = useRef();

  useEffect(() => {
    //! localStorage
    // localStorage.setItem('todoData', JSON.stringify(todosArr));
    onFocus.current.focus();
  }, [todosArr, todoInput]);

  const inputHandler = (event) => {
    setTodoInput(event.target.value);
  }; 

  const enterHandler = (event) => {
    if(event.key === 'Enter') {
      if (todoInput.trim() === '') {
        alert(` 
        (*・‿・)ノ⌒*:･ﾟ✧ 
  
        Bitte das Textfeld ausfüllen.      
  `);  
      } else {
        event.preventDefault();
        todosArr.unshift(todoInput);
        setTodosArr(todosArr);
        setTodoInput('');
        //! localStorage
        localStorage.setItem('todoData', JSON.stringify(todosArr));
      }
    }
  };

  const buttonHandler = (event) => {
    if (todoInput.trim() === '') {
      alert(` 
      (*・‿・)ノ⌒*:･ﾟ✧ 

      Bitte das Textfeld ausfüllen.      
`);  
    } else {
      event.preventDefault();
      todosArr.unshift(todoInput);
      setTodosArr(todosArr);
      setTodoInput('');
      //! localStorage
      localStorage.setItem('todoData', JSON.stringify(todosArr));
    }
  };
  return (
    <div className="inputContainer">
      <div className="innerInputContainer">
        <input 
          type="text" 
          value={todoInput} 
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