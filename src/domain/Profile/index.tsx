import React, { FC, Fragment } from "react";
import Avatar from "antd/lib/avatar/avatar";
import { List, Typography, Image } from "antd";
import { Record } from "../../components/Record";
import { useUserProfile } from "../../hooks/user";

export const Profile: FC = () => {
  const { nickName, slogan, imgUrl } = useUserProfile();

  return (
    <Fragment>
      <div
        style={{
          backgroundImage: `url('https://www.wepc.com/wp-content/uploads/2020/08/fredrick-tendong-nUDEzNpPUlA-unsplash-scaled-1200x900.jpg')`,
          width: "100vw",
          height: "15vh",
          position: "fixed",
          left: 0,
        }}
      ></div>
      <div style={{ transform: `translateY(7vh)` }}>
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

        <Typography.Title level={3}>全部想法</Typography.Title>
        <List>
          {[1, 2, 3].map((record) => (
            <Record key={record} />
          ))}
        </List>
      </div>
    </Fragment>
  );
};
