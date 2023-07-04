import React from "react"
import { SkillsIconImgStyle, SkillsIconStyle, SkillsIconTextStyle } from "./styles/Skills.styles"
export function SkillsIcon(props) {
    return (
        <SkillsIconStyle>
            <SkillsIconImgStyle src={props.image} alt="Technology icon"/>
            <SkillsIconTextStyle>
                {props.text}
            </SkillsIconTextStyle>
        </SkillsIconStyle>
    )

}