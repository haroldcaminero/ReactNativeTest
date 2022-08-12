import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image,
    TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const SearchScreen = ({navigation}) => {

    const [searchValue, setSearchValue] = React.useState(''); 

    const handleSearch = () => {
        if(searchValue.trim() != ''){
            console.log(' i am ready');
            navigation.navigate('Results', {searchValue});
        }
    }

    return (
        <View style={[styles.container, styles.inner]}>
            <Image style={styles.logo} source={require('../assets/pixabay_logo.png')}/>
            <Text style={styles.text}>Search images from Pixabay</Text>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    value={searchValue}
                    onChangeText={ (text) => setSearchValue(text)}
                />
                <TouchableHighlight onPress={ () => handleSearch() } underlayColor={'#f4f4f4'} style={styles.btn}>
                    <Icon name={'search'} size={30} color={'#000'}/>
                </TouchableHighlight>
            </View>
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
        alignItems: 'center',
    },
    logo: {
        width: 100, 
        height: 100, 
        marginBottom: 10
    },
    text: {
        color: '#000',
        fontSize: 16
    },
    searchContainer: {
        marginTop: 30,
        flexDirection: 'row',
        width: '100%'
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        flex: 1
    },
    btn: {
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
    
});

export default SearchScreen;