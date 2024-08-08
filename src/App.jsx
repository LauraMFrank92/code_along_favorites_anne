import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navigation from "./navigation/Navigation";
import Footer from "./components/footer/Footer";
import RecipeDetails from "./pages/recipeDetails/RecipeDetails";
import Recipes from "./pages/recipes/Recipes";
import DataLoader from "./components/dataloader/DataLoader";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/recipes", element: <Recipes /> },
    { path: "/recipes/:id", element: <RecipeDetails /> },
  ]);
  return (
    <div className='app-container'>
      <Navigation />
      <div className='app-content'>{routes}</div>
      <Footer />
    </div>
  );
}

export default App;
