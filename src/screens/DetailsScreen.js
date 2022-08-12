import React from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const DetailsScreen = ({navigation}) => {
    return (
        <View style={[styles.container, styles.center]}>
            <Text>Details</Text>
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

export default DetailsScreen;