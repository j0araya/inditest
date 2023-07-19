import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import Dashboard from './containers/dashboard/Dashboard';
import { getPodcast } from './services/podcast.service';
import Dashboard from './containers/dashboard/Dashboard';


function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      loader: getPodcast
    },
  ]);

  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  )
}

export default App
