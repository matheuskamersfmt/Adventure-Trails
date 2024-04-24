import CardTrilha from '../../components/CardTrilha/CardTrilha.jsx';
import useTrails from '../../hooks/useTrails.js';
import styles from './Lista.module.css';
import imgtrilha from "../../assets/imgtrilha.png"

function Lista() {

    const [ trails ] = useTrails('/trilhas.json');
    console.log(trails)

    return (
        <>
        <img src={imgtrilha} className={styles.imgList} />
        <h1 className={styles.titleList}>Explore trilhas incríveis</h1>
        <div className={styles.container}>
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
      </>
    );
}

export default Lista;