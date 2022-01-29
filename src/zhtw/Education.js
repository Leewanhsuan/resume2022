import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faClock } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
    const Major = styled.span`
        color: #666666;
        font-size: 16px;
        margin-right: 20px;
    `;

    const Duration = styled.span`
        color: #666666;
        font-size: 16px;
        margin-right: 20px;
    `;

    const Educate = styled.section`
        display: flex;
        justify-content: space-between;
    `;

    const School = styled.div`
        width: 60%;
    `;

    const Language = styled.div`
        width: 30%;
    `;

    // const Title = styled.h3`
    //     border-top: 1px solid #4169e1;
    // `;

    return (
        <Educate>
            <School>
                <h2>學歷</h2>
                <hr />
                <div>
                    <div>
                        <h3>國立成功大學</h3>
                        <Major>國立成功大學 規劃與設計學院創意產業設計所</Major>
                        <Duration>2020 年 4 月 - 2021 年 10 月</Duration>
                    </div>
                    <div>
                        <h3>國立臺北教育大學</h3>
                        <Major>文化創意產業經營系</Major>
                        <Duration>2020 年 4 月 - 2021 年 10 月</Duration>
                    </div>
                </div>
            </School>
            <Language>
                <h2>語言</h2>
                <div>
                    <div>
                        <hr />
                        <h3>英文</h3>

                        <Major>TOIEC 935分</Major>
                    </div>
                    <div>
                        <h3>日文</h3>
                        <Major>JEPT N4</Major>
                    </div>
                </div>
            </Language>
        </Educate>
    );
};

export default Education;
