import axios from "axios";
import { Dispatch } from "redux";

import { TodoAction, TodoActionTypes } from "../../types/todo";

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS_START });

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        {
          params: {
            _page: page,
            _limit: limit,
          },
        }
      );

      setTimeout(() => {
        dispatch({
          type: TodoActionTypes.FETCH_TODOS_SUCCESS,
          payload: response.data,
        });
      }, 1000);
    } catch (e) {
      dispatch({ type: TodoActionTypes.FETCH_TODOS_ERROR, payload: "Ошибка!" });
    }
  };
};

export const setTodosPage = (page: number): TodoAction => {
  return { type: TodoActionTypes.SET_TODOS_PAGE, payload: page };
};
