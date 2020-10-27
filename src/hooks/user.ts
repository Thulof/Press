import { useState } from 'react';
import RandomAvatar from '../assets/avatar/random.jpg';

const useUserProfile = () => {
  const [nickName] = useState('Thulof Qu');
  const [slogan] = useState('这是一句个性签名');
  const [avatarUrl] = useState(RandomAvatar);
  const [userId] = useState(1);

  return {
    userId,
    nickName,
    slogan,
    avatarUrl,
  };
};

export default useUserProfile;
