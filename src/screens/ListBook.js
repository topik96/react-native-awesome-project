import React from 'react'
import{
    View,
    Text,
    FlatList,
    ActivityIndicator,
    Image,
    BackHandler,
    Dimensions
} from 'react-native'
import API from '../utils/Api'
const {width} = Dimensions.get('window')

export default class ListBookScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            books:[],
            isLoading:true
        }
    }
    handleBackPress(){
        return true
    }
      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
      }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        API.getBooks()
        .then(res=>{
            // console.log(res.data.data)
            this.handleState('books', res.data.data)
            this.handleState('isLoading', false)
        })
        .catch(err=>{
            console.log(err.message)
            this.handleState('isLoading', false)
        })
    }
    
    handleState(stateKey, value){
        this.setState({[stateKey]: value})
    }

    renderListBook(item){
        return(
            <View 
                style={{
                    borderWidth:1,
                    borderColor:'gray',
                    borderRadius:4,
                    paddingRight: 8,
                    paddingLeft: 8,
                    marginBottom: 16,
                    overflow:'hidden'
                }}
            >
                <Image 
                    style={{
                        width:width - 32,
                        height:100,
                        alignSelf:'center'
                    }}
                    source={{uri:item.url}}/>
                <Text>{item.title}</Text>
            </View>
        )
    }

    render() {
        const { books, isLoading } = this.state
        if(isLoading){
            return (<ActivityIndicator size={"large"} />)
        }else{
            return (
                <View 
                    style={{
                        flex:1,
                        flexDirection: 'column',
                    }}
                >
                    <FlatList
                        style={{
                            flex:1,
                            padding: 32
                        }}
                        data={books}
                        keyExtractor={(item, index)=>item.id.toString()}
                        renderItem={(item)=>this.renderListBook(item.item)}
                    />
                </View>
            )
        }
       
    }
}