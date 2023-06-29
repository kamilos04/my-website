import react, { useState } from "react"
import {Header} from "./components/Header"
import { createContext } from "react"

export const LanguageContext = createContext({})

export function App() {
    
    const [language, setLanguage] = useState("en")
    
    return(
        <LanguageContext.Provider value={{language, setLanguage}}>
            <div>
                <Header/>
            </div>
        </LanguageContext.Provider>
        
    )
}