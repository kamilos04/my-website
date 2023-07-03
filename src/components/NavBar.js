import react, { useContext } from "react"
import LinkedInLogo from "../images/linkedin.png"
import GitHubLogo from "../images/github.png"
import { LanguageContext } from "../App"
import { NavBarLinksElementStyle, NavBarLinksStyle, NavBarStyle, StyledIconLogo, NavBarLogosStyle, NavBarLanguageStyle, NavBarSocialButton } from "./styles/NavBar.styles.js"
import { ToggleLanguage } from "./ToggleLanguage"

export function NavBar() {
    const { language, setLanguage } = useContext(LanguageContext)


    return (
        <NavBarStyle>
            <NavBarLogosStyle>
                <NavBarSocialButton><a href="https://www.linkedin.com/in/kamil-jach-85a9bb1b5/" target="_blank"><StyledIconLogo src={LinkedInLogo} alt="LinkedIn icon" /></a></NavBarSocialButton>
                <NavBarSocialButton><a href="https://github.com/kamilos04" target="_blank"><StyledIconLogo src={GitHubLogo} alt="GitHub icon" /></a></NavBarSocialButton>
            </NavBarLogosStyle>
            <NavBarLinksStyle>
                <NavBarLinksElementStyle>
                    {language === "en" ? "Home" : "Główna"}
                </NavBarLinksElementStyle>
                <NavBarLinksElementStyle>
                    {language === "en" ? "Skills" : "Umiejętności"}
                </NavBarLinksElementStyle>
                <NavBarLinksElementStyle>
                    {language === "en" ? "Projects" : "Projekty"}
                </NavBarLinksElementStyle>
                <NavBarLinksElementStyle>
                    {language === "en" ? "About" : "O mnie"}
                </NavBarLinksElementStyle>
                <NavBarLinksElementStyle>
                    {language === "en" ? "Contact" : "Kontakt"}
                </NavBarLinksElementStyle>
                <NavBarLanguageStyle>
                    <ToggleLanguage />
                </NavBarLanguageStyle>

            </NavBarLinksStyle>
        </NavBarStyle>
    )
}