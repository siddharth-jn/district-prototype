
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};
import { FriendsProvider } from './context/FriendsContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Dining from './pages/Dining';
import Movies from './pages/Movies';
import Events from './pages/Events';
import Stores from './pages/Stores';
import Activities from './pages/Activities';
import Play from './pages/Play';
import Profile from './pages/Profile';
import ProfileFriends from './pages/ProfileFriends';
import ProfileVisited from './pages/ProfileVisited';
import Notifications from './pages/Notifications';
import PlannerSetup from './pages/planner/PlannerSetup';
import PlannerResults from './pages/planner/PlannerResults';
import PlannerCheckout from './pages/planner/PlannerCheckout';
import SavedItineraries from './pages/planner/SavedItineraries';
import DetailView from './pages/DetailView';

function App() {
  return (
    <FriendsProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="dining" element={<Dining />} />
            <Route path="movies" element={<Movies />} />
            <Route path="events" element={<Events />} />
            <Route path="stores" element={<Stores />} />
            <Route path="activities" element={<Activities />} />
            <Route path="play" element={<Play />} />
            <Route path="profile" element={<Profile />} />
            <Route path="profile/friends" element={<ProfileFriends />} />
            <Route path="profile/visited" element={<ProfileVisited />} />
            <Route path="profile/:userId" element={<Profile />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="planner" element={<PlannerSetup />} />
            <Route path="planner/results" element={<PlannerResults />} />
            <Route path="planner/checkout" element={<PlannerCheckout />} />
            <Route path="saved-itineraries" element={<SavedItineraries />} />
            <Route path=":type/:id" element={<DetailView />} />
          </Route>
        </Routes>
      </Router>
    </FriendsProvider>
  );
}

export default App;
