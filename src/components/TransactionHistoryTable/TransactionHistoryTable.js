import React from "react";
//import styles from "./TransactionHistoryTable.module.css";

export default function StatsElement(props) {
  // console.log(props);

  return (
    <>
      <tr>
        <td>{props.type}</td>
        <td>{props.amount}</td>
        <td>{props.currency}</td>
      </tr>
    </>
  );
}
