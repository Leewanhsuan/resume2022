import styled from 'styled-components';
import { device } from './device';
import './style.css';

const Skills = () => {
    const SkillWrapper = styled.div``;

    const SkillAll = styled.div`
        display: flex;
        justify-content: space-between;

        @media ${device.mobile} {
            flex-wrap: wrap;
        }
    `;

    const Skill = styled.div`
        width: 25%;

        @media print ${device.print} {
            width: 40px;
        }

        @media ${device.mobile} {
            width: 90%;
        }
    `;

    const SkillTitle = styled.h3`
        padding-top: 16px;
    `;

    const List = styled.li`
        margin-bottom: 5px;
        font-size: 14px;
    `;

    return (
        <SkillWrapper>
            <h2>Skills</h2>
            <hr />
            <SkillAll>
                <Skill>
                    <SkillTitle>Technical Skills</SkillTitle>
                    <ul>
                        <List>HTML</List>
                        <List>CSS、Sass、Scss</List>
                        <List>JavaScript ES6</List>
                        <List>RESTful APIs</List>
                        <List>Bootstrap</List>
                        <List>Style-Component（CSS in JS）</List>
                    </ul>
                </Skill>
                <Skill>
                    <SkillTitle></SkillTitle>
                    <ul>
                        <List>React Hooks </List>
                        <List>Redux and React Router</List>
                        <List>RESTful APIs</List>
                        <List>JEST Unit Test</List>
                        <List>Map</List>
                    </ul>
                </Skill>
                <Skill>
                    <SkillTitle></SkillTitle>
                    <ul>
                        <List>Git</List>
                        <List>Chrome DevTools</List>
                        <List>SourceTree</List>
                        <List>Basic knowledge in Cloud（AWS、GCP）</List>
                        <List>VS Code</List>
                        <List>Webpack</List>
                        <List>Terminal</List>
                        <List>ResponsivelyApp</List>
                    </ul>
                </Skill>
                <Skill>
                    <SkillTitle>Marketing & Design</SkillTitle>
                    <ul>
                        <List>Google Analytics、Google Search Console </List>
                        <List>Firebase、Google Data Studio</List>
                        <List>SEO、Google Ads、App Search、Facebook Ads、Line LAP</List>
                        <List>Figma、Whimsical</List>
                        <List>Adobe Ai、PS</List>
                    </ul>
                </Skill>
            </SkillAll>
        </SkillWrapper>
    );
};

export default Skills;
