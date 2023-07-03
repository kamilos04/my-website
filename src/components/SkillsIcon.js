import React from "react"
import { SkillsIconStyle, SkillsIconTextStyle } from "./styles/Skills.styles"
export function SkillsIcon(props) {
    return (
        <SkillsIconStyle>
            <svg viewBox="0 0 128 128">
                <g fill={props.color}>{props.path}
                </g>
            </svg>
            <SkillsIconTextStyle>
                {props.text}
            </SkillsIconTextStyle>
        </SkillsIconStyle>
    )

}