import react, { useState } from "react"
import { createContext } from "react"
import { GlobalStyle } from "./components/styles/GlobalStyle.styles"
import { Home } from "./components/Home.js"

export const LanguageContext = createContext({})

export function App() {
    
    const [language, setLanguage] = useState("pl")
    
    return(
        <LanguageContext.Provider value={{language, setLanguage}}>
            <GlobalStyle/>
                <Home/>
        </LanguageContext.Provider>
        
    )
}