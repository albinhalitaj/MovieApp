import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const ThemeContext = React.createContext();

export const ThemeProvider = ({children}) => {

    const [theme,setTheme] = useState('dark')

    const changeTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
            storeTheme('light')
        } else {
            setTheme('dark')
            storeTheme('dark')
        }
    }

    const storeTheme = async (theme) => {
        try {
            await AsyncStorage.setItem('theme',theme);
        } catch (error) {
           console.log(error) 
        }
    }

    const getTheme = async () => {
        try {
            const val = await AsyncStorage.getItem('theme');
            return val;
        } catch (error) {
           console.log(error) 
        }
    }

     useEffect(() => {
        getTheme()
        .then(res => {
            setTheme(res)
        })
        .catch(err => {
            console.log(err)
        }) 
    
    }, []);
    

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}