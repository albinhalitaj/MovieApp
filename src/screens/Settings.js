import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Switch } from 'react-native'
import Header from '../components/Header'
import { ThemeContext } from '../utils/ThemeManager'

function Settings() {

    const {theme, changeTheme} = React.useContext(ThemeContext)
    const [value, setValue] = useState(true);

    const isDark = theme === 'dark' ? true : false;

    const toggleTheme = () => {
        changeTheme()
        theme === 'dark' ? setValue(false) : setValue(true)
    }

    useEffect(() => {
        theme === 'dark' ? setValue(true) : setValue(false)
    }, []);
    

    return (
        <View style={styles(isDark).containerdark}>
            <Header name="Settings" icon='settings' />
            <View style={styles(isDark).list}>
                <Text style={styles(isDark).text}>Dark mode: {theme === 'dark' ? 'on' : 'off'}</Text>
                <Switch style={styles.switch} value={value} onValueChange={toggleTheme} />
            </View>
            <Text style={{color: 'white',marginTop: 20}}>Privacy</Text>
            <View style={styles(isDark).list}>
                <Text style={styles(isDark).text}>Read Privacy & Legal</Text>
            </View>
            <Text style={styles(isDark).version}>Version 1.0.0</Text>
        </View>
    )
}

const styles = (isDark) => StyleSheet.create({
    containerdark: {
        backgroundColor: isDark ? '#181818' : '#d1d5db',
        height: '100%'
    },
    containerlight: {
        backgroundColor: '#d1d5db',
        height: '100%',
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        width: 'auto',
        height: 50,
        backgroundColor: isDark ? '#373737' : '#e5e7eb'
    },
    text: {
        paddingTop: 13,
        paddingLeft: 20,
        fontSize: 17,
        fontFamily: 'Bahnschrift-Regular',
        color: isDark ? 'white' : '#1f2937'
    },
    switch: {
        marginRight: 10
    },
    version: {
        width: 'auto',
        color: 'gray',
        textAlign: 'center',
        marginTop: 5
    }
})

export default Settings
