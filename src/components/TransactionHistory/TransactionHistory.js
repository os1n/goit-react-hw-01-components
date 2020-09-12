import React from "react";
import styles from "./TransactionHistory.module.css";
import TransactionHistoryTable from "../TransactionHistoryTable/TransactionHistoryTable";

export default function TransactionHistory({ items }) {
  //console.log("typeof items", typeof items);
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <TransactionHistoryTable
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
}
