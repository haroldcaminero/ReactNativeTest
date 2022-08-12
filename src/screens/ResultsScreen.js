import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableHighlight,
    Image,
    Dimensions,
    ActivityIndicator
} from 'react-native';

import {PIXABAY_URL, PIXABAY_KEY} from "@env";
import { ResultContext } from "../contexts/ResultContext";
import Helper from '../helpers';

const itemsPerRow = 3;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const itemGap = 20;
const imageWidth = (windowWidth - 80) / itemsPerRow;
const imageHeight = imageWidth;

const ResultsScreen = ({navigation, route}) => {

    const {resultData, setResultData, setResultItem} = React.useContext(ResultContext);

    const [refreshing, setRefreshing] = React.useState(false);
    const [totalResults, setTotalResults] = React.useState(0);
    const [page, setPage] = React.useState(1);

    React.useEffect( () => {
        const {searchValue} = route.params;
        navigation.setOptions({
            title: 'Results for "' + searchValue + '"'
        });
    }, []);

    React.useEffect( () => {
       loadResult();
    }, [page]);

    const loadResult = () => {
        if(!refreshing){
            const {searchValue} = route.params;
            setRefreshing(true);
            Helper.callAPI(
                PIXABAY_URL + '?key=' + PIXABAY_KEY + '&q=' + encodeURI(searchValue) + '&page=' + page + '&per_page=' + 20, 
                function(status, response){
                    setRefreshing(false);
                    if(status){
                        setResultData([...resultData].concat(response.hits));
                        setTotalResults(response.total);
                    }
                    else{
                        console.log('error', response);
                    }
                }
            );
        }
    }

    const renderItem = ({item}) => {
        return (
            <View style={{flexDirection: 'row', marginBottom: itemGap}}>
                {
                    item.map( (eachItem, itemIdx) => {
                        return (
                            <TouchableHighlight onPress={ () => {
                                navigation.push('Details', {item: eachItem});
                            }} style={{marginRight: itemIdx == (itemsPerRow - 1) ? 0 : itemGap }} key={eachItem.id + Math.floor(Math.random() * 1000)}>
                                <Image style={{width: imageWidth, height: imageHeight}} resizeMode={'cover'} source={{uri: eachItem.previewURL}}/>
                            </TouchableHighlight>
                        );
                    })
                }
                
            </View>
        );
    }

    const chunks = Helper.sliceIntoChunks(resultData, itemsPerRow);

    return (
        <View style={[styles.container, styles.inner]}>
            <Text style={styles.text}>Total Results: {totalResults}</Text>
            <FlatList 
                style={{flex: 1}}
                data={chunks}
                renderItem={renderItem}
                keyExtractor={(item, idx) => idx}
                onEndReached={ () => {
                    setPage(page + 1);
                }}
            />
            {refreshing ?
            <ActivityIndicator style={{position: 'absolute', zIndex: 10, top: (windowHeight/2) - 25, left: ((windowWidth/2) - 25)}} size="large" color="#00ff00" />
            : null }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    inner: {
        padding: 20
    },
    text: {
        fontSize: 14,
        color: '#000',
        marginBottom: 20
    }
});

export default ResultsScreen;