import React, { useContext, useReducer } from 'react'

const initailState = {
    a: "1111",
    b: "2222",
}

const reducer = (prevState, action) => {
    let newState = { ...prevState };
    switch (action.type) {
        case "changeA":
            newState.a = action.value;
            return newState;
        case "changeB":
            newState.b = action.value;
            return newState;
        default:
            return prevState;
    }
    return prevState;
}

const GlobalContext = React.createContext();
export default function App() {
    const [state, dispatch] = useReducer(reducer, initailState)
    return <GlobalContext.Provider value={{
        state, dispatch
    }}>
        <div>
            <Child1 />
            <Child2 />
            <Child3 />
        </div>
    </GlobalContext.Provider>
}


function Child1() {
    const { dispatch } = useContext(GlobalContext)
    return <div style={{ backgroundColor: "red" }}>
        <button onClick={() => {
            dispatch({
                type: "changeA",
                value: "AAAAA"
            })
        }}>改变a</button>
        <button onClick={() => {
            dispatch({
                type: "changeB",
                value: "BBBB"
            })
        }}>改变b</button>
    </div>
}
function Child2() {
    const { state } = useContext(GlobalContext)
    return <div style={{ backgroundColor: "pink" }}>{state.a}</div>
}
function Child3() {
    const { state } = useContext(GlobalContext)
    return <div style={{ backgroundColor: "blue" }}>{state.b}</div>
}