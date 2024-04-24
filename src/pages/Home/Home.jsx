import imgTrilha from "../../assets/imgtrilha.png";
import styles from "./Home.module.css";
import sharePic from "../../assets/sharePic.png"

function Home() {
  return (
    <>
      <div className={styles.divImage}>
        <img src={imgTrilha} className={styles.imageHeader} />
        <div className={styles.textHeader}>
          <h3>Que tal aproveitar um tempo com a natureza?</h3>
          <p>
            Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas
            aventuras e inspire-se com as experiências de outros aventureiros.
            Prepare-se para explorar novos horizontes e se conectar com a
            natureza através do Adventure Trails!
          </p>
          <button>Explorar trilhas</button>
        </div>
      </div>
      <div className={styles.containerTexts}>
        <div className={styles.exploreTrails}>
          <h1 className={styles.titleHome}>Explore trilhas incríveis</h1>
          <p>
            O Adventure Trails FD é seu portal para explorar e compartilhar as
            melhores trilhas para trekking e ciclismo ao redor do mundo.
            Descubra rotas deslumbrantes, desde caminhos tranquilos por
            florestas exuberantes até trilhas desafiadoras em montanhas
            majestosas. Encontre informações detalhadas sobre cada trilha,
            incluindo distância, dificuldade, pontos de interesse naturais e
            dicas úteis para uma experiência eco-friendly.
          </p>
          <div className={styles.exploreButton}>
            <button>Explorar trilhas</button>
          </div>
        </div>
        <div className={styles.sharePic}>
          <div className={styles.shareText}>
            <h1>Compartilhe fotos, dicas e localização das suas trilhas favoritas</h1>
            <button>Cadastrar nova trilha</button>
          </div>
            <img src={sharePic} className={styles.shareImg} />
        </div>
      </div>
    </>
  );
}

export default Home;
