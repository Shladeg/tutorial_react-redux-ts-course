import React, { FC, useEffect } from "react";
import { useActions } from "../../hooks/use-actions";

import { useTypedSelector } from "../../hooks/use-typed-selector";

const TodoList: FC = () => {
  const { todos, error, loading, page, limit } = useTypedSelector(
    (state) => state.todo
  );

  const pages = [1, 2, 3, 4, 5];

  const { fetchTodos, setTodosPage } = useActions();

  const onChangePage = (page: number) => setTodosPage(page);

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}

      <div>
        {pages.map((p) => (
          <button
            key={`${p}-page`}
            style={{
              border: page === p ? "1px solid black" : "none",
            }}
            onClick={() => onChangePage(p)}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
