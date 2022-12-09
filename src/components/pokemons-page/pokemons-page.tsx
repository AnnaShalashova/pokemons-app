import PokemonDetails from "../pokemon-details";
import Itemslist from "../items-list";
import ErrorIndicator from "../error-indicator";
import {setSearchText} from "../../redux/pokemonsSlice";
import { useAppSelector, useAppDispatch } from "../hooks";
import "./pokemons-page.css";
import { textLibrary } from "../languages";

const PokemonsPage = () => {
  const errorPokemons = useAppSelector((state) => state.pokemons.error);
  const searchText = useAppSelector((state) => state.pokemons.searchText);
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();

  const currentLng = useAppSelector((state) => state.language.language);
  const searchPlaceholder = textLibrary[currentLng].search;

  const changeSearchText = (e: React.FormEvent) => {
    dispatch(setSearchText((e.target as HTMLInputElement).value));
  }

  if (errorPokemons) {
    return <ErrorIndicator />
  }

  return (
    <div className={`pokemon-page pokemon-page-${theme}`}>
      <input className={`search-pokemon form-control me-sm-2 search-pokemon-${theme}`} type="text" 
          placeholder={searchPlaceholder} value={searchText}
          onInput={changeSearchText}>
        </input>
      <div className="pokemons-page-container">
        <Itemslist />
        <PokemonDetails />
      </div>
    </div>
  )
}

export default PokemonsPage;