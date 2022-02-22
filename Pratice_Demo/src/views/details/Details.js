import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import store from '../../redux/store';
import { show, hide } from '../../redux/actionCreator/TabbarActionCreator'

export default function Details() {

    useEffect(() => {
        store.dispatch({
            type: "hide-tabbar",
        })
    }, [])

    const navigate = useNavigate();

    const stepBack = () => {
        navigate(-1);//返回上一层
        store.dispatch({
            type: "show-tabbar",
        })
    }

    return (
        <div>
            <span>Details</span>
            <button onClick={stepBack}>跳回上一层</button>
        </div>
    )
}
