import styled from 'styled-components';
import './style.css';

const Project = () => {
    const ProjectWrapper = styled.div`
        padding-top: 20px;
    `;

    const ProjectInro = styled.div`
        display: flex;
        justify-content: space-between;
    `;

    const ProjectDetail = styled.div`
        width: 60%;
    `;

    const ProjectSkill = styled.div`
        width: 30%;
    `;

    const ProjectTitle = styled.p`
        border-top: 1px solid #8bd2c2;
        padding-top: 16px;
        font-size: 18px;
        font-weight: 500;
        color: #75b0a2;
    `;

    const IntroTitle = styled.h3``;

    const Link = styled.button``;

    return (
        <ProjectWrapper>
            <h2>程式作品</h2>
            <ProjectTitle>FlowerMe 心花開 電商網站</ProjectTitle>
            <ProjectInro>
                <ProjectDetail>
                    <p>
                        具備網頁設計能力，熟悉
                        CSS、HTML、Javascript，能完成使用者介面繪製，對於基礎演算法有一定的掌握力。
                    </p>
                    <Link href="#" className="payment__button">
                        完整作品集
                    </Link>
                    <Link href="#" className="payment__button">
                        網站連結
                    </Link>
                </ProjectDetail>
                <ProjectSkill>
                    <IntroTitle>使用技術</IntroTitle>
                    <p>
                        具備網頁設計能力，熟悉
                        CSS、HTML、Javascript，能完成使用者介面繪製，對於基礎演算法有一定的掌握力。
                    </p>
                </ProjectSkill>
            </ProjectInro>
        </ProjectWrapper>
    );
};

export default Project;
