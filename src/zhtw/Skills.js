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
            width: 25%;
            font-size: 12px;
        }

        @media ${device.mobile} {
            width: 90%;
        }
    `;

    const SkillTitle = styled.h3`
        padding-top: 16px;

        @media print ${device.print} {
            font-size: 14px;
            padding-top: 5px;
        }
    `;

    const List = styled.li`
        margin-bottom: 5px;
        font-size: 14px;
        @media print ${device.print} {
            margin-bottom: 0px;
            font-size: 12px;
        }
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
                        <List>CSS、Sass、Scss</List>
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
                        <List>Cypress E2E testing</List>
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
