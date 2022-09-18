import { useAppDispatch } from '../../Hooks';
import './filtros.css';
import { loadCharacters } from '../../slices/slices';

const Filtros = () => {
    const dispatch = useAppDispatch();
    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" onChange={(e) => dispatch(loadCharacters(e.target.value))} />
    </div>
}

export default Filtros;