import React from "react"
import { ContactContent, ContactForm, ContactFormInfo, ContactFormLine } from "./styles/Contact.styles"
import { TextField } from "@mui/material"
import { TextFieldStyled } from "./styles/ContactTextField.styles"

export function Contact() {
    return(
        <ContactContent>
            <ContactFormInfo>
                <ContactForm>
                    <ContactFormLine>
                        <TextFieldStyled id="outlined-basic" label="Outlined" variant="outlined" InputProps={{ style: {borderolor: "red"}}}/>
                        <TextFieldStyled id="outlined-basic" label="Outlined" variant="outlined" />
                    </ContactFormLine>
                    <ContactFormLine>
                        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" color="secondary"/>
                    </ContactFormLine>
                    <ContactFormLine>
                    <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        full
                    />
                    </ContactFormLine>
                </ContactForm>
                
            </ContactFormInfo>
            
        </ContactContent>
    )
}