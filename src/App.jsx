import { useState } from "react";
// react-router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//firebase
import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ3TgDnqd9HRbRBZX1pA4Pqrn4uwO65b4",

  authDomain: "myhub-2290c.firebaseapp.com",

  projectId: "myhub-2290c",

  storageBucket: "myhub-2290c.appspot.com",

  messagingSenderId: "134964762185",

  appId: "1:134964762185:web:896855772a1413a1619198",

  measurementId: "G-YKK9R218TG",
};

const app = initializeApp(firebaseConfig);

//Components
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";
import { UserContext } from "./context/UserContext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
