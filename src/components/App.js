import React from "react";
import Styles from "./app.module.css";
import SocialCard from "./SocialCard/SocialCard";
import Statistics from "./Statistics/Statistics";
import FriendsList from "./FriendsList/FriendsList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

// Temp data
import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import transactions from "./data/transactions.json";
//console.log(statisticalData);

export default function App() {
  return (
    <>
      <div className={Styles.container}>
        <h1>React RN20 HW-O1</h1>
        <h2>Social card</h2>
        <SocialCard
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />

        <h2>Statistics</h2>
        <Statistics title="Upload stats" stats={statisticalData} />

        <h2>Friends List</h2>
        <FriendsList />

        <h2>Transaction History</h2>
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
}
