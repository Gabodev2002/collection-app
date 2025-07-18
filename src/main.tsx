import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import { Collections } from './pages/Collections/index.tsx';
// import { Layout } from './components/Layout/index.tsx';
import './index.css'
import App from './App.tsx'


  const routers = createBrowserRouter([
    { path: '/', element: <App/> },
    { path: '/collections', element: <Collections /> }, 
    { path: '/collections/:name/:id', element: <App /> }, 
  ])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <RouterProvider router={routers} />
  </StrictMode>,
)
