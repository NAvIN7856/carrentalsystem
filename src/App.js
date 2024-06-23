import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Navbar from "./Components/Navbar";
import BrowseCars from "./Components/BrowseCars";
import RentalHistory from "./Components/RentalHistory";

// import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/aboutus">
              <AboutUs />
            </Route>
            <Route path="/browsecars">
              <BrowseCars />
            </Route>
            <Route path="/rentalhistory">
              <RentalHistory />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
