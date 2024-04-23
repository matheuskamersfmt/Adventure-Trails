import { createBrowserRouter } from 'react-router-dom';

import App from "../App";
import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Lista from '../pages/Lista';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
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
]);

export default routes;