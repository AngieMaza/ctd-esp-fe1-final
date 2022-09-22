import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../Hooks";
import { charactersSlice, loadCharacters } from "../slices/slicePersonajes";
import { useEffect } from "react";
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
  const dispatch = useAppDispatch();
  const { page, name } = useAppSelector((state) => state.characters);
  
  useEffect(() => {
    dispatch(loadCharacters());
  }, [page, name, dispatch]);

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger" onClick={() => dispatch(charactersSlice.actions.cleanFilter())}>
          Limpiar Filtros
        </button>
      </div>
      <Filtros />
      <Paginacion />
      <GrillaPersonajes />
      <Paginacion />
    </div>
  );
};

export default PaginaInicio;
