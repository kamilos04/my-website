import React from "react"
import {LanguageContext} from "../App"
import { CloseImgStyle, ContactMessageBoxStyle } from "./styles/ContactMessageBox.styles"
import closeImg from "../images/close.png"

export function ContactMessageBox(){
    return(
        <ContactMessageBoxStyle>
            <div><CloseImgStyle src={closeImg} alt="close"></CloseImgStyle></div>
        </ContactMessageBoxStyle>
    ) 
}

//not used