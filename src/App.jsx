import { useRoutes } from "react-router-dom" 
import Routers from './router/index.jsx'
import { ConfigProvider } from 'antd';

export default function App() {
  return (
    <ConfigProvider>
      {/* useRoutes() 是 React Router V6 的一个 Hook，它接收一个路由数组（也就是 routes 数组），根据匹配到的路由渲染相应的组件。 */}
      {useRoutes(Routers)}
    </ConfigProvider>
  ) 
}