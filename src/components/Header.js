import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { ThemeContext } from '../utils/ThemeManager'

function Header({name,icon}) {

    const {theme} = React.useContext(ThemeContext)

    return (
        <View style={styles.header}>
            <Text style={[styles.home,styles[`home${theme}`]]}>
                {name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
    },
    home: {
        display: 'flex',
        fontSize: 25,
        fontFamily: 'Bahnschrift-Regular',
        marginLeft: 15,
        marginTop: Platform.OS === 'ios' ? 12 : 30
    },
    homedark: {
        color: 'white',
    },
    homelight: {
        color: 'black'
    }
})

export default Header
