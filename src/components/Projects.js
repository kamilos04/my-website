import React, { useContext } from "react"
import { ProjectsContent, ProjectsInfo, ProjectsTitle } from "./styles/Projects.styles"
import { LanguageContext } from "../App"

export function Projects() {
    const { language, setLanguage } = useContext(LanguageContext)
    
    return(
       <ProjectsContent>
            <ProjectsTitle>{language === "en" ? "Projects" : "Projekty"}</ProjectsTitle>
            <ProjectsInfo>{language === "en" ? "Coming soon!" : "Niedługo się pojawią!"}</ProjectsInfo>
        </ProjectsContent>
       
    )
}