import styled from 'styled-components';
import './style.css';

const Skills = () => {
    const SkillAll = styled.div`
        display: flex;
        justify-content: space-between;
    `;

    const Skill = styled.div`
        width: 30%;
    `;

    const SkillTitle = styled.h2`
        border-top: 1px solid #8bd2c2;
        padding-top: 16px;
    `;

    return (
        <div>
            <h2>專業技能</h2>
            <SkillAll>
                <Skill>
                    <SkillTitle>程式設計入門</SkillTitle>
                    <p>
                        具備網頁設計能力，熟悉
                        CSS、HTML、Javascript，能完成使用者介面繪製，對於基礎演算法有一定的掌握力。
                    </p>
                </Skill>
                <Skill>
                    <SkillTitle>掌握網頁開發</SkillTitle>
                    <p>
                        具備網頁設計能力，熟悉
                        CSS、HTML、Javascript，能完成使用者介面繪製，對於基礎演算法有一定的掌握力。
                    </p>
                </Skill>
                <Skill>
                    <SkillTitle>軟體工程師實力</SkillTitle>
                    <p>
                        具備網頁設計能力，熟悉
                        CSS、HTML、Javascript，能完成使用者介面繪製，對於基礎演算法有一定的掌握力。
                    </p>
                </Skill>
            </SkillAll>
        </div>
    );
};

export default Skills;
