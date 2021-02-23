import React, { useState, useEffect, useCallback } from "react";
import Recipe from "./Recipe";
import { PageLoader } from "./components/Loaders/index";
import "./App.css";

const App = () => {
  const APP_ID = "6d6a83db";
  const APP_KEY = "2301e231e5cf4dc8ba58fb8966ba46d3	";

  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);

  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("chicken");

  const getRecipes = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
    } catch (error) {
      setError(error);
    }
    setIsloading(false);
  }, [query]);

  useEffect(() => {
    setIsloading(true);
    getRecipes();
  }, [getRecipes]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  if (error) return <p>{error}</p>;

  if (isLoading) return <PageLoader />;

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <div>
          <h1 className={"title"}>Search For Your Food Recipes</h1>
        </div>
        <div className="inpt-div">
          <input
            className="search-bar"
            type="text"
            placeholder="search for your recipe"
            value={search}
            onChange={updateSearch}
          />

          <button className="search-button" type="submit">
            search
          </button>
        </div>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => {
          return (
            <Recipe className="recipe-card"
              key={recipe.recipe.image}
              title={recipe.recipe.label}
              src={recipe.recipe.image}
              calories={recipe.recipe.calories}
              ingredients={recipe.recipe.ingredients}
            />
          );
        })}
      </div>
    </div>
  );
};
export default App;
