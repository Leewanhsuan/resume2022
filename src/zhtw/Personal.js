import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Personal = () => {
    const Avatar = styled.div`
        text-align: center;
    `;

    const Image = styled.img`
        border-radius: 50%;
        width: 130px;
    `;

    const Title = styled.h1`
        text-align: center;
        font-size: 30px;
        margin: 20px 0;
    `;

    const SocialMedia = styled.div`
        margin-bottom: 20px;
        text-align: center;
    `;

    const MediaLink = styled.a`
        color: #666666;
        text-decoration: none;
        margin: 0 10px;
    `;

    const HighLight = styled.div`
        margin-bottom: 20px;
        text-align: center;
        font-size: 16px;
        letter-space: 2px;
        color: #4169e1;
    `;

    const Description = styled.div`
        margin-bottom: 20px;
        font-size: 14px;
    `;

    return (
        <div>
            <Avatar>
                <Image src={require(`./../image/photo.png`)} alt="" />
            </Avatar>
            <Title>李婉瑄 Sandy</Title>
            <HighLight>從與工程師合作到成為一名工程師，不變的是保有一顆好奇的心</HighLight>
            <SocialMedia>
                <MediaLink href="https://www.linkedin.com/in/wanhsuanlee/" target="_blank">
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        style={{
                            color: '#666666',
                            marginRight: '6px',
                        }}
                    />
                    wanhsuanlee
                </MediaLink>
                <MediaLink href="https://github.com/Leewanhsuan?tab=projects" target="_blank">
                    <FontAwesomeIcon
                        icon={faGithub}
                        style={{
                            color: '#666666',
                            marginRight: '6px',
                        }}
                    />
                    Leewanhsuan
                </MediaLink>
                <MediaLink href="tel:0912882877" target="_blank">
                    <FontAwesomeIcon
                        icon={faPhone}
                        style={{
                            color: '#666666',
                            marginRight: '6px',
                        }}
                    />
                    0912882877
                </MediaLink>
                <MediaLink href="mailto:awanwan940204@gmail.com" target="_blank">
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{
                            color: '#666666',
                            marginRight: '6px',
                        }}
                    />
                    awanwan940204@gmail.com
                </MediaLink>
            </SocialMedia>
            <Description>
                曾在金融新創擔任產品行銷負責人，擁有三年的產品行銷與設計經驗，過程經常與產品前端工程師、後端工程師、產品經理等共同完成產品需求，進而發現自己對於產品整體建構過程深感興趣，因而開始邁向軟體工程師領域。
                <br />
                <br />
                2021/10 開始全職投入學習，報名 AlphaCamp 前端工程師培訓課程、參加六角學院 F2E 前端開發挑戰賽、自學 React
                Hook 與練習開發 Side Project、參加前端技術讀書會，在過程中不斷的學習新知、在解決問題以及 Debug
                過程中越挫越勇，享受解決後帶來成就感的滋味，期待 2022 年踏入軟體開發之路。
            </Description>
        </div>
    );
};

export default Personal;
