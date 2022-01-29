import styled from 'styled-components';
import Personal from './Personal';
import Skills from './Skills';
import Project from './Project';
import Jobs from './Jobs';
import Education from './Education';

const MainEn = () => {
    const Main = styled.main`
        max-width: 780px;
        margin: 0 auto;
        padding: 40px 20px;
    `;

    return (
        <Main>
            <Personal />
            <Skills />
            <Project />
            <Jobs />
            <Education />
        </Main>
    );
};

export default MainEn;
