import React from "react";
import styles from "./FriendsListItem.module.css";
import PropTypes from "prop-types";

export default function FriendsListItem(props) {
  const AvailabilityClass = [
    styles.status,
    props.isOnline ? styles.available : styles.notAvailable,
  ];
  // console.log(AvailabilityClass.join(' '));
  return (
    <li className={styles.item}>
      <span className={AvailabilityClass.join(" ")}></span>
      <img
        className={styles.avatar}
        src={props.avatar}
        alt="Avatar"
        width="48"
      />
      <p className={styles.name}>{props.name}</p>
    </li>
  );
}

FriendsListItem.defaultProps = {
  avatar:
    "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
  name: "Ungiven",
  isOnline: false,
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
