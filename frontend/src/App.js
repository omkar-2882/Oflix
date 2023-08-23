import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import SignIn from './Components/SignIn';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if(userAuth){
        console.log(userAuth);
      }
      else{
        // logged out
      }
    })
    return unsubscribe;
  }, []);
  
  return (
    <>
      {/* <Navbar /> */}
      {/* <Router>
        {!user ? (
          <SignIn />
        ) : (
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        )}

      </Router> */}
      <Home/>
    </>
  );
}

export default App;
