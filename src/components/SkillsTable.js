import React, { useContext, useState } from "react"
import { LanguageContext } from "../App"
import { SkillsTableButton, SkillsTableButtons } from "./styles/Skills.styles"

export function SkillsPageButton(props) {
    const ButtonsAnimation = {
        hidden: {opacity: 0, scale: 0.5},
        show: { opacity: 1, scale: 1, transition: { delay: 0.3, duration: 1, type: "spring", ease: "easeOut" } },
    }
    
    return (
        <SkillsTableButton 
        variants={ButtonsAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{
            once: true,
        }}
        checked={props.checked} onClick={props.click}>
            {props.text}
        </SkillsTableButton>
    )
}

export function SkillsTable(props) {
    const { language, setLanguage } = useContext(LanguageContext)

    return (
        
        <SkillsTableButtons>
            <SkillsPageButton checked={props.page===1 ? true : false } text={language === "en" ? "All" : "Wszystkie"} page={props.page} click={() => props.setPage(1)}/>
            <SkillsPageButton checked={props.page===2 ? true : false } text={language === "en" ? "Backend" : "Backend"} page={props.page} click={() => props.setPage(2)}/>
            <SkillsPageButton checked={props.page===3 ? true : false } text={language === "en" ? "Frontend" : "Frontend"} page={props.page} click={() => props.setPage(3)}/>
            <SkillsPageButton checked={props.page===4 ? true : false } text={language === "en" ? "Other" : "Inne"} page={props.page} click={() => props.setPage(4)}/>
        </SkillsTableButtons>
    )

}