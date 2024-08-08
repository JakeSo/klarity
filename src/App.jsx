import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './Layout';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';
const router = createBrowserRouter([
  {
  element: <Layout />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    }
  ]
},
]);


function App() {
  return (
      <RouterProvider  router={router}/>
  )
}

export default App
