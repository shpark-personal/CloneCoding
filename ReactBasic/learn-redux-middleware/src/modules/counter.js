import {createAction, handleActions} from 'redux-actions';

// actionType = moduleName/actionName
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// action create function
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기상태
const initialState = {
    number: 0
};

const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({number : state.number + 1}),
        [DECREASE]: (state, action) => ({number : state.number - 1}),
    },
    initialState
)

export default counter;