import React, { useEffect } from "react";
import { auth } from "./firebase";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "./features/userSlice";
import { logIn, logOut } from "./features/userSlice";

import "./App.css";
import Header from "./components/header/Header";
import SideBar from "./components/appBody/sidebar/Sidebar";
import Feed from "./components/appBody/feed/Feed";
import Login from "./components/appBody/login/Login";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((createUser) => {
      //check if user is logged in/out
      if (createUser) {
        dispatch(
          logIn({
            email: createUser.email,
            uid: createUser.uid,
            displayName: createUser.displayName,
            photoUrl: createUser.photoURL,
          })
        );
      } else {
        dispatch(logOut())
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <SideBar />

          <Feed />

          {/* widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
