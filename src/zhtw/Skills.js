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

        @media print ${device.print} {
            margin: 0.75in;
        }
    `;

    const Skill = styled.div`
        width: 25%;

        @media ${device.mobile} {
            width: 100%;
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
            <h2>專業技能</h2>
            <hr />
            <SkillAll>
                <Skill>
                    <SkillTitle>前端設計</SkillTitle>
                    <ul>
                        <List>HTML</List>
                        <List>CSS、SaSS</List>
                        <List>JavaScript ES6</List>
                        <List>RESTful APIs</List>
                        <List>Bootstrap</List>
                        <List>Style-Component（CSS in JS）</List>
                    </ul>
                </Skill>
                <Skill>
                    <SkillTitle>前端技術</SkillTitle>
                    <ul>
                        <List>React Hooks </List>
                        <List>Redux and React Router</List>
                        <List>RESTful APIs</List>
                        <List>JEST Unit Test</List>
                        <List>Map</List>
                    </ul>
                </Skill>
                <Skill>
                    <SkillTitle>開發工具</SkillTitle>
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
                    <SkillTitle>行銷設計</SkillTitle>
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
