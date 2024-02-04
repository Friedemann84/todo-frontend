

const fetchTodos = async () => {
  const response = await fetch("http://localhost:1984/todos", {
    method: "POST",
    withCredentials: true,
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ user: "65a7e0d35b7e7cd382e02d88" }),
  });
  const data = await response.json();
  return data;
};

const patchTodos = async (id, status) => {
  const response = await fetch("http://localhost:1984/todos/edit", {
    method: "PATCH",
    withCredentials: true,
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ _id: id, status: status }),
  });
};

export {fetchTodos, patchTodos}