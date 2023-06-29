import react, { useContext } from "react"
import linkedInLogo from "../images/linkedin.png"
import gitHubLogo from "../images/github.png"
import { LanguageContext } from "../App"

export function Header() {
    const {language, setLanguage} = useContext(LanguageContext)
    
    
    return(
        <div>
            <div>
                <img src={linkedInLogo} alt="LinkedIn icon"/>
                <img src={gitHubLogo} alt="GitHub icon"/>
            </div>
            <div>
                <div>
                    {language === "en" ? "EN" : "PL"}
                </div>
                <div>
                    Skills
                </div>
                <div>
                    Projects
                </div>
                <div>
                    About
                </div>
                <div>
                    Contact
                </div>
                <div>
                    {/* language switch */}
                </div>
                
            </div>
        </div>
    )
}