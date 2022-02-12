import styled from 'styled-components';
import { device } from './device';
import './style.css';

const Project = () => {
    const ProjectWrapper = styled.div``;

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

    const Image = styled.img`
        width: 420px;
    `;

    const List = styled.li`
        margin-bottom: 5px;
        font-size: 14px;
    `;

    return (
        <ProjectWrapper>
            <h2>程式作品</h2>
            <hr />

            <ProjectInro>
                <ProjectDetail>
                    <ProjectTitle>FlowerMe Shopping Web</ProjectTitle>
                    <Link href="#">Introduction</Link>
                    <Link href="#">Web Demo</Link>
                    <p>
                        An all-in-one eCommerce platform, including membership, shopping, orders, reviews. Backstage
                        management along with member management, category management, product management, orders
                        tracking and articles release.
                    </p>
                    <a href="#">
                        <Image src={require(`./../image/FlowerMePhoto.png`)} alt="" />
                    </a>
                </ProjectDetail>
                <ProjectSkill>
                    <ProjectTitle>Techniques</ProjectTitle>
                    <ul>
                        <List>React Hooks</List>
                        <List>RESTful APIs call through AJAX</List>
                        <List>CSS preprocessor (Scss)</List>
                        <List>Responsive layout</List>
                        <List>MapBox API</List>
                        <List>React Router</List>
                    </ul>
                    <ProjectTitle>Work Division</ProjectTitle>
                    <p>Responsible for frontend development and UI design</p>
                </ProjectSkill>
            </ProjectInro>
        </ProjectWrapper>
    );
};

export default Project;
