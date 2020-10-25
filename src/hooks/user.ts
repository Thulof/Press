import { useState } from 'react'
import RandomAvatar from '../assets/avatar/random.jpg';

export const useUserProfile = () => {
  const [nickName, setNickName] = useState('Thulof Qu');
  const [slogan, setSlogan] = useState('这是一句个性签名');
  const [avatarUrl, setAvatarUrl] = useState(RandomAvatar);
  const [userId, setUserId] = useState(1);

  return {
    userId,
    nickName,
    slogan,
    avatarUrl,
  };
}