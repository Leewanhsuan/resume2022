import styled from 'styled-components';
import './style.css';
import { device } from './device';

const Education = () => {
    const Major = styled.span`
        color: #666666;
        font-size: 16px;
        margin-right: 20px;
        @media print ${device.print} {
            font-size: 14px;
        }
    `;

    const Duration = styled.span`
        color: #666666;
        font-size: 16px;
        @media print ${device.print} {
            font-size: 14px;
        }
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

    return (
        <Educate>
            <School>
                <h2>Education</h2>
                <hr />
                <div>
                    <div>
                        <h3>National Cheng Kung University</h3>
                        <Major>MA, Creative Industries Design</Major>
                        <Duration>2018.6</Duration>
                    </div>
                    <div>
                        <h3>National Taipei University of Education</h3>
                        <Major>BA, Cultural and Creative Industry Management</Major>
                        <Duration>2016.6</Duration>
                    </div>
                </div>
            </School>
            <Language>
                <h2>Language</h2>
                <hr />
                <div>
                    <div>
                        <h3>English</h3>
                        <Major>TOIEC 935分</Major>
                    </div>
                    <div>
                        <h3>Japanese</h3>
                        <Major>JEPT N4</Major>
                    </div>
                </div>
            </Language>
        </Educate>
    );
};

export default Education;
