import React, { FC, Fragment, useEffect } from "react";
import Avatar from "antd/lib/avatar/avatar";
import { List, Typography, Image } from "antd";
import { Record } from "../../components/Record";
import { useUserProfile } from "../../hooks/user";
import { useRecords } from "../../hooks/records";
import { ThoughtRecord } from "../../model/ThoughtRecord";
import { RecordEditor } from "../../components/Input";

export const Profile: FC = () => {
  const { nickName, slogan, imgUrl, userId } = useUserProfile();
  const { records, setRecords } = useRecords(userId);

  return (
    <Fragment>
      <div style={{ transform: `translateY(-7vh)` }}>
        <div style={{ textAlign: "center", padding: "20px" }}>
          <Avatar
            src={imgUrl}
            size={100}
            style={{ border: "1px 1px 1px solid #ffffff" }}
          />
          <Typography.Text
            strong
            style={{ display: "block", fontSize: "16pt" }}
          >
            {nickName}
          </Typography.Text>
          <Typography.Text type="secondary">{slogan}</Typography.Text>
        </div>

        <RecordEditor onSubmit={
          (newRecord: ThoughtRecord) => {setRecords([...records, newRecord])}
        }/>

        <Typography.Title level={3}>全部想法</Typography.Title>
        <List>
          {records.map((record: ThoughtRecord, index: number) => (
            <Record key={index} data={record} />
          ))}
        </List>
      </div>
    </Fragment>
  );
};
