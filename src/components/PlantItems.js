import React from "react";
import { plantList } from "../datas/plantList";
import Card from "./Card";
import "../styles/PlantItems.css";

const PlantItems = ({ activeCategory }) => {
  return (
    <div className="lmj-plant-list">
      {plantList.map((plant) =>
        !activeCategory || activeCategory === plant.category ? (
          <Card plant={plant} key={plant.id} />
        ) : null
      )}
    </div>
  );
};

export default PlantItems;
