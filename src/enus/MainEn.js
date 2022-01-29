import styled from 'styled-components';
import Personal from './Personal';
import Skills from './Skills';
import Project from './Project';
import Jobs from './Jobs';
import Education from './Education';
import './style.css';

const MainEn = () => {
    const MainWrapper = styled.div`
        max-width: 780px;
        margin: 0 auto;
        padding: 40px 20px;
    `;

    return (
        <MainWrapper>
            <Personal />
            <Skills />
            <Project />
            <Jobs />
            <Education />
        </MainWrapper>
    );
};

export default MainEn;
