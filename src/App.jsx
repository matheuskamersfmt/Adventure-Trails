import CardTrilha from './components/CardTrilha/CardTrilha.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import useTrails from './hooks/useTrails.js';
import './App.css'

function App() {

  const [ trails ] = useTrails('/trilhas.json');
  console.log(trails)

  return (
    <>
      <Header />
      <h1 className='title-home'>Explore trilhas incríveis</h1>
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
  )
}

export default App
