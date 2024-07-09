import { Profile } from './Profile/Profile';
import user from '../components/data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../components/data/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../components/data/friends.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
    </>
  );
};

// <Statistics title="Upload stats" stats={data} />
// <Statistics stats={data} />
