import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './Layout';
const router = createBrowserRouter([
  {
  element: <Layout />,
  errorElement: <h1>Not found</h1>,
  children: [
    {
      path: '/',
      element: <Home />
    },
  ]
},
]);


function App() {
  return (
      <RouterProvider router={router}/>
  )
}

export default App
