import React, { useContext } from "react"
import { HomeButtonContactStyle } from "./styles/Home.styles"
import { LanguageContext } from "../App"

function handleClickContactButton() {
    window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"});
    console.log("t")
}

export function HomeButtonContactMe() {
    const { language, setLanguage } = useContext(LanguageContext)
    
    return(
        <HomeButtonContactStyle onClick={handleClickContactButton}>
            {language === "en" ? "Contact me" : "Napisz do mnie"}
        </HomeButtonContactStyle>
    )
}