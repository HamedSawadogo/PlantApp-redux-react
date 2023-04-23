import { useState } from "react";
import { plantList } from "../datas/plantList";
import Categories from "./Categories";
import "../styles/ShoppingList.css";
import PlantItems from "./PlantItems";

function ShoppingList() {
  const [activeCategory, setActiveCategory] = useState("");
  const categories = plantList.reduce(
    (acc, elem) =>
      acc.includes(elem.category) ? acc : acc.concat(elem.category),
    []
  );

  return (
    <div className="lmj-shopping-list">
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />
      <PlantItems activeCategory={activeCategory} />
    </div>
  );
}

export default ShoppingList;
