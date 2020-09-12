import React, { FC, ReactNode } from 'react';
import { Comment, Avatar, Tooltip } from 'antd';
import { useUserProfile } from '../../hooks/user';

export const Record: FC = () => {
  const { nickName, slogan, imgUrl } = useUserProfile();
  const actions: ReactNode[] = [];

  return (
    <Comment
      actions={actions}
      author={<a>{nickName}</a>}
      avatar={
        <Avatar
          src={imgUrl}
          alt="Thulof Qu"
        />
      }
      content={
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully
          and efficiently.
        </p>
      }
      datetime={
        <Tooltip title={'发布时间'}>
          <span>{'发布时间'}</span>
        </Tooltip>
      }
    />
  )
};