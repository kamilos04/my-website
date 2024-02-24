import React from "react"
import { SkillsIconImgStyle, SkillsIconStyle, SkillsIconTextStyle } from "./styles/Skills.styles"

export function SkillsIcon(props) {
    return (
        <SkillsIconStyle
        initial={{ opacity: 0, x:-100 }}
        // animate={{ opacity: 1, x:0 }}
        whileInView={{ opacity: 1, x:0 }}
        viewport={{
            once: true,
        }}
        transition={{ duration: 1, delay: 0+(props.indexNumber*0.2) }}
        
        >
            <SkillsIconImgStyle src={props.image} alt="Technology icon"/>
            <SkillsIconTextStyle>
                {props.text}
            </SkillsIconTextStyle>
        </SkillsIconStyle>
    )

}