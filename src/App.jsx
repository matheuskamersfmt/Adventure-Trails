import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import "./App.css";
import { TrilhasContextProvider } from "./context/TrilhasContext.jsx";

function App() {
  return (
    <>
      <TrilhasContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </TrilhasContextProvider>
    </>
  );
}

export default App;
