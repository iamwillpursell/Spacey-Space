import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute"
// import Home from "./components/Home";
// import NasaPhoto from "./components/NasaPhoto";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
// import Stars from "./components/Stars";
import { AuthProvider } from "./contexts/AuthContext";
import { Container } from 'react-bootstrap';
import './App.css';
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className='w-100' style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
      <ToastContainer />
    </Container>
  );
}

export default App;
