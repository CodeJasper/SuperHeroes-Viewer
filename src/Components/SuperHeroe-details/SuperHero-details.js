import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getSuperHeroeById } from "../../Services/SuperHeroesServices";
import { useHistory } from "react-router";
import "./SuperHeroDetails.css";
import Header from "./Header/Header";

export default function SuperHeroDetails() {
  const heroeSelected = useSelector((state) => state.superHeroe.heroe);
  const [heroe, setHeroe] = useState();
  const paramsRoute = useParams();
  const history = useHistory();

  useEffect(() => {
    const getHeroe = async () => {
      const response = await getSuperHeroeById(paramsRoute.id);
      if (response.data.error) {
        history.push("/list/1");
      } else {
        setHeroe(response.data);
      }
    };
    if (heroeSelected !== undefined) {
      setHeroe(heroeSelected);
    } else {
      getHeroe();
    }
  }, [heroeSelected, paramsRoute, history]);
  return (
    <>
      {heroe !== undefined && (
        <>
          <Header name={heroe.name} publisher={heroe.biography.publisher} />
          <div className="body">
            <div className="body-img">
              <img src={heroe.image.url} alt={heroe.name} />
            </div>
            <div className="body-info">
              <div>
                <h2>PowerStats</h2>
                <p>
                  Intelligence:{" "}
                  <span className="info-value">
                    {heroe.powerstats.intelligence}
                  </span>
                </p>
                <p>
                  Strength:{" "}
                  <span className="info-value">
                    {heroe.powerstats.strength}
                  </span>
                </p>
                <p>
                  Speed:{" "}
                  <span className="info-value">{heroe.powerstats.Speed}</span>
                </p>
                <p>
                  Durability:{" "}
                  <span className="info-value">
                    {heroe.powerstats.durability}
                  </span>
                </p>
                <p>
                  Power:{" "}
                  <span className="info-value">{heroe.powerstats.power}</span>
                </p>
                <p>
                  Combat:{" "}
                  <span className="info-value">{heroe.powerstats.combat}</span>
                </p>
              </div>
              <div>
                <h2>Biography</h2>
                <p>
                  Full name:{" "}
                  <span className="info-value">
                    {heroe.biography["full-name"]}
                  </span>
                </p>
                <p>
                  Alter egos:{" "}
                  <span className="info-value">
                    {heroe.biography["alter-egos"]}
                  </span>
                </p>
                <p>
                  Place of birth:{" "}
                  <span className="info-value">
                    {heroe.biography["place-of-birth"]}
                  </span>
                </p>
                <p>
                  First appearance:{" "}
                  <span className="info-value">
                    {heroe.biography["first-appearance"]}
                  </span>
                </p>
                <p>
                  Publisher:{" "}
                  <span className="info-value">
                    {heroe.biography.publisher}
                  </span>
                </p>
                <p>
                  Alignment:{" "}
                  <span className="info-value">
                    {heroe.biography.alignment}
                  </span>
                </p>
              </div>
              <div>
                <h2>Appearance</h2>
                <p>
                  Gender:
                  <span className="info-value"> {heroe.appearance.gender}</span>
                </p>
                <p>
                  Race:{" "}
                  <span className="info-value">{heroe.appearance.race}</span>
                </p>
                <p>
                  Height:{" "}
                  <span className="info-value">
                    {heroe.appearance.height[1]}
                  </span>
                </p>
                <p>
                  Weight:{" "}
                  <span className="info-value">
                    {heroe.appearance.weight[1]}
                  </span>
                </p>
                <p>
                  Eye color:{" "}
                  <span className="info-value">
                    {heroe.appearance["eye-color"]}
                  </span>
                </p>
                <p>
                  Hair color:{" "}
                  <span className="info-value">
                    {heroe.appearance["hair-color"]}
                  </span>
                </p>
              </div>
              <div>
                <h2>Work</h2>
                <p>
                  Occupation:{" "}
                  <span className="info-value">{heroe.work.occupation}</span>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
