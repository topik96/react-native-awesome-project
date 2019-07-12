import { 
    createStackNavigator, 
    createAppContainer 
} from "react-navigation"
import TrainingD2 from './trainingD2'
import RegisterScreen from './RegisterUser'
import ProfileScreen from './Profile'
import ListBookScreen from './ListBook'


const AppNavigator = createStackNavigator({
    Home: {
      screen: TrainingD2,
      navigationOptions:{
        headerTitle:'Menu Login'
      }
    },
    RegisterUser: {
      screen: RegisterScreen,
      navigationOptions:{
          headerLeft:null,
          headerTitle:'Register'
      }
  },
    Profile: {
        screen: ProfileScreen,
        navigationOptions:{
            headerLeft:null,
            headerTitle:'Profile'
        }
    },
    ListBook: {
      screen: ListBookScreen,
      navigationOptions:{
          headerLeft:null,
          headerTitle:'List Book'
      }
  }
  }
  ,{
    initialRouteName:'RegisterUser'
  }
  );
  
  export default createAppContainer(AppNavigator);
  