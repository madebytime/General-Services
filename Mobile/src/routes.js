import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Servicos from './pages/Servicos';
import Recuperacao from './pages/Recuperacao';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Cadastro,
        Servicos,
        Recuperacao
    })
)

export default Routes;