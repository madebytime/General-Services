import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Services from './Pages/Services';

const Routes = createAppContainer(
    createSwitchNavigator({
        Home,
        Login,
        Services
    })
)

export default Routes;