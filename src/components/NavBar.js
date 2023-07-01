import react, { useContext } from "react"
import LinkedInLogo from "../images/linkedin.png"
import GitHubLogo from "../images/github.png"
import { LanguageContext } from "../App"
import { NavBarLinksElementStyle, NavBarLinksStyle, NavBarStyle, StyledIconLogo, NavBarLogosStyle, NavBarLanguageStyle } from "./styles/NavBar.styles.js"
import { ToggleLanguage } from "./ToggleLanguage"

export function NavBar() {
    const {language, setLanguage} = useContext(LanguageContext)

    
    return(
        <NavBarStyle>
            <NavBarLogosStyle>
                <StyledIconLogo src={LinkedInLogo} alt="LinkedIn icon"/>
                <StyledIconLogo src={GitHubLogo} alt="GitHub icon"/>
            </NavBarLogosStyle>
            <NavBarLinksStyle>
                <NavBarLinksElementStyle>
                    {language === "en" ? "Home" : "Główna"}
                </NavBarLinksElementStyle>
                <NavBarLinksElementStyle>
                    Skills
                </NavBarLinksElementStyle>
                <NavBarLinksElementStyle>
                    Projects
                </NavBarLinksElementStyle>
                <NavBarLinksElementStyle>
                    About
                </NavBarLinksElementStyle>
                <NavBarLinksElementStyle>
                    Contact
                </NavBarLinksElementStyle>
                <NavBarLanguageStyle>
                    <ToggleLanguage/>
                </NavBarLanguageStyle>
                
            </NavBarLinksStyle>
        </NavBarStyle>
    )
}