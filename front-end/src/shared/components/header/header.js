import React, {useContext} from "react";
import {Nav, NavContainer, NavHeading, NavItem, NavSection} from "./header.style";
import {AuthContext} from "../../context/auth-context";

const Header = (props) => {
    const auth = useContext(AuthContext);

    const handleLogout = () => {
        fetch('http://localhost:5000/api/logout', {
            method: 'POST',

        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                auth.logout();
            })
    }

    return(
        <Nav>
            <NavContainer>
                <NavHeading>Ad Creator</NavHeading>
                <NavSection>
                    <NavItem onClick={handleLogout}>
                        Logout
                    </NavItem>
                </NavSection>
            </NavContainer>
        </Nav>
    )
}

export default Header;
