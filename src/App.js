import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./App.css";
import Header from "./components/header/Header";
import SideBar from "./components/appBody/sidebar/Sidebar";
import Feed from "./components/appBody/feed/Feed";
import Login from "./components/appBody/login/Login";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          {/* side bar */}
          <SideBar />

          {/* feed */}
          <Feed />

          {/* widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
