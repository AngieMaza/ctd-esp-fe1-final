import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch } from "../Hooks";
import { useEffect, useState } from "react";
import { loadAllCharacters } from "../slices/slices";
 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
    const [clean, setClean] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(loadAllCharacters());
    }, [dispatch]);

    const handlerClick = () => {
        setClean(true);
        dispatch(loadAllCharacters());
        }

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={handlerClick}>Limpiar Filtros</button>
        </div>
        <Filtros clean={clean} />
        <Paginacion />
        <GrillaPersonajes />
        <Paginacion />
    </div>
}

export default PaginaInicio