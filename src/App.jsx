import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './Layout';
import ErrorPage from './pages/ErrorPage';
const router = createBrowserRouter([
  {
  element: <Layout />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/Klarity/',
      element: <Home />
    },
  ]
},
]);


function App() {
  return (
      <RouterProvider  router={router}/>
  )
}

export default App
