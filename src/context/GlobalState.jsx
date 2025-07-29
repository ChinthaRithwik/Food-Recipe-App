import { createContext, use, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favouritesList, setFavouritesList] = useState([]);
  const navigate=useNavigate();


  function handleAddToFavourites(getCurrRecipe) {
    let cpyFavouritesList = [...favouritesList];
    let index = cpyFavouritesList.findIndex(
      (item) => item.id === getCurrRecipe.id
    );
    if(index===-1){
      cpyFavouritesList.push(getCurrRecipe);
    }else{
      cpyFavouritesList.splice(index,1);
    }
    setFavouritesList(cpyFavouritesList);
  }

  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      let response = await fetch(
        `${API_URL}?search=${searchParam}&key=${API_KEY}`
      );
      let recipe = await response.json();
      if (recipe?.data?.recipes) {
        setRecipeList(recipe.data.recipes);
        setLoading(false);
        setSearchParam("");
        navigate('/');
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearchParam("");
    }
  } 
  
  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipeList,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavourites,
        favouritesList
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export default GlobalState;
