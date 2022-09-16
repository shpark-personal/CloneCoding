import {createStore} from 'redux';

// DOM ref 생성
const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// action type 정의
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// action 생성함수 정의
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({type: INCREASE, difference});
const decrease = () => ({type: DECREASE});

// 초깃값 설정
const initialState = {
    toggle: false,
    counter: 0
}

// reducer 함수 설정
function reducer(state = initialState, action){
    // action.type에 따라 다른 작업을 처리함
    switch(action.type){
        case TOGGLE_SWITCH:
            return{
                ...state, // 불변성 유지를 위해 spread 연산자 사용
                toggle: !state.toggle
            };
        case INCREASE:
            return{
                ...state,
                counter: state.counter + action.difference
            };
        case DECREASE:
            return{
                ...state,
                counter: state.counter -1
            };
        default:
            return state;
    }
}

// store 생성
const store = createStore(reducer);
// render 함수 만들기
const render = () => {
    const state = store.getState();
    if(state.toggle){
        divToggle.classList.add('active')
    } else{
        divToggle.classList.remove('active')
    }
    // 카운터 처리
    counter.innerText = state.counter;
};
render();
store.subscribe(render);

// action 발생시키기
divToggle.onclick = () => {
    store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
    store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
    store.dispatch(decrease());
};
