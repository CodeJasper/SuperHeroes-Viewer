import "./App.css";
import ListCardHeroe from "./Components/List-card-heroe/ListCardHeroe";
import Pagination from "./Components/Pagination/Pagination";
import { Switch, Route, Redirect } from "react-router-dom";
import SuperHeroDetails from "./Components/SuperHeroe-details/SuperHero-details";

function App() {
  return (
    <>
      <Switch>
        <Route path="/list/:page">
          <ListCardHeroe />
          <Pagination />
        </Route>
        <Route path="/superHero/:id">
          <SuperHeroDetails />
        </Route>
        <Route path="/">
          <Redirect to="/list/1" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
