import React from 'react'
import { StyleSheet, View } from 'react-native'
import Header from '../components/Header'

function Settings() {
    return (
        <View style={styles.container}>
            <Header name="Settings" icon='settings' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#181818',
        height: '100%'
    }
})

export default Settings
