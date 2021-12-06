import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { MemeHomePage } from './components/pages/MemeHomePage';
import {MemeDetails} from './components/pages/MemeDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <MemeHomePage />
        </Route>
        <Route path="/cart"></Route>
        <Route path="/meme/:id">
          <div>Individual Details</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;