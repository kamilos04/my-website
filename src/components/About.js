import React, { useContext } from "react"
import { AboutContent, AboutPhoto, AboutText, AboutTextImportant, AboutTextPhoto, AboutTextSection, AboutTitle } from "./styles/About.styles"
import Photo from "../images/photo.png"
import { LanguageContext } from "../App"
import AboutTimeLine from "./AboutTimeLine"
import { TimelineConnector, TimelineDot } from "@mui/lab"
export function About() {
    const { language, setLanguage } = useContext(LanguageContext)

    return (
        <AboutContent>
            <AboutTitle>{language === "en" ? "About" : "O mnie"}</AboutTitle>
            <AboutTextPhoto>
                <AboutText>
                    <AboutTextSection>{language === "en" ? <AboutTextImportant>Hello!</AboutTextImportant> : <AboutTextImportant>Cześć!</AboutTextImportant>}</AboutTextSection>
                    <AboutTextSection>{language === "en" ? <>My name is <AboutTextImportant>Kamil</AboutTextImportant> and I'm <AboutTextImportant>19 years old</AboutTextImportant>. I have
                        been interested in programming since elementary school. I always treated it as a hobby, but recently I decided to find a job as a Junior Developer, so I'm open
                        to job opportunities and I would be very happy to take on assignments for website creation.</> : <>Jestem <AboutTextImportant>Kamil</AboutTextImportant> i
                            mam <AboutTextImportant>18 lat</AboutTextImportant>. Programowaniem interesuję się od czasów szkoły podstawowej. Zawsze traktowałem to jako hobby, ale niedawno
                        postanowiłem znaleźć pracę jako Junior Developer, więc jestem otwarty na propozycje pracy oraz chętnie przyjmę zlecenia na stworzenie stron internetowych.</>}
                    </AboutTextSection>
                    <AboutTextSection>{language === "en" ? <>From 2019 to 2022, I studied at <AboutTextImportant>VI High School named after Tadeusz Reytan in Warsaw</AboutTextImportant>,
                        and I completed my final year of high school at <AboutTextImportant>IV High School named after KEN in Bielsko-Biała</AboutTextImportant> in 2023.</> : <>W latach 2019-2022
                            uczyłem się w <AboutTextImportant>VI Liceum Ogólnokształcącym im. Tadeusza Reytana w Warszawie</AboutTextImportant>, a ostatnią klasę szkoły średniej skończyłem w
                        <AboutTextImportant>IV Liceum Ogólnokształcącym im. KEN w Bielsku-Białej</AboutTextImportant> w 2023 r. </>}
                    </AboutTextSection>
                    <AboutTextSection>{language === "en" ? "I am interested in aviation and business. I also love physical activity, especially basketball." : "Interesuje się lotnictwem oraz biznesem. Uwielbiam również aktywność fizyczną a zwłaszcza koszykówkę."}</AboutTextSection>
                </AboutText>
                <AboutTimeLine />
                {/* <AboutPhoto src={Photo} alt="My photo" /> */}
            </AboutTextPhoto>

        </AboutContent>
    )
}

