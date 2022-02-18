import styled from 'styled-components';
import './style.css';
import { device } from './device';

const Jobs = () => {
    const JobWrapper = styled.div``;

    const Company = styled.span`
        color: #4169e1;
        font-size: 16px;
        margin-right: 20px;

        @media print ${device.print} {
            font-size: 14px;
        }
    `;

    const Duration = styled.span`
        color: #666666;
        font-size: 16px;
        margin-right: 20px;

        @media print ${device.print} {
            font-size: 12px;
        }
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
                <h2>工作經歷</h2>
                <hr />
                <div>
                    <div>
                        <h3>數位行銷</h3>
                        <Company>麻布數據科技（發票存摺）</Company>
                        <Duration>2020 年 4 月 - 2021 年 10 月</Duration>
                        <ul>
                            <List>
                                規劃以下載與用戶黏著為核心的數位行銷策略，期間累積超過150萬人次下載，月活躍用戶年成長
                                25%
                            </List>
                            <List>
                                導入 GA4 用戶行為分析，制定用戶分級分類，規劃對應行銷溝通方式與活動提升用戶黏著度
                            </List>
                            <List>
                                與產品開發團隊合作設計行銷工具模組如「電子信模組、一頁式活動網頁、任務與優惠券」，並有效運用工具。透過電子信喚回
                                3% 流失用戶，並創造兩週內三萬人參加活動的紀錄
                            </List>
                            <List>
                                投放 App 廣告包含 Google、Search Ads、FB 以及 Line
                                等平台，搭配時事議題放大App優點，並透過 A/B Test 優化，讓 Google 廣告轉換有效成長 10%
                            </List>
                        </ul>
                    </div>
                    <div>
                        <h3>品牌行銷</h3>
                        <Company>EXP 創璟國際品牌顧問公司</Company>
                        <Duration>2018 年 10 月 - 2020 年 3 月</Duration>
                        <ul>
                            <List>
                                公司官網改版負責人，統籌設計與工程團隊，以 Wordpress 架設網頁，並優化 SEO 與使用者體驗
                            </List>
                            <List>
                                透過產業研究、市場調查、企業訪談與消費者深度訪談等研究方法，協助客戶解析市場與擬定品牌策略，擔任專案負責人，專案績效年成長
                                5%
                            </List>
                        </ul>
                    </div>
                </div>
            </section>
        </JobWrapper>
    );
};

export default Jobs;
