import { Tabs, Tab, TabList, TabPanel,} from 'react-tabs';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendListItem from './FriendListItem/FriendListItem';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import style from './App.module.css'
import css from './Tabs/Tabs.module.css'

export const App = () => {
    return (
        <div className={style.container}>
          <Tabs className={css.tabs}>
            <TabList className={css.tabList}>
              <Tab className={css.tab}>Profile</Tab>
              <Tab className={css.tab}>Statistics</Tab>
              <Tab className={css.tab}>Friends list</Tab>
              <Tab className={css.tab}>Transaction history</Tab>
            </TabList>
    
              <TabPanel className={css.tabsPanel}>
                <Profile
                  username={user.username}
                  tag={user.tag}
                  location={user.location}
                  avatar={user.avatar}
                  stats={user.stats}
                />
              </TabPanel>
              <TabPanel className={css.tabsPanel}>
                <Statistics title="Upload stats" statistic={data} />
              </TabPanel>
              <TabPanel className={css.tabsPanel}>
                <FriendListItem friends={friends} />
              </TabPanel>
              <TabPanel className={css.tabsPanel}>
                <TransactionHistory items={transactions} />
              </TabPanel>
          </Tabs>
        </div>
      );
};
