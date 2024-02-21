import react, { useContext } from "react"
import BackgroundImageFile from "../images/background.png"
import { BackgroundImage } from "../components/styles/Background.styles"
import { NavBar } from "../components/NavBar.js"
import { HomeContent, HomeDeveloperStyle, HomeHelloNameStyle, HomeHelloStyle, HomeMainTextStyle, HomeNameStyle, HomePhotoStyle, HomeShortTextStyle, HomeTextPhotoStyle } from "./styles/Home.styles.js"
import { HomeButtonContactMe } from "./HomeButtonContactMe"
import { LanguageContext } from "../App"
import { Button, Fab } from "@mui/material"
import Photo from "../images/photo2.png"
import {motion} from "framer-motion"

const HelloAnimation = {
    hidden: { opacity: 0, x: "-5rem" },
    show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut"} },
    }

const SoftDevAnimation = {
    hidden: {opacity: 0, x: "-5rem" },
    show: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 1, ease: "easeOut"} }
}



function ShortText(props) {
    const shortTextEN = "I am a computer science student. I mainly work with Django and React."
    const shortTextENSplitted = shortTextEN.split("");
    const shortTextPL = "Jestem studentem informatyki. Głównie zajmuje się Django oraz Reactem."
    const shortTextPLSplitted = shortTextPL.split("");
    // const ShortTextAnimation = {
    //     hidden: { opacity: 0 },
    //     show: { opacity: 1, transition: { duration: 1} },
    // }


    if(props.lang==="en"){
        return(
            <HomeShortTextStyle>
                {shortTextENSplitted.map((element, index) => {
                    return(
                        <motion.span
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.04, delay: 1.5+index*0.04}}
                        >
                            {element}
                        </motion.span>
                    )
                })}
            </HomeShortTextStyle>
        )
    }
    else{
        return(
            <HomeShortTextStyle>
                {shortTextPLSplitted.map((element, index) => {
                    return(
                        <motion.span
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.04, delay: 1.5+index*0.04}}
                        >
                            {element}
                        </motion.span>
                    )
                })}
            </HomeShortTextStyle>
        )
    }
}

export function Home() {
    const { language, setLanguage } = useContext(LanguageContext)



    return (
        <div>
            <HomeContent>
                <NavBar />
                <HomeTextPhotoStyle>
                    <HomeMainTextStyle>
                        <HomeHelloNameStyle
                            variants={HelloAnimation} 
                            initial="hidden"
                            animate="show"
                        >
                            <HomeHelloStyle>{language === "en" ? "Hi, I'm " : "Cześć! Jestem "} <HomeNameStyle>Kamil Jach</HomeNameStyle></HomeHelloStyle>
                        </HomeHelloNameStyle>
                        <HomeDeveloperStyle
                            variants={SoftDevAnimation} 
                            initial="hidden"
                            animate="show"
                        >Software Developer</HomeDeveloperStyle>
                        {language === "en" ?
                            <ShortText lang="en"></ShortText> :
                            <ShortText lang="pl"></ShortText>}
                        <HomeButtonContactMe />
                    </HomeMainTextStyle>
                    <HomePhotoStyle src={Photo} alt="My photo" />
                </HomeTextPhotoStyle>
            </HomeContent>


        </div>
    )
}