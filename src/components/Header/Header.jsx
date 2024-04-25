import { Link } from 'react-router-dom'
import './Header.css';

function Header() {
    return (<>
        <div className="header">
            <div className='logo'>
                <Link to="/">Adventure Trails FD</Link>
            </div>
            <div>
                <nav className="navigation">
                    <Link to="/lista">Explorar Trilhas</Link>
                    <Link to="/cadastro">Cadastrar Trilhas</Link>
                </nav>    
            </div>
        </div>
        </>
    )
}

export default Header;