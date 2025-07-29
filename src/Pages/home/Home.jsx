import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import RecipeItem from "../../recipe-item/RecipeItem";

function Home() {
  const { loading, recipeList, searchParam } = useContext(GlobalContext);
  if (loading) {
    return <div>Loading recipes...</div>;
  }
  return (
    <div className="py-8 mx-auto container flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((recipe) => <RecipeItem recipe={recipe} key={recipe.id} />)
      ) : (
        <p className="lg:text-4xl text-xl text-center text-black w-full">
          {searchParam === '' ? null : 'Nothing to show..Search Something'}
        </p>
      )}
    </div>
  );
}
export default Home;
