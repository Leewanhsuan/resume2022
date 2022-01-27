import styled from 'styled-components';
import './style.css';

const Skills = () => {
    const SkillWrapper = styled.div`
        padding-top: 20px;
    `;

    const SkillAll = styled.div`
        display: flex;
        justify-content: space-between;
    `;

    const Skill = styled.div`
        width: 30%;
    `;

    const SkillTitle = styled.h3`
        border-top: 1px solid #8bd2c2;
        padding-top: 16px;
    `;

    const List = styled.li`
        margin-bottom: 5px;
        font-size: 14px;
    `;

    return (
        <SkillWrapper>
            <h2>專業技能</h2>
            <SkillAll>
                <Skill>
                    <SkillTitle>網頁基礎設計</SkillTitle>
                    <ol>
                        <List>熟悉 CSS、HTML 語法，能獨立完成切版與 RWD</List>
                        <List>熟悉 Sass 預處理器，具備 Bootstrap 切版經驗</List>
                        <List>熟悉 ES6 JS 語法，能以非同步技術串接 API，完成網頁資料與畫面的交互呈現</List>
                    </ol>
                </Skill>
                <Skill>
                    <SkillTitle>前端框架</SkillTitle>
                    <ol>
                        <List>熟悉 React Hooks，使用 Styled-Component、React Router</List>
                        <List>了解 Redux、React DOM 等基礎觀念</List>
                    </ol>
                </Skill>
                <Skill>
                    <SkillTitle>相關能力</SkillTitle>
                    <ol>
                        <List>熟悉 Git 版本控制，SourceTree 使用經驗 </List>
                        <List>具備雲端運算平台基本知識，包含 AWS、GCP、Azure</List>
                        <List>曾使用過 JEST 單元測試、了解爬蟲機制</List>
                        <List>具備後端與資料庫等基礎知識</List>
                        <List>了解網頁成效追蹤與分析，包含 GA4、SEO 等</List>
                    </ol>
                </Skill>
            </SkillAll>
        </SkillWrapper>
    );
};

export default Skills;
