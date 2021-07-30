import React from "react";
import PropTypes from "prop-types";
import CardHeroe from "../Card-heroe/CardHeroe";
import "./ListCardHeroe.css";
export default function ListCardHeroe({ heroes }) {
  return (
    <div className="list-card-heroe">
      <>
        {heroes.map((item) => {
          return <CardHeroe heroe={item} key={item.data.id} />;
        })}
      </>
    </div>
  );
}

ListCardHeroe.propTypes = {
  heroes: PropTypes.array.isRequired,
};
