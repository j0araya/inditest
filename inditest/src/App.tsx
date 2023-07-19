import './App.css'
import Header from './components/header/Header'
import { RouterProvider, createBrowserRouter, useParams } from 'react-router-dom';
// import Dashboard from './containers/dashboard/Dashboard';
import { getPodcast, getPodcasts } from './services/podcast.service';
import Dashboard from './containers/dashboard/Dashboard';
import Podcast from './containers/podcast/Podcast';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      loader: getPodcasts
    },
    {
      path: "podcast/:podcastId",
      element: <Podcast />,
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
