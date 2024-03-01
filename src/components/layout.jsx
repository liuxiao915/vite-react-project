
import { Layout } from 'antd';
// suspended=>当网速慢时，指定路由组件页面未加载出，则需使用suspense中的fallback在指定页面出现前，加载fallback中的内容。
import { Suspense } from 'react'
import { Outlet } from "react-router-dom";
import { SapiSide } from "./side.jsx"
const { Header, Footer, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};
const contentStyle = {};
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: '100%',
  height: '100%'
  // maxWidth: 'calc(50% - 8px)',
};
export const SapiLayout = () => {
  return (
    <Suspense fallback={<></>}>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>Header</Header>
        <Layout>
          <SapiSide />
          <Content style={contentStyle}>
            <Outlet />
          </Content>
        </Layout>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </Suspense>
  )
}