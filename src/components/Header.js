import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import { ThemeContext } from '../utils/ThemeManager'

function Header({name,icon}) {

    const {theme} = React.useContext(ThemeContext)

    return (
        <View style={styles.header}>
            <Icon style={styles.icon} name={icon} size={25} color={theme === 'dark' ? 'white' : 'black'} />
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    home: {
        display: 'flex',
        textTransform: 'uppercase',
        marginTop: 12,
        fontSize: 19,
        fontFamily: 'Bahnschrift-Regular'
    },
    homedark: {
        color: 'white',
    },
    homelight: {
        color: 'black'
    },
    icon: {
        margin: 10,
        marginTop: 20
    }
})

export default Header
