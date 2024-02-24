import React from "react"
import { SkillsData } from "./SkillsData"
import { SkillsIcon } from "./SkillsIcon"
import { SkillsTable, SkillsTableDivCenter } from "./styles/Skills.styles"


export function SkillsCategory(props) {
    let list = []
    let listWithIndex = []

    if (props.category === "all") {
        SkillsData.skills.map((skill) => {
            list.push({ image: skill.image, text: skill.text })
        })
    }
    else if (props.category === "frontend") {
        SkillsData.skills.map((skill) => {
            if (skill.tabs.includes("frontend")) {
                list.push({ image: skill.image, text: skill.text })
            }
        })
    }
    else if (props.category === "backend") {
        SkillsData.skills.map((skill) => {
            if (skill.tabs.includes("backend")) {
                list.push({ image: skill.image, text: skill.text })
            }
        })
    }
    else if (props.category === "other") {
        SkillsData.skills.map((skill) => {
            if (skill.tabs.includes("other")) {
                list.push({ image: skill.image, text: skill.text })
            }
        })
    }

    listWithIndex = list.map((skill, index) => {
        return (
            <SkillsIcon image={skill.image} text={skill.text} indexNumber={index} />
        )
    })
    
    const skillsTable =
        <SkillsTableDivCenter>
            <SkillsTable>
                {listWithIndex}
            </SkillsTable>
        </SkillsTableDivCenter>


    return skillsTable
}