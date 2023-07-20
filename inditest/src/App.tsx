import './App.css'
import Header from './components/header/Header'
import { RouterProvider, createBrowserRouter, useFetcher, useNavigation } from 'react-router-dom';
// import Dashboard from './containers/dashboard/Dashboard';
import { getPodcasts } from './services/podcast.service';
import Dashboard from './containers/dashboard/Dashboard';
import Podcast from './containers/podcast/Podcast';
import { useMemo, useState } from 'react';
import { Chapter, Feed, ResponseFeed } from './types/entry';
import { podcastsMapper } from './utils/utils';
import ChapterComponent from './containers/chapter/chapter';
import Layout from './containers/Layout';

const defaultPodcast = { img: '', artist: '', description: '', name: '', id: '' }
const defaultChapter = { trackId: '', trackName: '', releaseDate: '', trackTimeMillis: 0, episodeUrl: '', description: '' };


function App() {
  const [podcast, setPodcast] = useState<Feed>(defaultPodcast)
  const [chapter, setChapter] = useState<Chapter>(defaultChapter);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      id: 'root',
      loader: async () => {
        const data = await getPodcasts() as ResponseFeed;
        const podcasts = data.feed.entry.map(podcastsMapper);
        setIsLoading(false);
        return { feed: podcasts }
      },
      children: [
        {
          index: true,
          path: "/",
          element: <Dashboard onSelect={setPodcast} setIsLoading={setIsLoading}/>,
        },
        {
          index: true,
          path: "podcast/:podcastId",
          element: <Podcast podcast={podcast} onSelect={setChapter} setIsLoading={setIsLoading} />,
        },
        {
          path: "podcast/:podcastId/episode/:episodeId",
          element: <ChapterComponent podcast={podcast} chapter={chapter} />,
        },
      ]
    }

  ]);

  return (
    <>
      <Header isLoading={isLoading} />
      <RouterProvider router={router} />
    </>
  )
}

export default App
