import React, { useContext } from "react"
import { HomeButtonContactStyle } from "./styles/Home.styles"
import { LanguageContext } from "../App"

function handleClickContactButton() {
    window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"});
    console.log("t")
}

const ContactButtonAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1, transition: { delay: 1.5, duration: 1, type: "spring", ease: "easeOut" } },
    hover: {border: '2px solid #5FFF5B', transition: { duration: 0.2}}
}


export function HomeButtonContactMe() {
    const { language, setLanguage } = useContext(LanguageContext)
    
    return(
        <HomeButtonContactStyle 
        variants={ContactButtonAnimation}
        initial="hidden"
        animate="show"
        whileHover="hover"
        onClick={handleClickContactButton}>
            {language === "en" ? "Contact me" : "Napisz do mnie"}
        </HomeButtonContactStyle>
    )
}