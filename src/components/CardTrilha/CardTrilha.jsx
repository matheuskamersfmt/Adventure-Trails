import './CardTrilha.css';
import PropTypes from 'prop-types';
import heart from '../../assets/heart.png';

function CardTrilha(props) {
    const {nome, cidade, estado, duracao, trajeto, dificuldade, tipo, criador, urlImg} = props;
    
    return (
        <div className="card">
            <div className='div-image'>
            <img src={urlImg} /> 
            </div>
            <div className='div-text'>
                <div className='title-card'>
                    <h5>{nome} - {cidade} / {estado}</h5>
                    <img src={heart} height='20px' width='20px' />
                </div>
                <div className='creater'>
                    <p>Por: {criador}</p>
                </div>
                <div className='info'>
                    <div>
                        <p>Duração: {duracao} min</p>
                        <p>Trajeto: {trajeto} km</p>
                        <p>Tipo: {tipo}</p>
                    </div>
                    <div className='div-dificulty'>
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