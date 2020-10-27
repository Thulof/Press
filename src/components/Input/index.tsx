import React, { FC, useEffect } from 'react';

import { Input, Button } from 'antd';
import { useCreateRecord } from '../../hooks/records';
import useUserProfile from '../../hooks/user';

export interface RecordEditorProps {
  onSuccess: () => void;
}

export const RecordEditor: FC<RecordEditorProps> = (props: RecordEditorProps) => {
  let content = '';
  const { userId } = useUserProfile();
  const { setInput, newRecord } = useCreateRecord(userId);

  const changeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    content = e.target.value;
  };

  const submit = () => {
    setInput(content);
  };

  useEffect(() => {
    props.onSuccess();
  }, [newRecord.objectId]);

  return (
    <div>
      <Input.TextArea
        placeholder="Autosize height with minimum and maximum number of lines"
        onChange={changeContent}
        autoSize={{ minRows: 2, maxRows: 6 }}
      />
      <div style={{ margin: '20px', textAlign: 'center' }}>
        <Button type="primary" onClick={submit}>
          发布
        </Button>
      </div>
    </div>
  );
};
