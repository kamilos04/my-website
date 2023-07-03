import React, { useContext } from "react"
import { HomeButtonContactStyle } from "./styles/Home.styles"
import { LanguageContext } from "../App"

export function HomeButtonContactMe() {
    const { language, setLanguage } = useContext(LanguageContext)
    
    return(
        <HomeButtonContactStyle>
            {language === "en" ? "Contact me" : "Napisz do mnie"}
        </HomeButtonContactStyle>
    )
}