import React, { useContext } from "react"
import { AboutContent, AboutPhoto, AboutText, AboutTextAndTimeLine, AboutTextImportant, AboutTextPhoto, AboutTextSection, AboutTitle } from "./styles/About.styles"
import { LanguageContext } from "../App"
import AboutTimeLine from "./AboutTimeLine"
import { TimelineConnector, TimelineDot } from "@mui/lab"
export function About() {
    const { language, setLanguage } = useContext(LanguageContext)
    const TitleAnimation = {
        hidden: {opacity: 0, scale: 0.5},
        show: { opacity: 1, scale: 1, transition: { duration: 1, type: "spring", ease: "easeOut" } },
    }

    return (
        <AboutContent id="aboutSection">
            <AboutTitle
            variants={TitleAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{
                once: true
            }}
            >{language === "en" ? "About me" : "O mnie"}</AboutTitle>
            <AboutTextAndTimeLine>
                <AboutText
                variants={TitleAnimation}
                initial="hidden"
                whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.3,duration: 1, type: "spring", ease: "easeOut" } }}
                viewport={{
                    once: true
                }}
                >
                    <AboutTextSection>{language === "en" ? <AboutTextImportant>Hello!</AboutTextImportant> : <AboutTextImportant>Cześć!</AboutTextImportant>}</AboutTextSection>
                    <AboutTextSection>{language === "en" ? <>My name is <AboutTextImportant>Kamil</AboutTextImportant> and I'm <AboutTextImportant>19 years old</AboutTextImportant>.
                        I've been interested in programming since elementary school. In October 2023, I started studying <AboutTextImportant>Computer Science at the Applied Mathematics faculty of the Silesian University of Technology</AboutTextImportant>.</> : <>Nazywam się <AboutTextImportant>Kamil</AboutTextImportant> i
                            mam <AboutTextImportant>19 lat</AboutTextImportant>. Programowaniem interesuje się od szkoły podstawowej. W październiku 2023 roku zacząłem studiować <AboutTextImportant>Informatykę na wydziale Matematyki Stosowanej na Politechniki Śląskiej</AboutTextImportant>.</>}
                    </AboutTextSection>
                    <AboutTextSection>{language === "en" ? <>Currently, my main goal is to achieve proficiency in using Django and React.
                        Ultimately, I aim to develop web applications for use by other companies using these frameworks.</> : <> Aktualnie moim głównym celem jest osiągnięcie biegłości w posługiwaniu się Django oraz Reactem.
                            Przy użyciu tych frameworkow docelowo chcę tworzyć aplikacje internetowe przeznaczone do użytku przez inne firmy.</>}</AboutTextSection>
                    <AboutTextSection>{language === "en" ? <>Besides programming, I'm interested in aviation and business. I also love physical activity.</> : <>Poza programowaniem interesuję się lotnictwem oraz biznesem. Uwielbiam również aktywność fizyczną. </>}</AboutTextSection>
                </AboutText>
                <AboutTimeLine />
            </AboutTextAndTimeLine>

        </AboutContent>
    )
}

