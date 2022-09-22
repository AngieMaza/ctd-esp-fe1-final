import { useAppDispatch } from '../../Hooks';
import { charactersSlice} from '../../slices/slicePersonajes';

import './filtros.css';

const Filtros = () => {
    const dispatch = useAppDispatch();
    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" onChange={(e) => dispatch(charactersSlice.actions.nameToFilter(e.currentTarget.value))} />
    </div>
}
export default Filtros;