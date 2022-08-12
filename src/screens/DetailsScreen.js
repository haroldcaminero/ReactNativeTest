import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const imageWidth = windowWidth - 40;

const DetailsScreen = ({navigation, route}) => {

    const {item} = route.params;
    console.log('item', item);
    const tags = item.tags.split(",");
    return (
        <View style={[styles.container, styles.inner]}>
            <Image style={styles.image} resizeMode={'contain'} source={{uri: item.largeImageURL}}/>
            <Text style={styles.text}>Author: {item.user}</Text>
            <Text style={[styles.text, {fontSize: 14}]}>Tags:</Text>
            <ScrollView horizontal={true}>
                {tags.map( (tag, idx) => {
                    return (
                        <>
                            <TouchableOpacity onPress={ () => navigation.push('Results', {searchValue: tag.trim()}) } key={idx} activeOpacity={0.8}>
                                <Text style={[styles.text, {fontSize: 16, color: 'blue'}]}>{tag.trim()}</Text>
                            </TouchableOpacity> 
                            {idx < (tags.length - 1) ?
                            <Text>, </Text> : null } 
                        </>
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    inner: {
        padding: 20,
        alignItems: 'center'
    },
    image: {
        width: imageWidth, 
        height: imageWidth,
        marginBottom: 10
    },
    text: {
        fontSize: 18,
        color: '#000',
        marginBottom: 10
    }
});

export default DetailsScreen;