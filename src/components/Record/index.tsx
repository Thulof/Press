import React, { FC, ReactNode } from 'react';
import { Comment, Avatar, Tooltip } from 'antd';
import { useUserProfile } from '../../hooks/user';
import { ThoughtRecord } from "../../model/ThoughtRecord";
import { delectRecords } from '../../dao/ThoughtRecord';

interface RecordProps {
  data: ThoughtRecord,
  actions: {
    onDelected: () => void,
  }
}

export const Record: FC<RecordProps> = (props: RecordProps) => {
  const { nickName, slogan, avatarUrl } = useUserProfile();

  const handleDelect = () => {
    delectRecords(props.data.objectId);
    props.actions.onDelected();
  }

  const actions: ReactNode[] = [
    <Tooltip key="comment-basic-like" title="Like">
      <span>
      </span>
    </Tooltip>,
    // <span key="comment-basic-reply-to">修改</span>,
    <span key="comment-basic-reply-to" onClick={handleDelect}>删除</span>,
  ];

  return (
    <Comment
      actions={actions}
      author={<a>{nickName}</a>}
      avatar={
        <Avatar
          src={avatarUrl}
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