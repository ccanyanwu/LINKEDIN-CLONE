import React from "react";

import CreateIcon from "@material-ui/icons/Create";
import "./Feed.css";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
import Post from "./Post";
import { useState, useEffect } from "react";
import { db } from "../../../firebase";
import firebase from "firebase";

const Feed = () => {
  const user= useSelector(selectUser)
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  //send post function
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button type="submit" onClick={sendPost}>
              send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#7605f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#c7a33c" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c0c8cd" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#74c15e"
          />
        </div>
      </div>

      {/* Posts */}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
};

export default Feed;
