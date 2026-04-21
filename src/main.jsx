import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Roots from './components/Roots.jsx';
import Home from './components/Home.jsx';
import TimeLine from './components/TimeLine.jsx';
import Stats from './components/Stats.jsx';
import FriendsDetalis from './components/FriendsDetalis.jsx';
import ErrorPage from './components/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Roots,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: '/',
        Component: Home
      },
      {
        path: 'timeline',
        Component: TimeLine
      },
      {
        path: 'stats',
        Component: Stats
      },
      {
        path: '/friendsDetails/:id',
        loader: () => fetch('friendsData.json'),
        Component: FriendsDetalis
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
