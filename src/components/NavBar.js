import React, { useContext } from "react"
import LinkedInLogo from "../images/linkedin.png"
import GitHubLogo from "../images/github.png"
import { LanguageContext } from "../App"
import { NavBarLinksElementStyle, NavBarLinksStyle, NavBarStyle, StyledIconLogo, NavBarLogosStyle, NavBarLanguageStyle, NavBarSocialButton } from "./styles/NavBar.styles.js"
import { ToggleLanguage } from "./ToggleLanguage"
import { motion } from "framer-motion"

export function NavBar() {
    const { language, setLanguage } = useContext(LanguageContext)


    return (
        <NavBarStyle id="navbarSection">
            <NavBarLogosStyle>
                <NavBarSocialButton><a href="https://www.linkedin.com/in/kamil-jach/" target="_blank"><StyledIconLogo src={LinkedInLogo} alt="LinkedIn icon" /></a></NavBarSocialButton>
                <NavBarSocialButton><a href="https://github.com/kamilos04" target="_blank"><StyledIconLogo src={GitHubLogo} alt="GitHub icon" /></a></NavBarSocialButton>
            </NavBarLogosStyle>
            <NavBarLinksStyle>
                <NavBarLinksElementStyle
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth', block: 'center', inline: 'center'  });
                }}
                >
                    {language === "en" ? "Home" : "Główna"}
                </NavBarLinksElementStyle>

                <NavBarLinksElementStyle
                onClick={() => {
                    const element = document.getElementById('skillsSection');
                    console.log(element);
                    element?.scrollIntoView({behavior: "smooth", block: 'center', inline: 'center' });
                }}
                >
                    {language === "en" ? "Skills" : "Umiejętności"}
                </NavBarLinksElementStyle>

                {/* <NavBarLinksElementStyle>
                    {language === "en" ? "Projects" : "Projekty"}
                </NavBarLinksElementStyle> */}
                
                <NavBarLinksElementStyle
                onClick={() => {
                    const element = document.getElementById('aboutSection');
                    console.log(element);
                    element?.scrollIntoView({behavior: "smooth" });
                }}
                >
                    {language === "en" ? "About me" : "O mnie"}
                </NavBarLinksElementStyle>

                <NavBarLinksElementStyle
                onClick={() => {
                    window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"});
                }}
                >
                    {language === "en" ? "Contact" : "Kontakt"}
                </NavBarLinksElementStyle>

                <NavBarLanguageStyle>
                    <ToggleLanguage />
                </NavBarLanguageStyle>

            </NavBarLinksStyle>
        </NavBarStyle>
    )
}