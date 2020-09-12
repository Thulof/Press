/**
 * 首页入口文件
 */
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Layout, Row, Col } from "antd";
import { Profile } from "../domain/Profile";

const { Header, Footer, Sider, Content } = Layout;

export default function App() {
  ReactDOM.render(
    <Fragment>
      <Layout>
        {/* <Header style={{ background: "white" }}>导航栏</Header> */}
        <Layout>
          <Content style={{ background: 'white', padding: '0 30px' }}>
            <Row>
              <Col md={{span:8, offset:8}}>
                <Profile />
              </Col>
            </Row>
          </Content>
          {/* <Sider theme="light">侧边栏</Sider> */}
        </Layout>
        {/* <Footer>底部导航栏</Footer> */}
      </Layout>
    </Fragment>,
    document.getElementById("root")
  );
}
