import "./App.css";
import ListCardHeroe from "./Components/List-card-heroe/ListCardHeroe";
import Pagination from "./Components/Pagination/Pagination";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route path="/list/:page">
          <ListCardHeroe />
          <Pagination />
        </Route>
        <Route path="/">
          <ListCardHeroe />
          <Pagination />
        </Route>
      </Switch>
    </>
  );
}

export default App;
