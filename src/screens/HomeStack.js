import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Loader from '../components/Loader';
import Home from './Home';
import MovieDetails from './MovieDetails';
import ViewAll from './ViewAll';

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Splash" component={Loader} options={{headerShown: false}} />
            <HomeStack.Screen name="Main" component={Home} options={{headerShown: false}} />
            <HomeStack.Screen name="ViewAll" component={ViewAll} options={{headerShown: false}} />
            <HomeStack.Screen name="MovieDetails" component={MovieDetails} options={{headerShown: false}} />
        </HomeStack.Navigator>
    )
}