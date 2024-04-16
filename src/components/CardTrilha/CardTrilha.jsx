import './CardTrilha.css';
import PropTypes from 'prop-types';

function CardTrilha(props) {
    const {nome, cidade, estado, duracao, trajeto, dificuldade, tipo, criador, urlImg} = props;
    
    return (
        <div className="card">
            <img src={urlImg} height="350px" width="400px" /> 
            <div>
                <h2>{nome} - {cidade} / {estado}</h2>
                <div className='creater'>
                    <p>Por: {criador}</p>
                </div>
                <div className='info'>
                    <div>
                        <p>Duração: {duracao} min</p>
                        <p>Trajeto: {trajeto} km</p>
                        <p>Tipo: {tipo}</p>
                    </div>
                    <div>
                        <span className='dificulty'>{dificuldade}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

CardTrilha.propTypes = {
    nome: PropTypes.string.isRequired,
    cidade: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    duracao: PropTypes.number.isRequired,
    trajeto: PropTypes.number.isRequired,
    dificuldade: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired,
    criador: PropTypes.string.isRequired,
    urlImg: PropTypes.string.isRequired,
};

export default CardTrilha;