import React from 'react'
import {
    View,
    Text,
    FlatList
} from 'react-native'

const ListBook = ({items}) => {
    const renderItem = (item) =>{
        return (
                <Text>{item}</Text>
        )
    }
    return (
        <View>
            <FlatList
            data={items}
            extraData={items}
            keyExtractor={(item, index)=> item}
            renderItem={({item}) => renderItem(item)}
            
            />
        </View>
    )
}

export default ListBook