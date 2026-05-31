import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'

const router = createBrowserRouter([
  { path: '/', element: <Layout /> },
  { path: '/about', element: <Layout /> },
  { path: '/competences', element: <Layout /> },
  { path: '/projects', element: <Layout /> },
  { path: '/contact', element: <Layout /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
