import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import SignIn from './Components/SignIn';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './features/userSlice';
import ProfileSection from './Components/ProfileSection';

function App() {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }
      else {
        dispatch(logout());
      }
    })
    return unsubscribe;
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <Router>
        {!user ? (
          <SignIn />
        ) : (
          <Switch>
            <Route exact path="/profile">
              <ProfileSection />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        )}
      </Router>
      {/* <Home/> */}
    </>
  );
}

export default App;
