import react, { useContext } from "react"
import BackgroundImageFile from "../images/background.png"
import { BackgroundImage } from "../components/styles/Background.styles"
import { NavBar } from "../components/NavBar.js"
import { HomeContent, HomeDeveloperStyle, HomeHelloNameStyle, HomeHelloStyle, HomeMainTextStyle, HomeNameStyle, HomeShortTextStyle } from "./styles/Home.styles.js"
import { HomeButtonContactMe } from "./HomeButtonContactMe"
import { LanguageContext } from "../App"
import { Button, Fab } from "@mui/material"

export function Home() {
    const { language, setLanguage } = useContext(LanguageContext)

    return (
        <div>
            <BackgroundImage src={BackgroundImageFile} alt="Test" />
            <HomeContent>
                <NavBar />
                <HomeMainTextStyle>
                    <HomeHelloNameStyle>
                        <HomeHelloStyle>{language === "en" ? "Hi, I'm " : "Cześć! Jestem "} <HomeNameStyle>Kamil Jach</HomeNameStyle></HomeHelloStyle>
                    </HomeHelloNameStyle>
                    <HomeDeveloperStyle>Software Developer</HomeDeveloperStyle>
                    <HomeShortTextStyle>{language === "en" ?
                        "I'm a frontend developer, currently learning backend. I’m very willing to complete your order." :
                        "Jestem frontend developerem, uczącym się backendu. Bardzo chętnie zrealizuję twoje zlecenie."}</HomeShortTextStyle>
                    <HomeButtonContactMe />
                </HomeMainTextStyle>
            </HomeContent>


        </div>
    )
}