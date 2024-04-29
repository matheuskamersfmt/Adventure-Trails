import CardTrilha from '../../components/CardTrilha/CardTrilha.jsx';
import styles from './Lista.module.css';
import imgtrilha from "../../assets/imgtrilha.png"
import { useContext } from 'react';
import { TrilhasContext } from '../../context/TrilhasContext';

function Lista() {

    const { trilhas } = useContext(TrilhasContext);

    return (
        <>
        <img src={imgtrilha} className={styles.imgList} />
        <h1 className={styles.titleList}>Explore trilhas incríveis</h1>
        <div className={styles.container}>
            {trilhas?.map((trilha, index) => (
              <CardTrilha
                key={index}
                nome={trilha.nome}
                cidade={trilha.cidade}
                estado={trilha.estado}
                duracao={trilha.duracao}
                trajeto={trilha.trajeto}
                dificuldade={trilha.dificuldade}
                tipo={trilha.tipo}
                criador={trilha.criador}
                urlImg={trilha.url}
              />
            ))}
        </div>
      </>
    );
}

export default Lista;