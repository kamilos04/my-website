import React from "react"
import { SkillsData } from "./SkillsData"
import { SkillsIcon } from "./SkillsIcon"

export function SkillsCategory(props) {
    let list = []

    if (props.category === "all") {
        list = SkillsData.skills.map((skill) => (
            <SkillsIcon path={skill.path} text={skill.text} color={props.color}/>
        ))
    }
    else if (props.category === "frontend") {
        list = SkillsData.skills.map((skill) => {
            return(
                skill.tabs.includes("frontend") ? <SkillsIcon path={skill.path} text={skill.text} color={props.color}/> : null
            )
        })
    }
    else if (props.category === "backend") {
        list = SkillsData.skills.map((skill) => {
            return(
                skill.tabs.includes("backend") ? <SkillsIcon path={skill.path} text={skill.text} color={props.color}/> : null
            )
        })
    }



    return list
}