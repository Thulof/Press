/**
 * 首页入口文件
 */
import App from './entry/index.tsx';
import './index.css';

// 引入
import Bmob from 'hydrogen-js-sdk'

const apiKey = process.env.REACT_APP_APIKey
const apiSecret = process.env.REACT_APP_APISecret

// 初始化
Bmob.initialize("ff049d613495b6be", "108158");

App();