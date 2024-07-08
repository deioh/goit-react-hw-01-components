import { Profile } from './Profile/Profile';
import user from '../components/data/user.json';
//import data from './data.json';

export const App = () => {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};

// <Statistics title="Upload stats" stats={data} />
// <Statistics stats={data} />
