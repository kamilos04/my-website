import react, { useContext} from "react"
import { LanguageToggleStyle } from "./styles/NavBar.styles"
import PolishFlag from "../images/pl.png"
import EnglishFlag from "../images/en.png"
import { LanguageContext } from "../App"

export function ToggleLanguage() {
    const {language, setLanguage} = useContext(LanguageContext)
    
    return (
        <div>
            <LanguageToggleStyle src={language === "en" ? EnglishFlag : PolishFlag}  onClick={() =>{
                        setLanguage(language === "en" ? "pl" : "en")
                    }}/>
        </div>
    )
}