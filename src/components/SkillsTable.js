import React, { useContext, useState } from "react"
import { LanguageContext } from "../App"
import { SkillsTableButton, SkillsTableButtons } from "./styles/Skills.styles"

export function SkillsPageButton(props) {
    return (
        <SkillsTableButton checked={props.checked} onClick={props.click}>
            {props.text}
        </SkillsTableButton>
    )
}

export function SkillsTable(props) {
    const { language, setLanguage } = useContext(LanguageContext)

    return (
        
        <SkillsTableButtons>
            {/* {language === "en" ? <SkillsPageButton text="All" page={props.page} click={() => props.setPage(1)}/> : <SkillsPageButton text="Wszystkie" click={() => props.setPage(1)}/>}
            {language === "en" ? <SkillsPageButton text="Backend" click={() => props.setPage(2)}/> : <SkillsPageButton text="Backend" click={() => props.setPage(2)}/>}
            {language === "en" ? <SkillsPageButton text="Frontend" click={() => props.setPage(3)}/> : <SkillsPageButton text="Frontend" click={() => props.setPage(3)}/>}
            {language === "en" ? <SkillsPageButton text="Other" click={() => props.setPage(4)}/> : <SkillsPageButton text="Inne" click={() => props.setPage(4)}/>} */}


            <SkillsPageButton checked={props.page===1 ? true : false } text={language === "en" ? "All" : "Wszystkie"} page={props.page} click={() => props.setPage(1)}/>
            <SkillsPageButton checked={props.page===2 ? true : false } text={language === "en" ? "Backend" : "Backend"} page={props.page} click={() => props.setPage(2)}/>
            <SkillsPageButton checked={props.page===3 ? true : false } text={language === "en" ? "Frontend" : "Frontend"} page={props.page} click={() => props.setPage(3)}/>
            <SkillsPageButton checked={props.page===4 ? true : false } text={language === "en" ? "Other" : "Inne"} page={props.page} click={() => props.setPage(4)}/>
        </SkillsTableButtons>
    )

}