import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchScreen from './src/screens/SearchScreen';
import ResultsScreen from './src/screens/ResultsScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const MainStack = createNativeStackNavigator();

const RootStackScreen = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="Search" component={SearchScreen}/> 
            <MainStack.Screen name="Results" component={ResultsScreen}/> 
            <MainStack.Screen name="Details" component={DetailsScreen}/> 
        </MainStack.Navigator>
    );
}

export default App = () => {
    return (
        <NavigationContainer>
            <RootStackScreen />
        </NavigationContainer>
    );
}