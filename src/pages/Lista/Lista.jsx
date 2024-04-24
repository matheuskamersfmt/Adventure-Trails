import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import CardTrilha from '../../components/CardTrilha/CardTrilha.jsx';
import useTrails from '../../hooks/useTrails.js';

function Lista() {

    const [ trails ] = useTrails('/trilhas.json');
    console.log(trails)

    return (
        <>
        <Header />
        <div className='container'>
            {trails.map((trail, index) => (
              <CardTrilha
                key={index}
                nome={trail.nome}
                cidade={trail.cidade}
                estado={trail.estado}
                duracao={trail.duracao}
                trajeto={trail.trajeto}
                dificuldade={trail.dificuldade}
                tipo={trail.tipo}
                criador={trail.criador}
                urlImg={trail.urlImg}
              />
            ))}
        </div>
        <Footer />
      </>
    );
}

export default Lista;