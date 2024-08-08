import PageHeader from "../components/pageHeader/PageHeader";
import useFetchById from "../hooks/useFetchById";
import Favorites from "../components/favorites/Favorites";
import SectionHeader from "../components/sectionHeader/SectionHeader";
import MyFavorites from "../components/myfavorites/MyFavorites";
import Newsletter from "../components/newsletter/Newsletter";



const Home = () => {
  const {recipe} = useFetchById(6);

  return (
   <section>

    <PageHeader
    title='smagfulde favoritter'
    subTitle= 'her kan der stå en undertitle'
    headerImg={recipe?.image}
    />

    <SectionHeader title='Brugernes Favoritter' />
    <Favorites />
    <SectionHeader title='Mine favoritter' />
    <MyFavorites />
    <Newsletter />

   </section>
  );
};

export default Home;
