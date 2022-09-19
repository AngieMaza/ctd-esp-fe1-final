import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppSelector, useAppDispatch } from "../Hooks";
import { loadCharacters } from "../slices/slices";
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
const {favorites} = useAppSelector ((state) => state.characters);
const dispatch = useAppDispatch ();
useEffect ( () => {
dispatch(loadCharacters());
},[favorites, dispatch]);
console.log(favorites);

if ( favorites.length === 0 ) return <div className="container"> No tienes favoritos en la lista </div>; 
    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger">Test Button</button>
        </div>
        <GrillaPersonajes />
    </div>
}

export default PaginaFavoritos