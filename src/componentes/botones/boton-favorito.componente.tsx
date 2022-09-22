import { useAppDispatch, useAppSelector } from "../../Hooks/index";
import { charactersSlice } from "../../slices/slicePersonajes";
import './boton-favorito.css';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
 type Props = {
    id: number;
  };
const BotonFavorito = ({id}: Props) => {

const {favoritesId} = useAppSelector((state) => state.characters);
const dispatch = useAppDispatch();

const handleClick = () => {
    if(favoritesId.length > 0) {
      favoritesId.includes(id) ? (charactersSlice.actions.deleteFavorite(id)) :
      dispatch(charactersSlice.actions.addFavorites(id))
    } else {
      dispatch(charactersSlice.actions.addFavorites(id))
    }
  };

const isFavorite = favoritesId.includes(id);
    const src = isFavorite ? "/imagenes/star-filled.png" : "/imagenes/star.png"
    return <div className="boton-favorito" onClick={handleClick}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;