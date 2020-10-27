import React, { FC, Fragment, useEffect, useState } from 'react';
import { List, Typography, Avatar } from 'antd';
import Record from '../../components/Record';
import useUserProfile from '../../hooks/user';
import { ThoughtRecord } from '../../model/ThoughtRecord';
import { RecordEditor } from '../../components/Input';
import { getAllRecords } from '../../dao/ThoughtRecord';

const Profile: FC = () => {
  const { nickName, slogan, avatarUrl } = useUserProfile();
  const [records, setRecords] = useState<ThoughtRecord[]>([]);
  const [refresh, setRefresh] = useState(false);

  const fetchData = async () => {
    const res = await getAllRecords();
    setRecords(res);
  };

  useEffect(() => {
    fetchData();
  }, [refresh]);

  return (
    <>
      <div style={{ transform: 'translateY(-7vh)' }}>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <Avatar
            src={avatarUrl}
            size={100}
            style={{ border: '1px 1px 1px solid #ffffff' }}
          />
          <Typography.Text
            strong
            style={{ display: 'block', fontSize: '16pt' }}
          >
            {nickName}
          </Typography.Text>
          <Typography.Text type="secondary">{slogan}</Typography.Text>
        </div>

        <RecordEditor onSuccess={() => setRefresh(!refresh)} />

        <Typography.Title level={3}>全部想法</Typography.Title>
        <List>
          {records.map((record: ThoughtRecord) => (
            <Record
              key={record.objectId}
              data={record}
              actions={{ onDelected: () => setRefresh(!refresh) }}
            />
          ))}
        </List>
      </div>
    </>
  );
};

export default Profile;
