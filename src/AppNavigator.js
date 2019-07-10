import { createStackNavigator, createAppContainer } from "react-navigation"
import HomeScreen from './screens/Home'
import DetailBookScreen from './screens/DetailBook'
import CartWithReduxScreen from './screens/CartWithRedux'

const AppNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions:{
        headerTitle:'Home'
      }
    },
    CartWithRedux:{
      screen: CartWithReduxScreen
    },
    DetailBook: {
        screen: DetailBookScreen,
        navigationOptions:{
            headerTitle:'Detail'
          }
    },
  }
  ,{
    initialRouteName:'CartWithRedux'
  }
  );
  
  export default createAppContainer(AppNavigator);
  