
import RecipeCard from "../../components/recipeCard/RecipeCard";
import useFetchById from "../../hooks/useFetchById";
import PageHeader from "../../components/pageHeader/PageHeader";
import Button from "../../components/button/Button";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import DataLoader from "../../components/dataloader/DataLoader";



const Recipes = () => {
  const { recipes, breakfast, dinner, isLoading, error } = useFetch();
  const { recipe } = useFetchById(20);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = {
    All: recipes,
    Breakfast: breakfast,
    Dinner: dinner
  };
  const filteredRecipes = filters[activeFilter] || recipes;
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setFilteredRecipes(filters[filter]);
  };

  return (
    <>
    {
      isLoading ? (<DataLoader/>) : (
       <section>
      <PageHeader title='Opskrifter' headerImg={recipe?.image} />

      <div className='filterButton'>
        <Button title='All' className={activeFilter === "All" ? "active" : ""} 
          onClick={() => handleFilterChange("All")} />

        <Button title='Breakfast' className={activeFilter === "Breakfast" ? "active" : ""} 
          onClick={() => handleFilterChange("Breakfast")} />

        <Button title='Dinner' className={activeFilter === "Dinner" ? "active" : ""} 
          onClick={() => handleFilterChange("Dinner")} />

      </div>

      {error && <p>kunne ikke finde opskrifter. Fejl: {error}</p>}

      <div className='recipes'>
        {filteredRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </section> 
      )
    }
    
    </>
  );
};

export default Recipes;

/* const Recipes = () => {
  const { recipes, breakfast } = useFetch();
  const { recipe } = useFetchById(20);
  const [filteredRecipes, setFilteredRecipes]= useState([...breakfast])
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = {
    All: recipes,
    Breakfast: breakfast
  }

  const handleFilterCange = (filter) => {
    setActiveFilter(filter);
    setFilteredRecipes(filters[filter]);
  };

  const recipesArray = filteredRecipes?.length > 0 ? filteredRecipes : recipes

  return (
    <section>
      <PageHeader title='Opskrifter' headerImg={recipe?.image} />

      <div className='filterButton' >

        <Button title='All' className={activeFilter === "All" ? "active" : ""} 
        onClick={() => handleFilterCange("All")}/>

        <Button title='Breakfast' className={activeFilter === "Breakfast" ? "active" : ""} 
        onClick={() => handleFilterCange("Breakfast")}/>
      </div>

      <div className='recipes'>
        {recipesArray.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />


        ))}
      </div>
    </section>
  );
};

export default Recipes; */


