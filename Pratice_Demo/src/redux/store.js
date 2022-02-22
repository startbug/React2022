//1.引入redux
//2.createStore(reducer)
import { createStore } from "redux";

const reducer = (prevState = {
    show: false
}, action) => {
    console.log(action);
    let newState = { ...prevState }
    switch (action.type) {
        case 'hide-tabbar':
            newState.show = false;
            return newState;
        case 'show-tabbar':
            newState.show = true;
            return newState;
        default:
            return prevState;
    }
}

// const store = createStore(reducer);  //正常版
const store = createMyStore(reducer);   //极简版

export default store;

/**
 * 编写一个极简版的redux
 */
function createMyStore(reducer) {
    var list = []
    var state = reducer(undefined, {});    //state初始化，执行一次reducer

    function subscribe(callback) {
        list.push(callback)
    }

    function dispatch(action) {
        state = reducer(state, action);
        for (var i in list) {
            list[i] && list[i]()
        }
    }

    function getState() {
        return state;
    }

    return {
        subscribe,
        dispatch,
        getState
    }
}
