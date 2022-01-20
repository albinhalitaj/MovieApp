import React from 'react'
import { StyleSheet, View } from 'react-native'
import LottieView from 'lottie-react-native'

function Loader() {
    return (
        <View style={styles.loader}>
            <LottieView source={require('../assets/images/65556-movies-title-animation.json')} autoPlay loop />
        </View> 
    )
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Loader
