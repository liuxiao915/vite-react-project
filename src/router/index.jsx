import { lazy } from "react";
import {SapiLayout} from '@/components/layout.jsx'
// const About = lazy(() => import('@/views/about.jsx'));
// const Game = lazy(() => import('@/views/game.jsx'));
// const NotFound = lazy(() => import('@/views/NotFound.jsx'));
const Picture = lazy(() => import('@/views/picture/index.jsx'));
const Places = lazy(() => import('@/views/places/index.jsx'));
const Test = lazy(() => import('@/views/test.jsx'));
const Context = lazy(() => import('@/views/context/index.jsx'));

// export interface RouteType {
//   path: string;
//   element: React.ReactNode;
//   children?: Array<RouteType>;
// }
const Routers= [
  {
    path: "/",
    element: <SapiLayout />,
    // element: <Outlet />, // 如果在某个路由下有子路由，通过 children 属性配置，就是上面代码中的这段
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/game",
        element: <Game />
      },
      {
        path: "/picture",
        element: <Picture />
      },
      {
        path: "/test",
        element: <Test />
      },
      {
        path: "/places",
        element: <Places />
      },
      {
        path: "/context",
        element: <Context />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]
export default Routers