import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Services from './Pages/Services';
import Register from './Pages/Register';

const Routes = createAppContainer(
    createSwitchNavigator({
        Home,
    })
)



export default Routes;