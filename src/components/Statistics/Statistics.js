import React from "react";
import styles from "./Statistics.module.css";
import StatsElement from "../StatsElement/StatsElement";

export default function Statistics({ title, stats }) {
  //console.log(title);
  //console.log(stats);

  //title = '';
  return (
    <section className={styles.statistics}>
      {title ? <h2 className={styles.title}>{title}</h2> : null}
      <ul className={styles.statList}>
        {stats.map((stat) => (
          <StatsElement
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </ul>
    </section>
  );
}
