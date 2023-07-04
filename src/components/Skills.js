import { Box } from "@mui/material"
import { TabPanel, TabList, TabContext } from "@mui/lab"
import React, { useState } from "react"
import { TabStyled } from "./styles/SkillsTabs.styles"
import { SkillsContent, SkillsTitle } from "./styles/Skills.styles"
import { SkillsCategory } from "./SkillsCategory"

export function Skills () {
    const [value, setValue] = useState("1")
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return (
        <SkillsContent>
            <SkillsTitle>Skills</SkillsTitle>
            <Box sx={{ width: 'auto', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider',}}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                    <TabStyled label="All" value="1" />
                    <TabStyled label="Frontend" value="2" />
                    <TabStyled label="Backend" value="3" />
                    <TabStyled label="Other" value="4" />
                </TabList>
                </Box>
                <TabPanel value="1">
                    <SkillsCategory category="all"/>
                </TabPanel>
                <TabPanel value="2">
                    <SkillsCategory category="frontend"/>
                </TabPanel>
                <TabPanel value="3">
                    <SkillsCategory category="backend"/>
                </TabPanel>
                <TabPanel value="4">
                    <SkillsCategory category="other"/>
                </TabPanel>
            </TabContext>
            </Box>
        </SkillsContent>
    )
}