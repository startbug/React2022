import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import Cinema from '../views/Cinema';
import Films from '../views/Films';
import Me from '../views/Me';
import Details from '../views/details/Details';

export default function router() {
    return (
        <div>
            <Routes>
                {/* 注册路由 */}
                <Route path="/cinema" element={<Cinema />} />
                <Route path="/films" element={<Films />} />
                <Route path="/me" element={<Me />} />
                <Route path="/details" element={<Details />} />
                {/* 重定向到首页 */}
                <Route path="*" element={<Navigate to="/films" />} />
            </Routes>
        </div>
    )
}
