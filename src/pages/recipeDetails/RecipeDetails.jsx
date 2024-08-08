import { useParams } from "react-router-dom";
import useFetchById from "../../hooks/useFetchById";
import PageHeader from "../../components/pageHeader/PageHeader";

const RecipeDetails = () => {
  const { id } = useParams();
  const {recipe} = useFetchById(8);
  

  return (
    <section>
     <PageHeader title={recipe.name} headerImg={recipe.image} />
    </section>
  );
};

export default RecipeDetails;
