import { useState } from "react";
import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import Categories from "./Categories";
import "../styles/ShoppingList.css";
import { useDispatch } from "react-redux";
import { addTocart } from "../features/card.sclice";

function ShoppingList() {
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState("");
  const categories = plantList.reduce(
    (acc, elem) =>
      acc.includes(elem.category) ? acc : acc.concat(elem.category),
    []
  );

  function addToCart(name, price) {
    const cartData = { name, price, amount: 1 };
    dispatch(addTocart(cartData));
  }

  return (
    <div className="lmj-shopping-list">
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />

      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light, price, category }) =>
          !activeCategory || activeCategory === category ? (
            <div key={id}>
              <PlantItem
                cover={cover}
                name={name}
                water={water}
                light={light}
                price={price}
              />
              <button onClick={() => addToCart(name, price)}>Ajouter</button>
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
