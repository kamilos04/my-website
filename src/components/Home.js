import react, { useContext } from "react"
import BackgroundImageFile from "../images/background.png"
import { BackgroundImage } from "../components/styles/Background.styles"
import { NavBar } from "../components/NavBar.js"
import { HomeContent, HomeDeveloperStyle, HomeHelloNameStyle, HomeHelloStyle, HomeMainTextStyle, HomeNameStyle, HomePhotoStyle, HomeShortTextStyle, HomeTextPhotoStyle } from "./styles/Home.styles.js"
import { HomeButtonContactMe } from "./HomeButtonContactMe"
import { LanguageContext } from "../App"
import { Button, Fab } from "@mui/material"
import Photo from "../images/photo.png"

export function Home() {
    const { language, setLanguage } = useContext(LanguageContext)

    return (
        <div>
            <HomeContent>
                <NavBar />
                <HomeTextPhotoStyle>
                    <HomeMainTextStyle>
                        <HomeHelloNameStyle>
                            <HomeHelloStyle>{language === "en" ? "Hi, I'm " : "Cześć! Jestem "} <HomeNameStyle>Kamil Jach</HomeNameStyle></HomeHelloStyle>
                        </HomeHelloNameStyle>
                        <HomeDeveloperStyle>Software Developer</HomeDeveloperStyle>
                        <HomeShortTextStyle>{language === "en" ?
                            "I am a computer science student. I mainly work with Django and React." :
                            "Jestem studentem informatyki. Głównie zajmuje się Django oraz Reactem."}</HomeShortTextStyle>
                        <HomeButtonContactMe />
                    </HomeMainTextStyle>
                    <HomePhotoStyle src={Photo} alt="My photo" />
                </HomeTextPhotoStyle>
            </HomeContent>


        </div>
    )
}