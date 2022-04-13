interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
  page: number;
  limit: number;
}

export enum TodoActionTypes {
  FETCH_TODOS_START = "FETCH_TODOS_START",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
  SET_TODOS_PAGE = "SET_TODO_PAGE",
}

interface FetchTodosStartAction {
  type: TodoActionTypes.FETCH_TODOS_START;
}

interface FetchTodosSuccessAction {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS;
  payload: Todo[];
}

interface FetchTodosErrorAction {
  type: TodoActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}

interface SetTodoPageAction {
  type: TodoActionTypes.SET_TODOS_PAGE;
  payload: number;
}

export type TodoAction =
  | FetchTodosStartAction
  | FetchTodosSuccessAction
  | FetchTodosErrorAction
  | SetTodoPageAction;
