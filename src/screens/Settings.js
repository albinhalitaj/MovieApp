import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Switch } from 'react-native'
import Header from '../components/Header'
import { ThemeContext } from '../utils/ThemeManager'

function Settings() {

    const {theme, changeTheme} = React.useContext(ThemeContext)
    const [value, setValue] = useState(true);

    const toggleTheme = () => {
        changeTheme()
        theme === 'dark' ? setValue(false) : setValue(true)
    }

    useEffect(() => {
        theme === 'dark' ? setValue(true) : setValue(false)
    }, []);
    

    return (
        <View style={styles[`container${theme}`]}>
            <Header name="Settings" icon='settings' />
            <View style={[styles.list,styles[`list${theme}`]]}>
                <Text style={[styles.text,styles[`text${theme}`]]}>Theme: {theme}</Text>
                <Switch style={styles.switch} value={value} onValueChange={toggleTheme} />
            </View>
            <Text style={{color: 'white',marginTop: 20}}>Privacy</Text>
            <View style={[styles.list,styles[`list${theme}`]]}>
                <Text style={[styles.text,styles[`text${theme}`]]}>Read Privacy & Legal</Text>
            </View>
            <Text style={styles.version}>Version 1.0.0</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerdark: {
        backgroundColor: '#181818',
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
    },
    listdark: {
        backgroundColor: '#373737',
    },
    listlight: {
        backgroundColor: '#e5e7eb',
    },
    text: {
        paddingTop: 13,
        paddingLeft: 20,
        fontSize: 17,
        fontFamily: 'Bahnschrift-Regular'
    },
    textdark: {
        color: 'white',
    },
    textlight: {
        color: '#1f2937'
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
