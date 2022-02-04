import React, { useContext } from 'react'
import { StyleSheet,View } from 'react-native'
import { Color } from '../constants/Color'
import { ThemeContext } from '../utils/ThemeManager'

function Line(props) {
    const {theme} = useContext(ThemeContext)
    return (
        <View style={styles(props,theme).line}></View>
    )
}

const styles = (props,theme) => StyleSheet.create({
    line: {
        width: props.width,
        height: 2,
        backgroundColor: theme === 'dark' ? 'orange' : Color.dark,
        marginLeft: 30,
        marginTop: 3
    }
})

export default Line
