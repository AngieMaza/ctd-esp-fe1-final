import { IChapter } from '../../types/types';
import './tarjeta-episodio.css';

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
 * @returns un JSX element 
 */
 type Props = {
    chapter: IChapter;
  };
const TarjetaEpisodio = ({chapter}:Props) => {
    
    return <div className="tarjeta-episodio">
            <h4>{chapter?.name}</h4>
            <div>
                <span>{chapter?.episode}</span>
                <span>{chapter?.air_date}</span>
            </div>
    </div>
}

export default TarjetaEpisodio;