import React, { useContext } from "react"
import LinkedInLogo from "../images/linkedin.png"
import GitHubLogo from "../images/github.png"
import { LanguageContext } from "../App"
import { NavBarLinksElementStyle, NavBarLinksStyle, NavBarStyle, StyledIconLogo, NavBarLogosStyle, NavBarLanguageStyle, NavBarSocialButton, NavBarMobileStyle } from "./styles/NavBar.styles.js"
import { ToggleLanguage } from "./ToggleLanguage"
import { motion } from "framer-motion"

const NavBarButtonAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1, transition: { delay: 1, duration: 1, type: "spring", ease: "easeOut" } },
    hover: { color: "#5FFF5B", transition: { duration: 0.2} }
}


export function NavBar() {
    const { language, setLanguage } = useContext(LanguageContext)


    return (
        <div>
        <NavBarStyle id="navbarSection">
            <NavBarLogosStyle>
                <NavBarSocialButton><a href="https://www.linkedin.com/in/kamil-jach/" target="_blank"><StyledIconLogo src={LinkedInLogo} alt="LinkedIn icon" /></a></NavBarSocialButton>
                <NavBarSocialButton><a href="https://github.com/kamilos04" target="_blank"><StyledIconLogo src={GitHubLogo} alt="GitHub icon" /></a></NavBarSocialButton>
            </NavBarLogosStyle>
            <NavBarLinksStyle>
                <NavBarLinksElementStyle
                variants={NavBarButtonAnimation}
                initial="hidden"
                animate="show"
                whileHover="hover"
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth'  });
                }}
                >
                    {language === "en" ? "Home" : "Główna"}
                </NavBarLinksElementStyle>

                <NavBarLinksElementStyle
                variants={NavBarButtonAnimation}
                initial="hidden"
                animate="show"
                whileHover="hover"
                onClick={() => {
                    const element = document.getElementById('skillsSection');
                    console.log(element);
                    element?.scrollIntoView({behavior: "smooth" });
                }}
                >
                    {language === "en" ? "Skills" : "Umiejętności"}
                </NavBarLinksElementStyle>

                {/* <NavBarLinksElementStyle>
                    {language === "en" ? "Projects" : "Projekty"}
                </NavBarLinksElementStyle> */}
                
                <NavBarLinksElementStyle
                variants={NavBarButtonAnimation}
                initial="hidden"
                animate="show"
                whileHover="hover"
                onClick={() => {
                    const element = document.getElementById('aboutSection');
                    console.log(element);
                    element?.scrollIntoView({behavior: "smooth" });
                }}
                >
                    {language === "en" ? "About me" : "O mnie"}
                </NavBarLinksElementStyle>

                <NavBarLinksElementStyle
                variants={NavBarButtonAnimation}
                initial="hidden"
                animate="show"
                whileHover="hover"
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

        <NavBarMobileStyle>
            <NavBarLogosStyle>
                <NavBarSocialButton><a href="https://www.linkedin.com/in/kamil-jach/" target="_blank"><StyledIconLogo src={LinkedInLogo} alt="LinkedIn icon" /></a></NavBarSocialButton>
                <NavBarSocialButton><a href="https://github.com/kamilos04" target="_blank"><StyledIconLogo src={GitHubLogo} alt="GitHub icon" /></a></NavBarSocialButton>
            </NavBarLogosStyle>
            <NavBarLanguageStyle>
                    <ToggleLanguage />
            </NavBarLanguageStyle>
        </NavBarMobileStyle>
        </div>
    )
}