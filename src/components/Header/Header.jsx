import './Header.css';

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
        </>
    )
}

export default Header;