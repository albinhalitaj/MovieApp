import React, { useState } from 'react'

export const ThemeContext = React.createContext();

export const ThemeProvider = ({children}) => {

    const [theme,setTheme] = useState('dark')

    const changeTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    }

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}