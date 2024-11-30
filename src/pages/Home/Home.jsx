import { useSelector} from 'react-redux';

// Style
import './Home.css'

//componentes
import Indicators from '../../components/Indicators/Indicators.jsx';
import Categories from '../../components/Categories/Categories.jsx'

function Home() {
    const lista = useSelector((state) => state.lista)
    const orden = useSelector((state) => state.orden)
    const clase = useSelector((state) => state.clase)

    return (
        <div className='Home-Container'>
            <Categories
                lista={lista}
                orden={orden}
                clase={clase}
            />
            <Indicators
                orden={orden}
            />
        </div>
    );
}

export default Home;