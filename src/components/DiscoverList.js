import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import { Color } from '../constants/Color';
import DiscoverCard from './DiscoverCard'


function DiscoverList({movies}) {

    const [isLoading, setisLoading] = useState(true);

    const navigation = useNavigation();

    const {favoriteMovies} = useSelector(state => state.appReducer);

    useEffect(() => {   
        setisLoading(false)
    }, [])

    return (
        <View>
            <ScrollView style={styles.scrollView} horizontal={false}>
                {
                    isLoading ? <Text style={styles.loading}>Loading... </Text> : (
                        <View style={{flexDirection: 'column'}}>
                        {
                            movies && (
                                movies.map((movie,index) => {
                                    return (
                                        <DiscoverCard favoriteMovies={favoriteMovies} navigation={navigation} key={index} movie={movie} />
                                    )
                                })
                            )
                        }
                        </View>
                    )
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        marginTop: 10,
        marginLeft: 20,
    },
    loading: {
        marginTop: 20,
        color: Color.darkGray,
        textAlign: 'center' 
    }
})

export default DiscoverList
