import React, { FC, ReactNode } from 'react';
import { Comment, Avatar, Tooltip } from 'antd';
import { useUserProfile } from '../../hooks/user';
import { ThoughtRecord } from "../../model/ThoughtRecord";

interface RecordProps {
  data: ThoughtRecord,
}

export const Record: FC<RecordProps> = (props: RecordProps) => {
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
          {props.data.content}
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