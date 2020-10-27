/**
 * 首页入口文件
 */
// 引入
import Bmob from 'hydrogen-js-sdk';

import App from './entry/index.tsx';
// import './index.css';

const apiKey = process.env.REACT_APP_APIKey || 'ff049d613495b6be';
const apiSecret = process.env.REACT_APP_APISecret || '108158';

// 初始化
Bmob.initialize(apiKey, apiSecret);

App();
