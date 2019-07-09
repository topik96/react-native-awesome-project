import { createStackNavigator, createAppContainer } from "react-navigation"
import HomeScreen from './screens/Home'
import DetailBookScreen from './screens/DetailBook'

const AppNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions:{
        headerTitle:'Home'
      }
    },
    DetailBook: {
        screen: DetailBookScreen,
        navigationOptions:{
            headerTitle:'Detail'
          }
    },
  }
  ,{
    initialRouteName:'Home'
  }
  );
  
  export default createAppContainer(AppNavigator);
  