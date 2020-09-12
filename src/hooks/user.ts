import { useState } from 'react'

export const useUserProfile = () => {
  const [nickName, setNickName] = useState('Thulof Qu');
  const [slogan, setSlogan] = useState('这是一句个性签名');
  const [imgUrl, setImgUrl] = useState('https://lh3.googleusercontent.com/proxy/Q23q8AvfEycsq0XygQ6imTCrq3swvwoku4eYlVCOtlGWTsTPgShMQR7vB_9I8n_FOMhGPdBh3u5Zl3ArWt8BgatfZlY');

  return {
    nickName,
    slogan,
    imgUrl,
  };
}