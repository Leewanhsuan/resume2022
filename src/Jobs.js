import styled from 'styled-components';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faClock } from '@fortawesome/free-solid-svg-icons';

const Jobs = () => {
    const Company = styled.span`
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
                <h2>工作經歷</h2>
                <div>
                    <div>
                        <h3 class="job-title">數位行銷</h3>
                        <Company>
                            <FontAwesomeIcon
                                icon={faBuilding}
                                style={{
                                    color: '#666666',
                                    marginRight: '6px',
                                }}
                            />
                            麻布數據科技-發票存摺
                        </Company>
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
                        <p>
                            Planned multi-channel marketing strategy focus on downloading and user engagement. The app
                            reached 1.5 million downloads and increased monthly active users by 11% per year.
                        </p>
                    </div>
                    <div>
                        <hr />
                        <h3>數位行銷</h3>
                        <Company>
                            <FontAwesomeIcon
                                icon={faBuilding}
                                style={{
                                    color: '#666666',
                                    marginRight: '6px',
                                }}
                            />
                            麻布數據科技-發票存摺
                        </Company>
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
                        <p>
                            Planned multi-channel marketing strategy focus on downloading and user engagement. The app
                            reached 1.5 million downloads and increased monthly active users by 11% per year.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Jobs;
