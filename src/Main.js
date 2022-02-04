import React, { useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Feather'
import Discover from './screens/Discover'
import Watchlist from './screens/Watchlist'
import Settings from './screens/Settings'
import { StyleSheet } from 'react-native'
import { ThemeContext } from './utils/ThemeManager'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { setFavoriteMovies } from './redux/actions'
import { Color } from './constants/Color'
import HomeStackScreen from './screens/HomeStack'

const Tab = createBottomTabNavigator()

function Main() {

    const {theme} = useContext(ThemeContext)

    const dispatch = useDispatch();

    const setWatchList = async () => {
        const favorites =  await AsyncStorage.getItem("watchlist")
        if (favorites === undefined || favorites === null || favorites.length === 0) {
            AsyncStorage.setItem("watchlist",JSON.stringify([]))
        }
    }

    const getWatchlist = async () => {
        const movies =  await AsyncStorage.getItem("watchlist")
        dispatch(setFavoriteMovies(JSON.parse(movies)))
    }

    useEffect(() => {
        setWatchList()
        getWatchlist()
    }, [])
    

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
                    return <Icon name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: theme === 'dark' ? 'white' : Color.darkGray,
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: [
                    {
                    "display": "flex",
                    "backgroundColor": theme === 'dark' ? '#181818' : Color.light,
                    "borderTopColor": theme === 'dark' ? '#181818' : Color.light,
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
                    tabBarLabelStyle: styles.tabLabel,
                    unmountOnBlur: true
                }} name="Discover" component={Discover} />
                <Tab.Screen options={{
                    tabBarLabelStyle: styles.tabLabel,
                    tabBarBadgeStyle: {color: Color.lightGray,backgroundColor: 'grey'}
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
        fontFamily: 'Bahnschrift-Regular',
    }
})

export default Main
