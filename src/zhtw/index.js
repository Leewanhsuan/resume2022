import styled from 'styled-components';
import Personal from './Personal';
import Skills from './Skills';
import Project from './Project';
import Jobs from './Jobs';
import Education from './Education';

const MainZh = () => {
    const Main = styled.main`
        max-width: 780px;
        margin: 0 auto;
        padding: 40px 20px;
    `;

    return (
        <Main>
            <Personal />
            <Education />
            <Jobs />
            <Skills />
            <Project />
        </Main>
    );
};

export default MainZh;
