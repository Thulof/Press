/**
 * 首页入口文件
 */
import Bmob from 'hydrogen-js-sdk';
import App from './entry/index.tsx';

const apiKey = process.env.REACT_APP_APIKey;
const apiSecret = process.env.REACT_APP_APISecret;

// 初始化
Bmob.initialize(apiKey, apiSecret);

App();
