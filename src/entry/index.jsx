/**
 * 首页入口文件
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../domain/home/index.tsx';

export default function App() {
    ReactDOM.render(
        <Home />,
        document.getElementById('root')
    );
}