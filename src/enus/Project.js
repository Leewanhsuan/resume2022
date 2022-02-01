import styled from 'styled-components';
import { device } from './device';

const Project = () => {
    const ProjectWrapper = styled.div`
        padding-top: 20px;
    `;

    const ProjectInro = styled.div`
        display: flex;
        justify-content: space-between;
        @media ${device.mobile} {
            flex-wrap: wrap;
        }
    `;

    const ProjectDetail = styled.div`
        width: 60%;

        @media ${device.mobile} {
            width: 100%;
        }
    `;

    const ProjectSkill = styled.div`
        width: 30%;
        @media ${device.mobile} {
            width: 100%;
        }
    `;

    const ProjectTitle = styled.p`
        border-top: 1px solid #4169e1;
        padding-top: 16px;
        font-size: 18px;
        color: #4169e1;
    `;

    const Link = styled.button`
        border: none;
        margin-right: 5px;
        border-radius: 5px;
        &: hover {
            color: white;
            background-color: #4169e1;
        }
    `;

    const List = styled.li`
        margin-bottom: 5px;
        font-size: 14px;
    `;

    return (
        <ProjectWrapper>
            <h2>程式作品</h2>
            <ProjectTitle>FlowerMe 心花開 電商網站</ProjectTitle>
            <ProjectInro>
                <ProjectDetail>
                    <Link href="#" className="payment__button">
                        完整作品集
                    </Link>
                    <Link href="#" className="payment__button">
                        網站 Demo
                    </Link>
                    <p>
                        具備網頁設計能力，熟悉
                        CSS、HTML、Javascript，能完成使用者介面繪製，對於基礎演算法有一定的掌握力。
                    </p>
                </ProjectDetail>
                <ProjectSkill>
                    具備網頁設計能力，熟悉 CSS、HTML、Javascript，能完成使用者介面繪製，對於基礎演算法有一定的掌握力。
                </ProjectSkill>
            </ProjectInro>
        </ProjectWrapper>
    );
};

export default Project;
