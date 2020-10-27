import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Row, Col } from 'antd';
import Profile from '../domain/Profile';
import BackgroungImage from '../assets/background/nvidia.jpg';

const { Content } = Layout;

export default function App() {
  ReactDOM.render(
    <>
      <Layout>
        {/* <Header style={{ background: "white" }}>
        </Header> */}
        <div
          style={{
            backgroundImage: `url('${BackgroungImage}')`,
            width: '100vw',
            height: '20vh',
          }}
        />
        <Layout>
          <Content style={{ background: 'white', padding: '0 30px' }}>
            <Row>
              <Col md={{ span: 8, offset: 8 }} xs={{ span: 24 }}>
                <Profile />
              </Col>
            </Row>
          </Content>
          {/* <Sider theme="light">侧边栏</Sider> */}
        </Layout>
        {/* <Footer>底部导航栏</Footer> */}
      </Layout>
    </>,
    document.getElementById('root'),
  );
}
