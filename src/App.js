import "./App.css";
import { getSuperHeroesByPage } from "./Services/SuperHeroesServices";
import { useEffect, useState } from "react";
import ListCardHeroe from "./Components/List-card-heroe/ListCardHeroe";

function App() {
  const [superHeroes, setSuperHeroes] = useState([]);

  useEffect(() => {
    const superHeroeById = async () => {
      const response = await getSuperHeroesByPage(2);
      setSuperHeroes(response);
    };
    superHeroeById();
  }, []);

  return (
    <>{superHeroes.length > 0 && <ListCardHeroe heroes={superHeroes} />}</>
  );
}

export default App;
