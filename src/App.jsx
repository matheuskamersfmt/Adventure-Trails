import CardTrilha from './components/CardTrilha/CardTrilha.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css'

function App() {

  return (
    <>
      <Header />
      <div className='container'>
          <CardTrilha
            nome='Trilha da Lagoinha do Leste'
            cidade='Florianópolis'
            estado='SC'
            duracao={120}
            trajeto={7}
            dificuldade='Difícil'
            tipo='Praia'
            criador='Matheus Kamers'
            urlImg='https://static.wixstatic.com/media/29a16b_74889ef7dfb948f98d1332313c6f3432~mv2.jpg/v1/fill/w_740,h_416,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/29a16b_74889ef7dfb948f98d1332313c6f3432~mv2.jpg'
          />
      </div>
      <Footer />
    </>
  )
}

export default App
