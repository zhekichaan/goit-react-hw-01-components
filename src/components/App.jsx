import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { StatisticsWrapper } from './Statistics/StatisticsWrapper.styled'
import { FriendsList } from "./Friends/FriendsList.styled";
import { FriendsItem } from "./Friends/FriendsItem";
import { TransactionWrapper, TableHeadRow } from "./Transactions/Transaction.styled";
import { Transaction } from "./Transactions/Transaction";
// import { Box } from 'components/Box';
import stats from "../data.json"
import user from "../user.json";
import friends from "../friends.json";
import transactions from "../transactions.json"
import { GlobalStyle } from './GlobalStyles';

export const App = () => {
  return (
    <>
    <Profile user={user}/>
    {}
    <StatisticsWrapper>
      {stats.map((stat) => (
        <Statistics key={stat.id} stat={stat} />
      ))}
    </StatisticsWrapper>
    <FriendsList>
      {friends.map((friend) => (
        <FriendsItem key={friend.id} friend={friend} />
      ))}
    </FriendsList>
    <TransactionWrapper>
      <thead>
        <tr>
          <TableHeadRow>Type</TableHeadRow>
          <TableHeadRow>Amount</TableHeadRow>
          <TableHeadRow>Currency</TableHeadRow>
        </tr>
      </thead>
      <tbody>
        {transactions.map((item) => (
          <Transaction key={item.id} item={item} />
        ))}
      </tbody>
    </TransactionWrapper>
    <GlobalStyle />
    </>
  );
};

// stats.map((stat) => {
//   console.log(stat.id)
//   console.log(stat)
// })