import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../../firebase";
import { logIn } from "../../../features/userSlice";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const register = async () => {
    if (!name) return alert("Please enter your full name");

    //create a user in firebase
    try {
      const createUser = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUser.user.updateProfile({
        displayName: name,
        photoURL: profilePicture,
      });
      dispatch(
        logIn({
          email: createUser.user.email,
          uid: createUser.user.uid,
          displayName: name,
          photoUrl: profilePicture,
        })
      );
    } catch (error) {
      alert(error);
    }
  };

  const loginUser = async(e) => {
    e.preventDefault();

    try {
      const userSignedIn = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      dispatch(
        logIn({
          email: userSignedIn.user.email,
          uid: userSignedIn.user.uid,
          displayName: userSignedIn.user.displayName,
          profileUrl: userSignedIn.user.profilePicture,
        })
      );
    } catch (error) {
      alert(error)
    }
    
  };

  return (
    <div className="login">
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png"
        alt="logo"
      />

      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name (required if registering)"
        />
        <input
          type="text"
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
          placeholder="Profile Pix URL (optional)"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" onClick={loginUser}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
