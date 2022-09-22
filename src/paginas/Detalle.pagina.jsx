import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useAppDispatch , useAppSelector } from "../Hooks/index";
import { getIds } from "../utils/utils";
import { useEffect } from "react";
import { loadChapters } from "../slices/sliceChapters";
/*import { useEffect } from "react";
import { loadCharacters } from "../slices/slicePersonajes"; */
/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 *
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 *
 *
 *
 * Uso:
 * ``` <PaginaDetalle /> ```
 *
 * @returns la pagina de detalle
 */
const PaginaDetalle = () => {
  const dispatch = useAppDispatch();
  const { detail } = useAppSelector((state) => state.characters);
  const idsEpisodes =  getIds(detail.episode).toString()
  const { chapters } = useAppSelector((state) => state.chapters);
  
  useEffect ( () => {
    dispatch(loadChapters(idsEpisodes));
  },[idsEpisodes,dispatch]);

  if (detail.id === 0)
    return (
      <div className={"container"}>
        {" "}
        Selecciona un personaje para ver su información{" "}
      </div>
    );
    console.log(chapters);
  return (
    <div className="container">
      <h3>{detail.name}</h3>
      <div className={"detalle"}>
        <div className={"detalle-header"}>
          <img src={detail.image} alt={detail.name} />
          <div className={"detalle-header-texto"}>
            <p>{detail.name}</p>
            <p>Planeta: {detail.origin.name}</p>
            <p>Genero: {detail.gender}</p>
            <p>Especie: {detail.species}</p>
            <p>Estado: {detail.status}</p>
            <p>Ultimo Avistamiento: {detail.location.name}</p>
          </div>
          <BotonFavorito id={detail.id} />
        </div>
      </div>
      <h4>Lista de episodios donde apareció el personaje</h4>
      <div className={"episodios-grilla"}>
        {chapters.results?.length > 1 ? (chapters.results?.map((episode, index) => ( 
          <TarjetaEpisodio key={index} url={episode} />))) : ( chapters.results?.length !== [] ? <TarjetaEpisodio key={chapters.id} url={chapters} /> : null)}
      </div>
    </div>
  );
};

export default PaginaDetalle;
