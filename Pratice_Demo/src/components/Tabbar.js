import { render } from '@testing-library/react'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Tabbar.module.css'

export default class Tabbar extends Component {
    render() {
        return (
            <div className={styles.tabbar}>
                <ul>
                    <li><NavLink to="/films" className={({ isActive }) => isActive ? styles.active : ""}>电影</NavLink></li>
                    <li><NavLink to="/cinema" className={({ isActive }) => isActive ? styles.active : ""}>影院</NavLink></li>
                    <li><NavLink to="/me" className={({ isActive }) => isActive ? styles.active : ""}>我的</NavLink></li>
                </ul>
            </div>
        )
    }
}
