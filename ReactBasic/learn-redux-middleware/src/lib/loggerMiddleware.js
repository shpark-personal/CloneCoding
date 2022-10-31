const loggerMiddleware = store => next => action => {
    console.group(action && action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    next(action);
    console.log('next state', store.getState());
    console.groupEnd();
}

// 함수를 반환하는 함수
// store : redux store instance
// action : dispatched action
// next : 그 다음 처리해야할 미들웨어에게 액션을 넘겨주고, 미들웨어가 없다면 리듀서에게 액션을 넘겨줌
// middleware에서 next를 사용하지 않으면 리듀서에게 전달되지 않음.
const a = function a(store){
    return function(next){
        return function(action){};
    };
}

export default loggerMiddleware;