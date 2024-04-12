import './Card.css';
import lagoinha from '../../assets/lagoinha.jpg';

function Card() {
    return (
        <div className="card">
            <img src={lagoinha} height="240px" width="400px" /> 
            <div>
                <h2>Card Title</h2>
                <p>Por: Matheus Kamers</p>
                <div>
                    <p>Duração: 120 min</p>
                    <p>Trajeto 4 km</p>
                    <span>Iniciante</span>
                </div>
            </div>
        </div>
    );
}

export default Card;