import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/Feather';
import Home from './screens/Home';
import Discover from './screens/Discover';
import Watchlist from './screens/Watchlist';
import Settings from './screens/Settings';
import { StyleSheet } from 'react-native';
import { ThemeContext } from './utils/ThemeManager';
import MovieDetails from './screens/MovieDetails';
import ViewAll from './screens/ViewAll';
import Loader from './components/Loader';


const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Splash" component={Loader} options={{headerShown: false}} />
            <HomeStack.Screen name="Main" component={Home} options={{headerShown: false}} />
            <HomeStack.Screen name="ViewAll" component={ViewAll} options={{headerShown: false}} />
            <HomeStack.Screen name="MovieDetails" component={MovieDetails} options={{headerShown: false}} />
        </HomeStack.Navigator>
    )
}

function Main() {

    const {theme} = React.useContext(ThemeContext)

    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home'
                    } else if (route.name === 'Settings') {
                        iconName = 'settings';
                    } else if (route.name === 'Discover') {
                        iconName = 'search'
                    } else {
                        iconName = 'list'
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: theme === 'dark' ? 'white' : 'red',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: [
                    {
                    "display": "flex",
                    "backgroundColor": theme === 'dark' ? '#181818' : 'white',
                    "borderTopColor": theme === 'dark' ? '#181818' : 'white',
                    "height": 60
                    },
                    null
                ]
            })}
            >
                <Tab.Screen options={{
                    tabBarLabelStyle: styles.tabLabel
                }} name="Home" component={HomeStackScreen} />
                <Tab.Screen options={{
                    tabBarLabelStyle: styles.tabLabel
                }} name="Discover" component={Discover} />
                <Tab.Screen options={{
                    tabBarLabelStyle: styles.tabLabel
                }} name="Watchlist" component={Watchlist} />
                <Tab.Screen options={{
                    tabBarLabelStyle: styles.tabLabel
                }} name="Settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    tabLabel: {
        fontSize: 12,
        marginBottom: 10,
        fontFamily: 'Bahnschrift-Regular'
    }
})

export default Main
