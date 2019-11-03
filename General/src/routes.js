import {createAppContainer,createSwitchNavigator} from 'react-navigation';

import Login from './Pages/Login';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login
    })
)

export default Routes; 