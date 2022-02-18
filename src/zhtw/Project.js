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

        @media print ${device.print} {
            font-size: 12px;
        }
    `;

    const ProjectDetail = styled.div`
        width: 60%;

        @media ${device.mobile} {
            width: 100%;
        }

        @media print ${device.print} {
            font-size: 12px;
        }
    `;

    const ProjectSkill = styled.div`
        width: 30%;
        @media ${device.print} {
            width: 30%;
        }
    `;

    const ProjectTitle = styled.p`
        padding-top: 16px;
        font-size: 18px;
        color: #4169e1;
        @media print ${device.print} {
            font-size: 16px;
        }
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
        @media print ${device.print} {
            width: 350px;
        }
    `;

    const List = styled.li`
        margin-bottom: 5px;
        font-size: 14px;
        @media print ${device.print} {
            font-size: 12px;
        }
    `;

    return (
        <ProjectWrapper>
            <h2>程式作品</h2>
            <hr />
            <ProjectInro>
                <ProjectDetail>
                    <ProjectTitle>FlowerMe 心花開 電商網站</ProjectTitle>
                    {/* <Link href="#">完整作品說明</Link>
                    <Link href="#">網站 Demo</Link> */}
                    <p>
                        電商前台涵蓋會員、購物、訂單、評論與客服等四大功能，後台則包含會員管理、品類管理、商品管理、訂單管理、消息發布等五大模組。
                    </p>
                    <Image src={require(`./../image/FlowerMePhoto.png`)} alt="心花開電商平台" />
                </ProjectDetail>
                <ProjectSkill>
                    <ProjectTitle>使用技術</ProjectTitle>
                    <ul>
                        <List>採用前端技術 React Hooks</List>
                        <List>串接 RESTful APIs</List>
                        <List>使用 Scss 預處理器</List>
                        <List>支援 RWD 響應式網頁</List>
                        <List>串接 MapBox 第三方 API</List>
                        <List>採用 React Router 建立路由</List>
                    </ul>
                    <ProjectTitle>專案角色</ProjectTitle>
                    <p>負責網站內容規劃、架構設計、前端開發以及 UI 設計</p>
                </ProjectSkill>
            </ProjectInro>
            <hr />
            <ProjectInro>
                <ProjectDetail>
                    <ProjectTitle>Lulu 嚕路自行車景點平台</ProjectTitle>
                    {/* <Link href="#">完整作品說明</Link>
                    <Link href="#">網站 Demo</Link> */}
                    <p>
                        嚕路是自行車景點平台，包含定位與附近自行車車站、自行車道、車道周邊自行車站、車道周邊景點等四大功能。
                    </p>
                    <Image src={require(`./../image/LuluPhoto.png`)} alt="嚕路自行車平台" />
                </ProjectDetail>
                <ProjectSkill>
                    <ProjectTitle>使用技術</ProjectTitle>
                    <ul>
                        <List>採用前端技術 React Hooks</List>
                        <List>串接交通部 TPX 第三方 API</List>
                        <List>使用 Style-components 撰寫 CSS 樣式</List>
                        <List>支援 RWD 響應式網頁</List>
                        <List>採用 react-map-gl 地圖功能</List>
                        <List>採用 React Router 建立路由</List>
                    </ul>
                    <ProjectTitle>專案角色</ProjectTitle>
                    <p>負責網站內容規劃、架構設計、前端開發</p>
                </ProjectSkill>
            </ProjectInro>
        </ProjectWrapper>
    );
};

export default Project;
