import styles from './index.less';
import { MicroApp } from 'umi';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default function IndexPage(props) {
  const [ defKey, changeKey ] = useState("1");

  const handleClick = value => {
    changeKey(value.key);
    console.log(props)
    if(value.key === "2"){
      props.history.push('/app2');
    }else{
      props.history.push('/');
    }
  }
  return (
    <div className={styles.title}>
      <Layout>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              onClick={handleClick}
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                <Menu.Item key="1">手动</Menu.Item>
                <Menu.Item key="2">自动</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {
                defKey === "1" ? <MicroApp name="child" /> :
                props.children
              }
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}
