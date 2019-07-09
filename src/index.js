import React from 'react';
import { 
  View, 
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  Platform
} from 'react-native';
import { image } from './assets/images'
import Cart from './components/cart'
import InputQTY from './components/input-qty'

const { width } = Dimensions.get('window')

export default class Home extends React.Component {
  constructor(props){
      super(props)
      this.state = {
          total:0
      }
  }

  //Life cycle react-native
  UNSAFE_componentWillMount = () => {
    console.log('componentWillMount')
  }

  componentDidMount = () => {
    console.log('componentDidMount')
  }

  shouldComponentUpdate = (props, state) => {
    console.log('shouldComponentUpdate, current state = ', state)
    return true
  }

  UNSAFE_componentWillUpdate = () => {
    console.log('componentWillUpdate')
  }

  componentDidUpdate = () => {
    console.log('componentDidUpdate')
  }

  incrementItem = () => {
    this.setState({ total: ++this.state.total })
  }

  decrementItem = () => {
    this.setState({ total: this.state.total == 0 ? 0 : --this.state.total  })
  }

  
  render() {
    console.log('render')

    //RENDER BOX FLEXBOX
    // return(
    //   <View style={styles.container}> 
    //      <View style={[styles.box,{backgroundColor: 'blue'}]}/>
    //      <View style={[styles.box,{backgroundColor: 'red'}]}/>
    //      <View style={[styles.box,{backgroundColor: 'green'}]}/>
    //   </View>
    // )


    //RENDER UPDATE CART
    // return(
    //   <View>
    //      <TouchableOpacity
    //      onPress={this.incrementItem}
    //      >
    //        <Text>+</Text>
    //      </TouchableOpacity>
    //   </View>
    // )

    // RENDER COMPONENT (props & state)
    // return (
    //   <View style={[styles.container,{alignItems:'center',justifyContent:'center'}]}>
    //     <InputQTY
    //       incrementItem={this.incrementItem}
    //       decrementItem={this.decrementItem}
    //       itemName={'Indomie'}
    //     />
    //   <Cart count={this.state.total}/>
    //   </View>
    // );

    //RENDER DIFFERENT PLATFORM
    return(
      <View 
        style={[
          styles.container,
          {
            justifyContent:'center', 
            alignItems:'center'
          }
        ]}>
        <Image
         style={styles.imageStyle}
         source={image.osLogo}/>
         <Text>{Platform.OS === 'ios' ? 'iOS FANBOY' : 'ANDROID FANBOY'}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection:'column',
    alignContent:'center',
    // ...Platform.select({
    //   ios:{
    //     backgroundColor: '#e74c3c',
    //   },
    //   android:{
    //     backgroundColor:'#e67e22'
    //   }
    // })
  },
  box: {
    height: 100,
    width: 50
  },
  imageStyle:{
    width:100,
    height: 100,
    alignSelf:'center',
    resizeMode:'contain'
  }
})