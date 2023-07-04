import React from "react"
import { SkillsData } from "./SkillsData"
import { SkillsIcon } from "./SkillsIcon"
import { SkillsTable } from "./styles/Skills.styles"

export function SkillsCategory(props) {
    let list = []

    if (props.category === "all") {
        list = SkillsData.skills.map((skill) => (
            <SkillsIcon image={skill.image} text={skill.text}/>
        ))
    }
    else if (props.category === "frontend") {
        list = SkillsData.skills.map((skill) => {
            return(
                skill.tabs.includes("frontend") ? <SkillsIcon image={skill.image} text={skill.text}/> : null
            )
        })
    }
    else if (props.category === "backend") {
        list = SkillsData.skills.map((skill) => {
            return(
                skill.tabs.includes("backend") ? <SkillsIcon image={skill.image} text={skill.text}/> : null
            )
        })
    }
    else if (props.category === "other") {
        list = SkillsData.skills.map((skill) => {
            return(
                skill.tabs.includes("other") ? <SkillsIcon image={skill.image} text={skill.text}/> : null
            )
        })
    }

    const skillsTable = <SkillsTable>
        {list}
    </SkillsTable>

    return skillsTable
}