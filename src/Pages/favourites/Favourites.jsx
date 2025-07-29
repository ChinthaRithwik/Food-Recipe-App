import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import RecipeItem from "../../recipe-item/RecipeItem";

function Favourites(){
   const { favouritesList} = useContext(GlobalContext); 
  return (
    <div className="py-8 mx-auto container flex flex-wrap justify-center gap-10">
      {favouritesList && favouritesList.length > 0 ? (
        favouritesList.map((recipe) => <RecipeItem recipe={recipe} key={recipe.id} />)
      ) : (
        <p className="lg:text-4xl text-xl text-center text-black w-full">
         Nothing to added toFavourites yet
        </p>
      )}
    </div>
  );
}
export default Favourites;