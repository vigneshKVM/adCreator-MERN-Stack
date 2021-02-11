/*****************************************************/

import styled from "styled-components";

/*****************************************************/

export const Nav = styled.div`
    background-color: darkviolet;
    width: 1400px;
`;

/*****************************************************/

export const NavContainer =styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

/*****************************************************/

export const NavHeading = styled.h1`
    text-align: center;
    padding: 1rem;
    margin: 0;
    color: white;
`;

/*****************************************************/

export const NavSection = styled.div`
    
`

/*****************************************************/

export const NavItem = styled.div`
    padding: .5rem;
    font-size: 1rem;
    background: red;
    color: white;
    margin: 1rem;
    border-radius: 5px;
    &:hover {
      background: deeppink;
      cursor: pointer;
    }
`

/*****************************************************/
