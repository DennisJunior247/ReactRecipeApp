import React from "react";
import "./App.css";
const Recipe = ({ ingredients, title, calories, src }) => {
  return (
    <div className="recipe">
      <img className="image" src={src} alt="" />
      <h1 className={"name"}>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Amount of calories: {calories}</p>
    </div>
  );
};
export default Recipe;
