import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Films(props) {

    const navigate = useNavigate();

    function clickBtn() {
        console.log('点击按钮');
        navigate("/details")
    }

    return (
        <div>
            Films
            <button onClick={clickBtn}>点击</button>
        </div>
    )
}