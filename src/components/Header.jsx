import { Link } from 'react-router-dom'
import '/src/App.css'

const Header = () => {
    return (
        <div className='headerContainer'>
            <nav>
                <Link to="/" className="navLink">Inicio</Link>
                <Link to="/agregar-tarea" className="navLink">Agregar Tarea</Link>
                <Link to="/informe" className="navLink">Informe</Link>
            </nav>
        </div>
    )
}

export default Header