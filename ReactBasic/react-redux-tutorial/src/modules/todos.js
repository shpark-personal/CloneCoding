import {createAction, handleActions} from 'redux-actions';

// action type
const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// action create func
export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3;
export const insert = createAction(INSERT, text =>({
        id: id++,
        text,
        done: false
}));

export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(TOGGLE, id => id);

// 초기값
 const initialState = {
    input: '',
    todos:[
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true
        },
        {
            id: 2,
            text: '리액트와 리덕스 사용하기',
            done: false
        }
    ]
 };

 // reducer 함수
 const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, {playload: input}) => ({...state, input}),
        [INSERT]: (state, {playload: todo}) => ({ ...state, todos: state.todos.concat(todo)}),
        [TOGGLE]: (state, {playload: id}) => ({...state, todos: state.todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo)}),
        [REMOVE]: (state, {playload: id}) => ({...state, todos:state.todos.filter(todo => todo.id !== id)})
    },
    initialState
 )
 export default todos;