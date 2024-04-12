import './Footer.css';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import instragram from '../../assets/instagram.png';

function Footer() {
    return (
        <div className="footer">
            <div>
                Adventure Trails FD
            </div>
            <div>
                <nav className="navigation">
                    <a><img src={github} width="24px" height="24px" /></a>
                    <a><img src={linkedin} width="24px" height="24px" /></a>
                    <a><img src={instragram} width="24px" height="24px" /></a>
                </nav>    
            </div>
        </div>
    )
}

export default Footer;