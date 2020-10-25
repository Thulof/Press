import { useState } from 'react'

export const useUserProfile = () => {
  const [nickName, setNickName] = useState('Thulof Qu');
  const [slogan, setSlogan] = useState('这是一句个性签名');
  const [imgUrl, setImgUrl] = useState('https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2902873695,2157267194&fm=111&gp=0.jpg');
  const [userId, setUserId] = useState(1);

  return {
    userId,
    nickName,
    slogan,
    imgUrl,
  };
}