import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { device } from './device';
import './style.css';

const Personal = () => {
    const Avatar = styled.div`
        text-align: center;
        @media print ${device.print} {
            text-align: start;
            width: 15%;
        }
    `;

    const Image = styled.img`
        border-radius: 50%;
        width: 130px;
        @media print ${device.print} {
            width: 100px;
            margin-right: 50px;
        }
    `;

    const Title = styled.h1`
        text-align: center;
        font-size: 30px;
        margin: 20px 0;
        @media print ${device.print} {
            text-align: start;
            margin: 0;
            font-size: 22px;
        }
    `;

    const HighLight = styled.div`
        margin-bottom: 20px;
        text-align: center;
        font-size: 16px;
        letter-space: 2px;
        color: #4169e1;
        @media print ${device.print} {
            text-align: start;
            font-size: 14px;
            margin-bottom: 0px;
        }
    `;

    const SocialMedia = styled.div`
        margin-bottom: 20px;
        text-align: center;
        @media print ${device.print} {
            text-align: start;
            width: 45%;
        }
    `;

    const MediaLink = styled.a`
        color: #666666;
        text-decoration: none;
        margin: 0 10px;
        display: inline-block;
        @media print ${device.print} {
            text-align: start;
            font-size: 14px;
        }
    `;

    const Description = styled.p`
        margin-bottom: 20px;
        font-size: 16px;
        @media print ${device.print} {
            font-size: 14px;
        }
    `;

    const TopInfo = styled.div`
        @media print ${device.print} {
            display: flex;
        }
    `;

    const Name = styled.div`
        @media print ${device.print} {
            width: 45%;
            margin-left: 20px;
        }
    `;

    return (
        <div>
            <TopInfo>
                <Avatar>
                    <Image src={require(`./../image/photo.png`)} alt="" />
                </Avatar>
                <Name>
                    <Title>Sandy Lee</Title>
                    <HighLight>Frontend Development | Self Learner | Start-up Background </HighLight>
                </Name>
                <SocialMedia>
                    <MediaLink href="https://www.linkedin.com/in/wanhsuanlee/" target="_blank">
                        <div>
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                style={{
                                    color: '#666666',
                                    marginRight: '6px',
                                }}
                            />
                            wanhsuanlee
                        </div>
                    </MediaLink>
                    <MediaLink href="https://github.com/Leewanhsuan?tab=projects" target="_blank">
                        <div>
                            <FontAwesomeIcon
                                icon={faGithub}
                                style={{
                                    color: '#666666',
                                    marginRight: '6px',
                                }}
                            />
                            Leewanhsuan
                        </div>
                    </MediaLink>
                    <MediaLink href="tel:0912882877" target="_blank">
                        <div>
                            <FontAwesomeIcon
                                icon={faPhone}
                                style={{
                                    color: '#666666',
                                    marginRight: '6px',
                                }}
                            />
                            0912882877
                        </div>
                    </MediaLink>
                    <MediaLink href="mailto:awanwan940204@gmail.com" target="_blank">
                        <div>
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                style={{
                                    color: '#666666',
                                    marginRight: '6px',
                                }}
                            />
                            awanwan940204@gmail.com
                        </div>
                    </MediaLink>
                </SocialMedia>
            </TopInfo>
            <Description>
                With motivation and interest about software architecture and user experiences optimization, I learned
                related skills through AlphaCamp online lessons and joined Hexschool（六角學院）F2E web competition in
                the least amount of time. I also joined web developer meetups as a regular attendee.
                <br />
                <br />
                Given to the past experiences as the first marketer in Invos app（發票存摺）, I established
                multi-channel marketing strategy through user analytics and improved with trial and error. This proves
                my capability to embrace new things and keep learning through mistakes.
                <br />
                <br />I am seeking use proven skills to meet business needs, and looking forward to the new journey as
                developer.
            </Description>
        </div>
    );
};

export default Personal;
