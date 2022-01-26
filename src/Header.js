import styled from 'styled-components';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const NavWrapper = styled.div`
        height: 60px;
        color: #666666;
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
    `;

    const Nav = styled.div`
        max-width: 820px;
        margin: 0 auto;
        height: 100%;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `;

    const NavTitle = styled.span`
        font-weight: bold;
        letter-spacing: 1px;
    `;

    return (
        <NavWrapper>
            <Nav>
                <NavTitle>Wan Hsuan Lee</NavTitle>
                <a href="#">
                    <FontAwesomeIcon
                        icon={faPrint}
                        style={{
                            color: '#666666',
                            marginRight: '6px',
                        }}
                    />
                </a>
            </Nav>
        </NavWrapper>
    );
};

export default Header;
