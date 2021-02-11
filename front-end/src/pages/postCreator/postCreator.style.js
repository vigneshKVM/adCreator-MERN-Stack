/*****************************************************/

import styled from 'styled-components';

/*****************************************************/

export const Application = styled.div`
    display: grid;
    grid-template-columns: 500px 900px;
`;

/*****************************************************/

export const ApplicationSidebar = styled.div`
    display: grid;
    grid-template-columns: 80px 1fr;
    background: #404040;
`;

/*****************************************************/

export const SideNavbar = styled.div`
    
`;

/*****************************************************/

export const ApplicationSideNavbar = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background: black;
    padding: 1rem 0;
`;

/*****************************************************/

export const ApplicationSideNavbarItem = styled.div`
    width: 80px;
    font-size: .8rem;
    height: 80px;
    text-align: center;
    cursor: pointer;
    color: ${({selected}) => selected ? 'black' : "white"};
    background: ${({selected}) => selected ? 'lightGrey' : "black"};
    transition: color .6s, background .6s;
    &:hover{
      background: lightGrey;
    }
`;

/*****************************************************/

export const Icons = styled.div`
    width: 100%;
    font-size: 2rem;
`;

/*****************************************************/

export const ApplicationSidebarDetails = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: scroll;
    height: 100vh;
    padding-left: 1rem;
    scrollbar-color: black grey;
    scrollbar-width: thin;
`;

/*****************************************************/

export const ApplicationSidebarHeading = styled.h2`
    width: 100%;
    text-align: center;
    padding: .6rem 1rem;
    margin: 0;
    font-size: 1.6rem;
    color: white;
`;

/*****************************************************/

export const TemplateSectionTabs = styled.div`
    width: 100%;
    
`;

/*****************************************************/

export const ApplicationSidebarTemplate = styled.div`
    width: 150px;
    height: 160px;
    margin: 1rem;
    background-color: deepskyblue;
    text-align: center;
`;

/*****************************************************/

export const ApplicationWorkspace = styled.div`
    background-color: darkgray;
    height: 700px;
    display: flex;
    flex-direction: column;
`;

/*****************************************************/

export const ApplicationWorkspaceNav = styled.div`
    background: white;
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 1rem;
`;

/*****************************************************/

export const SaveButton = styled.div`
    padding: .5rem;
    font-size: 1rem;
    background: deepskyblue;
    color: white;
    margin: .5rem;
    display: inline-block;
    border-radius: 5px;
    &:hover {
      background: lightskyblue;
      cursor: pointer;
    }
`

/*****************************************************/

export const TemplateName = styled.input`
    border: none;
`

/*****************************************************/

export const ApplicationWorkspaceSheet = styled.div`
    background-color: white;
    text-align: center;
    width: 500px;
    height: 600px;
    margin: 2rem auto;
`;

/*****************************************************/

export const WorkSpaceSideNav = styled.div`
    margin: 140px 0;
`;

/*****************************************************/

export const WorkSpaceSVG = styled.div`
    width: 200px;
    height: 200px;
`;

/*****************************************************/

export const WorkSpaceImageContainer = styled.div`
    width: 200px;
`;

/*****************************************************/

export const WorkSpaceImage = styled.img`
    width: 100%;
`;

export const WorkSpaceTextBox = styled.span`
    width: 100%;
    min-height: 30px;
    resize: none;
    border: none;
    box-shadow: none;
    outline: none;
    overflow: auto;
    text-align: center;
    padding: .5rem;
    background: none;
    color: ${props => props.fontColor || "palevioletred"};
    font-family: ${props => props.fontFamily || "Times New Roman"};
    font-size: ${props => props.fontSize + 'px' || "16px"};
    font-weight: ${props => props.fontWeight || "normal"};
    font-style: ${props => props.fontStyle || "normal"};
    text-decoration: ${props => props.textDecoration || "none"};
    &:hover {
      cursor: text;
    }
`;

/*****************************************************/

/*****************************************************/

