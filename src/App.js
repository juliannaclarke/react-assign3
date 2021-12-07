import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { MemeHomePage } from './components/pages/MemeHomePage';
import {MemeDetailsPage} from './components/pages/MemeDetails';

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
          <MemeDetailsPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;