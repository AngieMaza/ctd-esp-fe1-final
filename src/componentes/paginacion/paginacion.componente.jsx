import { useAppDispatch } from '../../Hooks';
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
    const dispatch = useAppDispatch();
    return <div className="paginacion">
        <button disabled={false} className={"primary"} onClick={()=> dispatch(charactersSlice.actions.prevPage()) } >Anterior</button>
        <button disabled={false} className={"primary"} onClick={()=> dispatch(charactersSlice.actions.nextPage()) }>Siguiente</button>
    </div>
}

export default Paginacion;