import React from "react";
import styles from "./StatsElement.module.css";

export default function StatsElement(props) {
  // console.log(props);
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <li
      className={styles.item}
      key={props.id}
      style={{ backgroundColor: "#" + randomColor }}
    >
      <span className={styles.label}>{props.label}</span>
      <span className={styles.percentage}>{props.percentage}</span>
    </li>
  );
}
