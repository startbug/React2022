import React, { useReducer } from 'react'

//处理函数
const reducer = (prevState, action) => {
    console.log("reducer", action, prevState);
    let newState = { ...prevState }
    switch (action.type) {
        case "minus":
            newState.count--;
            return newState;
        case "add":
            newState.count++;
            return newState;
        default:
            return prevState;
    }
}

//外部的对象
const intialState = {
    count: 0,
}

export default function MyApp() {
    //参数1 状态值  参数2 改变状态的方法
    const [state, dispatch] = useReducer(reducer, intialState)

    return <div>
        <button onClick={() => {
            dispatch({
                type: "minus"
            })
        }}>-</button>
        {state.count}
        <button onClick={() => {
            dispatch({
                type: "add"
            })
        }}>+</button>
    </div>
}
