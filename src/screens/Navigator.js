import { 
    createStackNavigator, 
    createAppContainer 
} from "react-navigation"
import TrainingD2 from './trainingD2'
import ProfileScreen from './Profile'

const AppNavigator = createStackNavigator({
    Home: {
      screen: TrainingD2,
      navigationOptions:{
        headerTitle:'Menu Login'
      }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions:{
            headerTitle:'Profile'
        }
    }
  }
  ,{
    initialRouteName:'Home'
  }
  );
  
  export default createAppContainer(AppNavigator);
  