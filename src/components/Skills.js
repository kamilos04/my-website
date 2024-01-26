import React, { useContext, useState } from "react"
import { SkillsContent, SkillsTitle } from "./styles/Skills.styles"
import { SkillsCategory } from "./SkillsCategory"
import { LanguageContext } from "../App"
import { SkillsTable } from "./SkillsTable"

export function Skills () {
    const { language, setLanguage } = useContext(LanguageContext)


    const [page, setPage] = useState(1)

    return (
        <SkillsContent>
            <SkillsTitle>{language === "en" ? "Skills" : "Umiejętności"}</SkillsTitle>
            <SkillsTable page={page} setPage={setPage}/>
            {page===1 ? <SkillsCategory category="all"/>: null}
            {page===2 ? <SkillsCategory category="backend"/>: null}
            {page===3 ? <SkillsCategory category="frontend"/>: null}
            {page===4 ? <SkillsCategory category="other"/>: null}
        </SkillsContent>
    )
}