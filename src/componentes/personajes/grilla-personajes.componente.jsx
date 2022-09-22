import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../Hooks";
import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
/**
 * Grilla de personajes para la pagina de inicio
 *
 * Debrás agregar las funciones necesarias para mostrar y paginar los personajes
 *
 *
 * @returns un JSX element
 */
const GrillaPersonajes = () => {
  const { characters, loading, favorites} = useAppSelector((state) => state.characters);
  const location = useLocation();
  if (loading) return <div>Searching Characters...</div>;
  console.log(favorites);
  return (
    <div className="grilla-personajes">
      {
        (location.pathname === "/") ? (
          characters.map((character) =><TarjetaPersonaje key={character.id} character={character} />)
        ) : ( favorites.length > 0 ? (favorites.map((character) =><TarjetaPersonaje key={character.id} character={character} />)): null)
      }
    </div>
  );
};
export default GrillaPersonajes;
