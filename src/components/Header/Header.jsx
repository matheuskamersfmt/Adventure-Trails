import './Header.css';
import header from '../../assets/header.jpg';

function Header() {
    return (<>
        <div className="header">
            <div className='logo'>
                Adventure Trails FD
            </div>
            <div>
                <nav className="navigation">
                    <a>Explorar Trilhas</a>
                    <a>Cadastrar Trilhas</a>
                </nav>    
            </div>
        </div>
        <img src={header} className='image-header' />
        </>
    )
}

export default Header;