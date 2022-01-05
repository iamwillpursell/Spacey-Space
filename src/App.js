import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Stars from "./components/Stars";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Route component={Home} path="/" exact />
        <Route component={NasaPhoto} path="/nasaphoto" />
        <Route component={Login} path="/login" />
        <Route component={SignUp} path="/signup" />
        <Route component={Stars} path="/stars" />
      </div>
    </BrowserRouter>
  );
}

export default App;
