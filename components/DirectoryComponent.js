import React from 'react';
import {Flatlist} from 'react-native';
import {ListItem } from 'react-native-elements';

function Directory(props) {
    const renderDirectoryItem =({item}) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.description}
                onPress={()=>props.onPress(item.id)}
                leftAvatar={{source: require('./images/react-lake.jpg')}}
            />
        )
    }
    return (
        
            <Flatlist
                data={props.campsites}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
    );
}

export default Directory;