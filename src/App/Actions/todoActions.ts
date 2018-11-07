import TodoActionTypes from './todoActionTypes';
import TodoDispatcher from '../Dispatcher/todoDispatcher';

export type ActionType<TPayload> = {
    type: string;
    text: TPayload;
};

const addTodoAction = (text: string): ActionType<string> => ({
    type: TodoActionTypes.ADD_TODO,
    text: text,
});

const Actions = {
  addTodo(text: string) {
    TodoDispatcher.dispatch(addTodoAction(text));
  },
};

export default Actions;
