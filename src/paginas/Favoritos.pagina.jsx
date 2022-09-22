import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppSelector, useAppDispatch } from "../Hooks";
import { charactersSlice, loadCharactersFavorites } from "../slices/slicePersonajes";
import { useEffect } from "react";
/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
const {favoritesId, favorites} = useAppSelector ((state) => state.characters);
const dispatch = useAppDispatch ();
useEffect ( () => {
dispatch(loadCharactersFavorites())
},[favoritesId, dispatch]);
if (favorites.length === 0 ) return <div className="container"> No tienes Favoritos</div>
return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={()=> dispatch(charactersSlice.actions.deleteAllFavorites())}>Eliminar Favoritos</button>
        </div>
        <GrillaPersonajes />
    </div>
}

export default PaginaFavoritos