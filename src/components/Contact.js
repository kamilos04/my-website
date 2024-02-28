import React, { useContext } from "react"
import { LanguageContext } from "../App"
import { ContactContent, ContactEmail, ContactEmailAndIcon, ContactIcon, ContactImportantText, ContactText, ContactTitle } from "./styles/Contact.styles"
import EmailIcon from "../images/emailiconwhite.png"

const TimelineAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: {  duration: 1, type: "spring", ease: "easeOut" } },
  }

export function Contact() {
    const {language, setLanguage} = useContext(LanguageContext)

    return(
        <ContactContent
        variants={TimelineAnimation}
        initial="hidden"
        animate="show"
        >
            <ContactTitle>{language === "en" ? <>Interested in <ContactImportantText>collaborating</ContactImportantText> with me?</> : <>Chcesz podjąc <ContactImportantText>współpracę</ContactImportantText> ze mną?</>}</ContactTitle>
            <ContactText>{language === "en" ? <>You're welcome to get in touch with me!</> : <>Zapraszam do kontaktu ze mną!</>}</ContactText>
            <ContactEmailAndIcon>
                <ContactIcon src={EmailIcon} alt="email icon"></ContactIcon>
                <ContactEmail>kamiljach2004@gmail.com</ContactEmail>
            </ContactEmailAndIcon>
        </ContactContent>
    )
}