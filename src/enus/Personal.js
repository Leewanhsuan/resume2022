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
            <Title>Wan Hsuan Lee (Sandy)</Title>
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
                擁有三年的行銷與平面設計能力，過去在 FinTech
                新創擔任行銷，與前端工程師、PM、設計一同合作完成多項專案。發現自己對於專案如何從 0
                到有的建造過程深感興趣，因而開始接觸網頁開發領域。 <br />
                <br />
                2021 10月開始全職投入學習，報名了 AlphaCamp 線上課程、參加六角學院 F2E 挑戰賽、自學 React Hook，並參加
                Clean Code 技術讀書會。樂於學習新的前端技術，在 debug
                過程中越挫越勇，期待未來持續創造各種讓網頁變得更好的可能性。
            </Description>
        </div>
    );
};

export default Personal;
