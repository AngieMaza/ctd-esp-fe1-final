import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../Hooks";
import { loadAllCharacters } from "../../slices/slices";
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
  const { characters, loading } = useAppSelector((state) => state.characters);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadAllCharacters());
  }, [dispatch]);
  if (loading) return <div>Searching Characters...</div>;
  console.log(characters);
  return (
    <div className="grilla-personajes">
      {characters.map((character) => {
        return <TarjetaPersonaje key={character.id} character={character} />;
      })}
    </div>
  );
};
export default GrillaPersonajes;
