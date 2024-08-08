import { useEffect, useState } from "react";

const useFetch = () => {
  const [recipes, setRecipes] = useState([]);
const [isLoading, setIsLoading] =useState(false);
const [error, setError] = useState(null);
  
const fetchRecipes = async () => {
  setIsLoading(true);
  setError(null)
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    setRecipes(data.recipes);
  } catch (error) {
    setError(error.massage);
    console.error("Error fetching recipes:", error)
  }finally {
    setIsLoading(false);
  }

    
  };

  let rating = recipes.filter((recipe) => recipe.rating > 4.8);
  let breakfast = recipes.filter((recipe) => recipe.mealType.includes("Breakfast"));
  let dinner = recipes.filter((recipe) => recipe.mealType.includes("Dinner"));


  useEffect(() => {
    fetchRecipes();
  }, []);

  return { recipes, rating, breakfast, dinner, isLoading, error };
};

export default useFetch;
