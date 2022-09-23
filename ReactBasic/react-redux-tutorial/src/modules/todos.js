import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';

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
        [CHANGE_INPUT]: (state, {playload: input}) => produce(state, draft => {draft.input = input}),
        [INSERT]: (state, {playload: todo}) => produce(state, draft => {draft.todos.push(todo)}),
        [TOGGLE]: (state, {playload: id}) => produce(state, draft => {
            const todo = draft.todos.find(todo => todo.id === id); 
            todo.done = !todo.done;
        }),
        [REMOVE]: (state, {playload: id}) => produce(state, draft => {
            const index = draft.todos.findIndex(todo => todo.id === id);
            draft.todos.splice(index, 1);
        })
    },
    initialState
 )
 export default todos;