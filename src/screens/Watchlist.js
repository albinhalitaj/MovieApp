import React from 'react'
import { SafeAreaView, StyleSheet, Text, Pressable } from 'react-native'

function Watchlist({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.watchlist}>
                Your Watch list is empty!
            </Text> 
            <Pressable android_ripple={{
                radius: 20,
                width: '150'
            }} style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.browse}>Browse More</Text>
            </Pressable>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#181818',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    watchlist: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Bahnschrift-Regular'
    },
    button: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
        borderRadius: 20,
        width: 150,
        height: 40
    },
    browse: {
        textTransform: 'uppercase',
        color: 'black',
        fontSize: 13,
        fontWeight: 'bold'
    }
})

export default Watchlist
