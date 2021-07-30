import React, { useState, useEffect } from "react";
import { getSuperHeroesByPage } from "../../Services/SuperHeroesServices";
import CardHeroe from "../Card-heroe/CardHeroe";
import "./ListCardHeroe.css";
import { useParams, useHistory } from "react-router";
import { TOTAL_PAGES } from "../../Global-constants/GlobalConstants";
import Loading from "../Loading/Loading";
import { useDispatch } from "react-redux";

export default function ListCardHeroe() {
  const [isLoading, setIsLoading] = useState(false);
  const [superHeroes, setSuperHeroes] = useState([]);
  const paramsRoute = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    let currentPage = parseInt(paramsRoute.page) || 1;
    if (currentPage > TOTAL_PAGES || typeof currentPage != "number") {
      history.push("/list/1");
      currentPage = 1;
    }
    const superHeroes = async () => {
      const response = await getSuperHeroesByPage(currentPage);
      setSuperHeroes(response.filter((item) => !item.data.error));
      setIsLoading(false);
    };
    superHeroes();
  }, [paramsRoute, history, dispatch]);

  return (
    <>
      {isLoading === true && <Loading />}
      {superHeroes.length > 0 && (
        <div className="list-card-heroe">
          <>
            {superHeroes.map((item) => {
              return <CardHeroe heroe={item} key={item.data.id} />;
            })}
          </>
        </div>
      )}
    </>
  );
}
