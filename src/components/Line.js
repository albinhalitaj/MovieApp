import React from 'react'
import { StyleSheet,View } from 'react-native'

function Line(props) {
    return (
        <View style={styles(props).line}></View>
    )
}

const styles = (props) => StyleSheet.create({
    line: {
        width: props.width,
        height: 2,
        backgroundColor: 'orange',
        marginLeft: 30,
        marginTop: 3
    }
})

export default Line
