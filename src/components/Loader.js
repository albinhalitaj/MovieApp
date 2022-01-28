import React from 'react'
import { StyleSheet, View } from 'react-native'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'

function Loader() {
    const navigation = useNavigation();
    return (
        <View style={styles.loader}>
            <LottieView source={require('../assets/images/65556-movies-title-animation.json')} 
            autoPlay loop={false} onAnimationFinish={() => navigation.replace('Main')}  />
        </View> 
    )
}

const styles = StyleSheet.create({
    loader: {
        backgroundColor: '#181818',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Loader
