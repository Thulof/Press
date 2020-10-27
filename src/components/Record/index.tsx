import React, { FC, ReactNode } from 'react';
import { Comment, Avatar, Tooltip } from 'antd';
import { noop } from 'lodash-es';
import useUserProfile from '../../hooks/user';
import { ThoughtRecord } from '../../model/ThoughtRecord';
import { delectRecords } from '../../dao/ThoughtRecord';

interface RecordProps {
  data: ThoughtRecord,
  actions: {
    onDelected: () => void,
  }
}

const Record: FC<RecordProps> = (props: RecordProps) => {
  const { nickName, avatarUrl } = useUserProfile();

  const handleDelect = () => {
    delectRecords(props.data.objectId);
    props.actions.onDelected();
  };

  const actions: ReactNode[] = [
    <Tooltip key="comment-basic-like" title="Like">
      <span />
    </Tooltip>,
    // <span key="comment-basic-reply-to">修改</span>,
    <span role="button" key="comment-basic-reply-to" onClick={handleDelect} onKeyDown={noop} tabIndex={0}>删除</span>,
  ];

  const { data } = props;

  return (
    <Comment
      actions={actions}
      author={<span>{nickName}</span>}
      avatar={(
        <Avatar
          src={avatarUrl}
          alt="Thulof Qu"
        />
      )}
      content={(
        <p>
          {data.content}
        </p>
      )}
      datetime={(
        <Tooltip title="发布时间">
          <span>发布时间</span>
        </Tooltip>
      )}
    />
  );
};

export default Record;
