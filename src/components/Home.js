import react, { useContext } from "react"
import { NavBar } from "../components/NavBar.js"
import { HomeContent, HomeDeveloperStyle, HomeH3Style, HomeHelloNameStyle, HomeHelloStyle, HomeMainTextStyle, HomeNameStyle, HomePhotoStyle, HomeShortTextStyle, HomeTextPhotoStyle } from "./styles/Home.styles.js"
import { HomeButtonContactMe } from "./HomeButtonContactMe"
import { LanguageContext } from "../App"
import Photo from "../images/photo2.png"
import { motion } from "framer-motion"
import { ContactMessageBox } from "./ContactMessageBox.js"

const HelloAnimation = {
    hidden: { opacity: 0, x: "-5rem" },
    show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
}

const SoftDevAnimation = {
    hidden: { opacity: 0, x: "-5rem" },
    show: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 1, ease: "easeOut" } }
}

const PhotoAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1, transition: { delay: 1, duration: 1, type: "spring", ease: "easeOut" } },
    hover: { scale: 1.1, transition: { duration: 0.5, type: "spring", bounce: 0.5, } }
}


function ShortText(props) {
    const shortTextEN = "I am a computer science student. I mainly work with Spring Boot and React."
    const shortTextENSplitted = shortTextEN.split("");
    const shortTextPL = "Jestem studentem informatyki. Głównie piszę w Spring Boot oraz React."
    const shortTextPLSplitted = shortTextPL.split("");


    if (props.lang === "en") {
        return (
            <HomeShortTextStyle>
                {shortTextENSplitted.map((element, index) => {
                    return (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.04, delay: 1.5 + index * 0.04 }}
                        >
                            {element}
                        </motion.span>
                    )
                })}
            </HomeShortTextStyle>
        )
    }
    else {
        return (
            <HomeShortTextStyle>
                {shortTextPLSplitted.map((element, index) => {
                    return (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.04, delay: 1.5 + index * 0.04 }}
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
                    <HomePhotoStyle
                        variants={PhotoAnimation}
                        initial="hidden"
                        animate="show"
                        whileHover="hover"
                        src={Photo} alt="My photo" />
                </HomeTextPhotoStyle>
            </HomeContent>


        </div>
    )
}