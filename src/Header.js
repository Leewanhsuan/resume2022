import styled from 'styled-components';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { device } from './zhtw/device';

const Header = () => {
    const NavWrapper = styled.div`
        height: 60px;
        color: #666666;
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
        @media print ${device.print} {
            display: none;
        }
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
                <span>
                    <Link to="/">中</Link>
                    <Link to="/en">EN</Link>
                </span>
            </Nav>
        </NavWrapper>
    );
};

export default Header;
