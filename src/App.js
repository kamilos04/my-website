import React, { useState } from "react"
import { createContext } from "react"
import { GlobalStyle } from "./components/styles/GlobalStyle.styles"
import { Home } from "./components/Home.js"
import { Skills } from "./components/Skills"

export const LanguageContext = createContext({})

export function App() {
    
    const [language, setLanguage] = useState("en")
    
    return(
        <LanguageContext.Provider value={{language, setLanguage}}>
            <GlobalStyle/>
                <Home/>
                <Skills/>
        </LanguageContext.Provider>
        
    )
}