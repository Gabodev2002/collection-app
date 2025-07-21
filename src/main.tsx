import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import { Collections } from './pages/Collections/index.tsx';
import { RandomPhotos } from './pages/RandomPhotos/index.tsx';
// import { Layout } from './components/Layout/index.tsx';
import './index.css'
import App from './App.tsx'
import { GenericCollection } from './pages/GenericCollection/index.tsx';
import { NotFound } from './pages/NotFound/index.tsx';


  const routers = createBrowserRouter([
    { path: '/', element: <App/> },
    { path: '/collections', element: <Collections /> }, 
    { path: '/collections/:id', element: <GenericCollection /> }, 
    { path: '/random-photos', element: <RandomPhotos /> }, 
    // { path: '/random-photos/:id', element: <RandomPhoto /> },  Add new component
    { path: '/*', element: <NotFound/> }, 
  ])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <RouterProvider router={routers} />
  </StrictMode>,
)
