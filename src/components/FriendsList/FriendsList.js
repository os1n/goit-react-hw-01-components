import React from "react";
import styles from "./FriendsList.module.css";
import FriendsListItem from "../FriendsListItem/FriendsListItem.js";
//import PropTypes from "prop-types";
import friends from "../data/friends.json";

export default function FriendsList(props) {
  return (
    <ul className={styles.friendsList}>
      {friends.map((friend) => (
        <FriendsListItem
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          id={friend.id}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}
