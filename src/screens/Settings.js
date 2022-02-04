import React from 'react'
import { StyleSheet, View, Text, Animated, Platform } from 'react-native'
import Header from '../components/Header'
import { ThemeContext } from '../utils/ThemeManager'
import Icon from 'react-native-vector-icons/Feather';
import { Color } from '../constants/Color';

function Settings() {

    const {theme, changeTheme} = React.useContext(ThemeContext)

    const isDark = theme === 'dark' ? true : false;

    return (
        <View style={styles(isDark).container}>
            <Header name="Settings" icon='settings' />
            <View style={{marginTop: 40}}>
                <Text style={styles(isDark).title}>Apperance</Text>
                <Animated.View style={styles(isDark).list}>
                    <Text style={styles(isDark).text}>Dark mode: {theme === 'dark' ? 'on' : 'off'}</Text>
                    <Icon onPress={changeTheme} style={styles(isDark).icon} name={isDark ? 'sun' : 'moon'} size={22} color={isDark ? Color.light : Color.dark} />
                </Animated.View>
            </View>
            <View style={{marginTop: 40}}>
                <Text style={styles(isDark).title}>Privacy</Text>
                <View style={styles(isDark).list}>
                    <Text style={styles(isDark).text}>Read Privacy & Legal</Text>
                </View>
            </View>
            <Text style={styles(isDark).version}>Version 1.0.0</Text>
        </View>
    )
}

const styles = (isDark) => StyleSheet.create({
    container: {
        backgroundColor: isDark ? Color.dark : Color.light,
        height: '100%'
    },
    title: {
        color: isDark ? Color.light : Color.dark,
        fontFamily: 'Bahnschrift-Regular',
        fontSize: 15,
        marginLeft: 20,
        marginBottom: 10
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 'auto',
        height: 50,
        backgroundColor: isDark ? Color.darkGray : Color.lightGray,
        borderRadius: 5,
        marginLeft: Platform.OS === 'android' ? 20 : 10,
        marginRight: Platform.OS === 'android' ? 20 : 10
    },
    text: {
        paddingTop: 13,
        paddingLeft: 20,
        fontSize: 17,
        fontFamily: 'Bahnschrift-Regular',
        color: isDark ? Color.light : '#1f2937'
    },
    switch: {
        marginRight: 10
    },
    version: {
        width: 'auto',
        color: 'gray',
        textAlign: 'center',
        marginTop: 5
    },
    icon: {
        paddingTop: 12,
        paddingRight: 25 
    }
})

export default Settings
