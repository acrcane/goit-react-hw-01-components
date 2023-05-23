import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendListItem from './FriendListItem/FriendListItem';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import style from './App.module.css'

export const App = () => {
  return (
      <div className={style.container}>
        <Profile 
            username = {user.username}
            tag = {user.tag}
            location = {user.location}
            avatar = {user.avatar}
            stats = {user.stats}
        />
        <Statistics
            title = 'Upload stats'
            statistic = {data}
        />
        <FriendListItem 
            friends={friends} 
        />
        <TransactionHistory 
            items = {transactions}
        />
      </div>
  );
};
