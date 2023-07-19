import './App.css'
import Header from './components/header/Header'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import Dashboard from './containers/dashboard/Dashboard';
import { getPodcasts } from './services/podcast.service';
import Dashboard from './containers/dashboard/Dashboard';
import Podcast from './containers/podcast/Podcast';
import { useState } from 'react';
import { Feed, ResponseFeed } from './types/entry';
import { podcastsMapper } from './utils/utils';

const defaultPodcast = { img: '', artist: '', description: '', name: '', id: '' }

function App() {
  const [podcast, setPodcast] = useState<Feed>(defaultPodcast)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard onSelect={setPodcast} />,
      loader: async () => {
        const data = await getPodcasts() as ResponseFeed;
        const podcasts = data.feed.entry.map(podcastsMapper);
        return { feed: podcasts }
      }
    },
    {
      path: "podcast/:podcastId",
      element: <Podcast podcast={podcast} />,
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
