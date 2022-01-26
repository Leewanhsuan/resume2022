import styled from 'styled-components';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Personal = () => {
    const Avatar = styled.div`
        text-align: center;
    `;

    const Image = styled.img`
        border-radius: 50%;
        width: 120px;
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
        color: #0abbb5;
    `;

    const Description = styled.div`
        margin-bottom: 20px;
    `;

    return (
        <div>
            <Avatar>
                <Image
                    src="https://hsuanxcollection.files.wordpress.com/2021/09/personal-img.jpg?resize=320,320"
                    alt=""
                />
            </Avatar>
            <Title>李婉瑄 Sandy</Title>
            <HighLight>前端工程師｜營運思維｜設計能力</HighLight>
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
                我是婉瑄，是一個具備營運思維與平面設計能力的前端工程師！過去曾在金融科技新創公司擔任行銷，與前端工程師合作完成過各式各樣的專案，發現自己對於能夠成為建築專案的角色很感興趣，因而開始接觸網頁開發領域。比起將產品推廣給使用者的數位行銷，更熱衷在完成各種專案的帶給我的成就！
            </Description>
        </div>
    );
};

export default Personal;
