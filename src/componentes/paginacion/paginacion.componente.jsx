import { useAppDispatch, useAppSelector } from '../../Hooks';
import { charactersSlice} from '../../slices/slicePersonajes';
import './paginacion.css';
/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {
    const {characters} = useAppSelector((state) => state.characters);
    const dispatch = useAppDispatch();
    return <div className="paginacion">
        <button disabled={characters.info?.prev === null ? true : false} className={"primary"} onClick={()=> dispatch(charactersSlice.actions.prevPage()) } >Anterior</button>
        <button disabled={characters.info?.next === null ? true : false} className={"primary"} onClick={()=> dispatch(charactersSlice.actions.nextPage()) }>Siguiente</button>
    </div>
}

export default Paginacion;