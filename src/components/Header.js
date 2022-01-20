import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

function Header({name,icon}) {
    return (
        <View style={styles.header}>
            <Icon style={styles.icon} name={icon} size={25} color='white' />
            <Text style={styles.home}>
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
        color: 'white',
        textTransform: 'uppercase',
        marginTop: 12,
        fontSize: 19,
        fontFamily: 'Bahnschrift-Regular'
    },
    icon: {
        margin: 10,
        marginTop: 20
    }
})

export default Header
