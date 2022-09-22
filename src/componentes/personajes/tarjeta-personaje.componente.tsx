import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";
import { ICharacter } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../Hooks/index";
import { charactersSlice } from "../../slices/slicePersonajes";
/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 *
 *
 * @returns un JSX element
 */
type Props = {
  character: ICharacter;
};
const TarjetaPersonaje = ({ character }: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <div className="tarjeta-personaje">
      <img src={character.image} alt="Rick Sanchez" onClick={()=> {
        dispatch(charactersSlice.actions.onDetail(character));
        navigate("/detalle");
      }} />
      <div className="tarjeta-personaje-body">
        <span>{character.name}</span>
        <BotonFavorito id={character.id}/>
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
