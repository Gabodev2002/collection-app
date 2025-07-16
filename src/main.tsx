import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import { Collections } from './pages/Collections/index.tsx';
import { Layout } from './components/Layout/index.tsx';
import './index.css'
import App from './App.tsx'


  const routers = createBrowserRouter([
    { path: '/', element: <App/> },
    { path: '/collections', element: <Collections /> }
  ])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Layout>
        <RouterProvider router={routers} />
      </Layout>
  </StrictMode>,
)
