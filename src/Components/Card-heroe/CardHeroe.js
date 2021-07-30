import React from "react";
import PropTypes from "prop-types";
import "./CardHeroe.css";

export default function CardHeroe({ heroe }) {
  return (
    <div className="heroe-card">
      <div className="container-heroe-name-preview">
        <h2 className="heroe-name-preview">{heroe.data.name}</h2>
      </div>
      <div className="heroe-card-image-container">
        <img
          className="heroe-image"
          src={heroe.data.image.url}
          alt={heroe.data.name}
        ></img>
      </div>
      <div className="heroe-card-body">
        <div>
          <h2 className="heroe-name">{heroe.data.name}</h2>
          <h3 className="heroe-publisher">{heroe.data.biography.publisher}</h3>
        </div>
        <div className="heroe-info">
          <p className="info-name">Alignment</p>
          <p className="info-name">full name</p>
          <p className="info-name">race</p>
          <p className="info-name">height</p>
          <p className="info-name">weight</p>
          <p className="info-value">{heroe.data.biography.alignment}</p>
          <p className="info-value">{heroe.data.biography["full-name"]}</p>
          <p className="info-value">{heroe.data.appearance.race}</p>
          <p className="info-value">{heroe.data.appearance.height}</p>
          <p className="info-value">{heroe.data.appearance.weight}</p>
        </div>
        <div>
          <button className="button">Detalles</button>
        </div>
      </div>
    </div>
  );
}

CardHeroe.propTypes = {
  heroe: PropTypes.object.isRequired,
};
