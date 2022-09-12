import { searchCharactersThunk } from '../../actions';
import { useAppDispatch } from '../../Hooks';
import './filtros.css';

const Filtros = () => {
    const dispatch = useAppDispatch();


    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" onChange={(e) => dispatch(searchCharactersThunk(e.target.value))} />
    </div>
}

export default Filtros;