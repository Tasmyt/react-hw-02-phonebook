import FriendList from "./FriendList/FriendList";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import user from './Profile/user.json';
import data from './Statistics/data.json';
import dataFriend from './FriendList/friends.json';
import dataTrans from './TransactionHistory/transactions.json';

export const App = () => {
  
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}        
      />

      <Statistics
        // title="Upload stats"
        stats={data}
      />
      <FriendList
        friends={dataFriend}        
      />
      <TransactionHistory
        items={dataTrans}
        />
    </div>
  );
};
