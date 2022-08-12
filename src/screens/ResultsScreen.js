import React from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const ResultsScreen = ({navigation, route}) => {

    React.useEffect( () => {
        const {searchValue} = route.params;
        console.log('searchValue', searchValue);
    }, []);

    return (
        <View style={[styles.container, styles.center]}>
            <Text>Results</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ResultsScreen;