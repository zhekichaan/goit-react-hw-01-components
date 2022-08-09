import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { Friends } from "./Friends/FriendItem";
import { TransactionHistory } from "./Transactions/Transaction";
import stats from "../Data/data.json"
import user from "../Data/user.json";
import friends from "../Data/friends.json";
import transactions from "../Data/transactions.json"
import { GlobalStyle } from './GlobalStyles';

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
    <Statistics title="Upload stats" stats={stats} />
    <Friends friends={friends} />;
    <TransactionHistory items={transactions} />;
    <GlobalStyle />
    </>
  );
};