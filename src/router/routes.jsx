import { createBrowserRouter } from 'react-router-dom';
import App from "../App";
import Home from '../pages/Home/Home';
import Cadastro from '../pages/Cadastro/Cadastro';
import Lista from '../pages/Lista/Lista';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cadastro',
                element: <Cadastro />
            },
            {
                path: '/lista',
                element: <Lista />
            }
        ]
    },
]);

export default routes;