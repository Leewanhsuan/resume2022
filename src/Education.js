import styled from 'styled-components';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faClock } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
    const Major = styled.span`
        color: #666666;
        font-size: 14px;
        margin-right: 20px;
    `;

    const Duration = styled.span`
        color: #666666;
        font-size: 14px;
        margin-right: 20px;
    `;
    return (
        <div>
            <section>
                <h2>學歷</h2>
                <div>
                    <div>
                        <h3>國立成功大學</h3>
                        <Major>
                            <FontAwesomeIcon
                                icon={faSchool}
                                style={{
                                    color: '#666666',
                                    marginRight: '6px',
                                }}
                            />
                            創意產業設計所（品牌行銷）
                        </Major>
                        <Duration>
                            <FontAwesomeIcon
                                icon={faClock}
                                style={{
                                    color: '#666666',
                                    marginRight: '6px',
                                    marginLeft: '8px',
                                }}
                            />
                            2020 年 4 月 - 2021 年 10 月
                        </Duration>
                    </div>
                    <div>
                        <hr />
                        <h3>國立臺北教育大學</h3>
                        <Major>
                            <FontAwesomeIcon
                                icon={faSchool}
                                style={{
                                    color: '#666666',
                                    marginRight: '6px',
                                }}
                            />
                            文化創意產業經營系
                        </Major>
                        <Duration>
                            <FontAwesomeIcon
                                icon={faClock}
                                style={{
                                    color: '#666666',
                                    marginRight: '6px',
                                    marginLeft: '8px',
                                }}
                            />
                            2020 年 4 月 - 2021 年 10 月
                        </Duration>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Education;
