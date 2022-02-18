import styled from 'styled-components';
import './style.css';
import { device } from './device';

const Jobs = () => {
    const JobWrapper = styled.div``;

    const Company = styled.span`
        color: #4169e1;
        font-size: 16px;
        margin-right: 20px;
    `;

    const Duration = styled.span`
        color: #666666;
        font-size: 16px;
        margin-right: 20px;
    `;

    const List = styled.li`
        font-size: 16px;
        color: #666666;
        margin-bottom: 5px;
        @media print ${device.print} {
            font-size: 14px;
        }
    `;

    return (
        <JobWrapper>
            <section>
                <h2>Professional Experience</h2>
                <hr />
                <div>
                    <div>
                        <h3>Marketing Specialist</h3>
                        <Company>Mdata Group Co.（Invos, MoneyBook ）</Company>
                        <Duration>2020 年 4 月 - 2021 年 10 月</Duration>
                        <ul>
                            <List>
                                Planned multi-channel marketing strategy focusing on downloading and user engagement.
                                The app reached 1.5 million downloads and increased monthly active users by 25% yearly.
                            </List>
                            <List>
                                Implemented user behavior analysis, visualized behavior data insights of millions of
                                users and created a dashboard through Data Studio.
                            </List>
                            <List>
                                Integrated product team to manage email marketing, online coupons and in-app messaging
                                strategies. Regain 3% lost customers through EDM. Hosted a thirty-thousand-people online
                                event for two weeks.
                            </List>
                            <List>
                                Improved advertising through diverse campaigns (centered around current affairs) and
                                methodical AB tests, increased conversion rate of Google ads by 10%.
                            </List>
                        </ul>
                    </div>
                    <div>
                        <h3>Brand Marketer</h3>
                        <Company>EXP Brand Consultant Group</Company>
                        <Duration>2018 年 10 月 - 2020 年 3 月</Duration>
                        <ul>
                            <List>
                                Re-design official website through Wordpress, worked closed with design team and
                                engineer. Improve SEO and user experiences.
                            </List>
                            <List>
                                Responsible for 15+ brand redesign projects, increased year-over-year performance growth
                                by 5%.
                            </List>
                            <List>
                                Performed quantitative and qualitative analyses to evaluate brand strategies and develop
                                brand positioning for 15+ Taiwan Small and Medium Businesses per year.
                            </List>
                        </ul>
                    </div>
                </div>
            </section>
        </JobWrapper>
    );
};

export default Jobs;
