/*****************************************************/

import React, {useState, useEffect} from 'react';
import {
    Application,
    ApplicationSidebar,
    ApplicationSidebarDetails,
    ApplicationSidebarHeading,
    ApplicationSidebarTemplate,
    ApplicationSideNavbar,
    ApplicationSideNavbarItem,
    ApplicationWorkspace,
    ApplicationWorkspaceNav,
    ApplicationWorkspaceSheet,
    Icons,
    SaveButton,
    SideNavbar,
    TemplateName,
    WorkSpaceSideNav,
    WorkSpaceSVG,
    WorkSpaceTextBox
} from "./postCreator.style";
import { HiTemplate, BsCloudUpload, FaShapes, GoTextSize, GiBackgammon, FaReact } from 'react-icons/all';
import WorkSpaceElementText from "../../shared/components/textComponents/workSpaceElementText";
import WorkSpaceElementSVG from "../../shared/components/includes/workSpaceElementSVG";
import {EditableElements, MainContainer, RotateElementIcon} from "../../shared/global.style";
import FontColor from "../../shared/components/textComponents/fontColor";
import Header from "../../shared/components/header/header";
import {element} from "prop-types";
import TextField from '@material-ui/core/TextField';
import BoldIcon from "../../shared/components/textComponents/BoldIcon";
import ItalicIcon from "../../shared/components/textComponents/ItalicIcon";
import UnderlinedIcon from "../../shared/components/textComponents/UnderlinedIcon";
import FontSize from "../../shared/components/textComponents/fontSize";

/*****************************************************/

const PostCreator = () => {
    const [templateName, setTemplateName] = useState('New Template');
    const [templateType, setTemplateType] = useState('Instagram');
    const [sidenavTab, setSidenavTab] = useState(1);
    const [elements, SetElements] = useState([
        {type: "text", id: 'textElement'},
        {type: "image", id: 'imageElement'},
    ]);

    const handleSave = () => {
        // let workSpace = document.querySelector('#workSpaceSheet');
        let allElementDetails = []
        elements.map((element) => {
            let elementContainer = document.querySelector('#' + element.id);
            let position = elementContainer.getBoundingClientRect().toJSON();
            let value;
            let style;
            if (element.type === "image") {
                value = elementContainer.firstChild.src
                style = elementContainer.attributes
            }
            if (element.type === "text") {
                value = elementContainer.firstChild.data
                style = {
                    id: elementContainer.attributes['id'].nodeValue,
                    fontSize: elementContainer.attributes['font-size'].nodeValue,
                    fontStyle: elementContainer.attributes['font-style'].nodeValue,
                    fontWeight: elementContainer.attributes['font-weight'].nodeValue,
                    textDecoration: elementContainer.attributes['text-decoration'].nodeValue
                }
            }
            console.log(value)
            console.log(elementContainer.attributes)
            allElementDetails.push({
                type: element.type,
                value: value,
                style: style,
                position: position
            })
        })
        console.log({
            title: templateName,
            type: templateType,
            elements: allElementDetails
        })
    }

    return (
        <MainContainer>
            <Header>Post Creator</Header>
            <Application>
                <ApplicationSidebar>
                    <SideNavbar>
                        <ApplicationSideNavbar>
                            <ApplicationSideNavbarItem selected={sidenavTab === 1} onClick={() => setSidenavTab(() => 1)}>
                                <Icons><HiTemplate/></Icons>
                                Template
                            </ApplicationSideNavbarItem>
                            <ApplicationSideNavbarItem selected={sidenavTab === 2} onClick={() => setSidenavTab(() => 2)}>
                                <Icons><BsCloudUpload/></Icons>
                                Uploads
                            </ApplicationSideNavbarItem>
                            <ApplicationSideNavbarItem selected={sidenavTab === 3} onClick={() => setSidenavTab(() => 3)}>
                                <Icons><FaShapes/></Icons>
                                Elements
                            </ApplicationSideNavbarItem>
                            <ApplicationSideNavbarItem selected={sidenavTab === 4} onClick={() => setSidenavTab(() => 4)}>
                                <Icons><GoTextSize/></Icons>
                                Text
                            </ApplicationSideNavbarItem>
                            <ApplicationSideNavbarItem selected={sidenavTab === 5} onClick={() => setSidenavTab(() => 5)}>
                                <Icons><GiBackgammon/></Icons>
                                Background
                            </ApplicationSideNavbarItem>
                            <ApplicationSideNavbarItem selected={sidenavTab === 6} onClick={() => setSidenavTab(() => 6)}>
                                <Icons><FaReact/></Icons>
                                React Icons
                            </ApplicationSideNavbarItem>
                        </ApplicationSideNavbar>
                    </SideNavbar>
                    {sidenavTab === 1 && <ApplicationSidebarDetails selected={sidenavTab === 1}>
                        <ApplicationSidebarHeading> Templates</ApplicationSidebarHeading>
                        <ApplicationSidebarTemplate>Sidebar Templates</ApplicationSidebarTemplate>
                        <ApplicationSidebarTemplate>Sidebar Templates</ApplicationSidebarTemplate>
                        <ApplicationSidebarTemplate>Sidebar Templates</ApplicationSidebarTemplate>
                        <ApplicationSidebarTemplate>Sidebar Templates</ApplicationSidebarTemplate>
                        <ApplicationSidebarTemplate>Sidebar Templates</ApplicationSidebarTemplate>
                        <ApplicationSidebarTemplate>Sidebar Templates</ApplicationSidebarTemplate>
                        <ApplicationSidebarTemplate>Sidebar Templates</ApplicationSidebarTemplate>
                    </ApplicationSidebarDetails>
                    }
                    {sidenavTab === 2 && <ApplicationSidebarDetails selected={sidenavTab === 2}>
                        <ApplicationSidebarHeading> Uploads</ApplicationSidebarHeading>
                        <ApplicationSidebarTemplate>Image</ApplicationSidebarTemplate>
                        <ApplicationSidebarTemplate>Image</ApplicationSidebarTemplate>
                        <ApplicationSidebarTemplate>Image</ApplicationSidebarTemplate>
                        <ApplicationSidebarTemplate>Image</ApplicationSidebarTemplate>
                        <ApplicationSidebarTemplate>Image</ApplicationSidebarTemplate>
                        <ApplicationSidebarTemplate>Image</ApplicationSidebarTemplate>
                    </ApplicationSidebarDetails>
                    }
                    {sidenavTab === 3 && <ApplicationSidebarDetails selected={sidenavTab === 3}>
                        <ApplicationSidebarHeading> Elements</ApplicationSidebarHeading>
                        <ApplicationSidebarTemplate>Element</ApplicationSidebarTemplate>
                        <ApplicationSidebarTemplate>Element</ApplicationSidebarTemplate>
                        <ApplicationSidebarTemplate>Element</ApplicationSidebarTemplate>
                        <ApplicationSidebarTemplate>Element</ApplicationSidebarTemplate>
                        <ApplicationSidebarTemplate>Element</ApplicationSidebarTemplate>
                        <ApplicationSidebarTemplate>Element</ApplicationSidebarTemplate>
                    </ApplicationSidebarDetails>
                    }
                    {sidenavTab === 4 && <ApplicationSidebarDetails selected={sidenavTab === 4}>
                        <ApplicationSidebarHeading> Text</ApplicationSidebarHeading>
                        <ApplicationSidebarTemplate>Text Model 1</ApplicationSidebarTemplate>
                        <ApplicationSidebarTemplate>Text Model 2</ApplicationSidebarTemplate>
                        <ApplicationSidebarTemplate>Text Model 3</ApplicationSidebarTemplate>
                        <ApplicationSidebarTemplate>Text Model 4</ApplicationSidebarTemplate>
                        <ApplicationSidebarTemplate>Text Model 5</ApplicationSidebarTemplate>
                        <ApplicationSidebarTemplate>Text Model 6</ApplicationSidebarTemplate>
                    </ApplicationSidebarDetails>
                    }
                    {sidenavTab === 5 && <ApplicationSidebarDetails selected={sidenavTab === 5}>
                        <ApplicationSidebarHeading> Background </ApplicationSidebarHeading>
                        <ApplicationSidebarTemplate>Background 1</ApplicationSidebarTemplate>
                        <ApplicationSidebarTemplate>Background 2</ApplicationSidebarTemplate>
                        <ApplicationSidebarTemplate>Background 3</ApplicationSidebarTemplate>
                        <ApplicationSidebarTemplate>Background 4</ApplicationSidebarTemplate>
                        <ApplicationSidebarTemplate>Background 5</ApplicationSidebarTemplate>
                        <ApplicationSidebarTemplate>Background 6</ApplicationSidebarTemplate>
                    </ApplicationSidebarDetails>
                    }
                    {sidenavTab === 6 && <ApplicationSidebarDetails selected={sidenavTab === 6}>
                    <ApplicationSidebarHeading> React Icons </ApplicationSidebarHeading>
                    <ApplicationSidebarTemplate>React Icons 1</ApplicationSidebarTemplate>
                    <ApplicationSidebarTemplate>React Icons 2</ApplicationSidebarTemplate>
                    <ApplicationSidebarTemplate>React Icons 3</ApplicationSidebarTemplate>
                    <ApplicationSidebarTemplate>React Icons 4</ApplicationSidebarTemplate>
                    <ApplicationSidebarTemplate>React Icons 5</ApplicationSidebarTemplate>
                    <ApplicationSidebarTemplate>React Icons 6</ApplicationSidebarTemplate>
                </ApplicationSidebarDetails>
                    }
                </ApplicationSidebar>
                <ApplicationWorkspace>
                    <ApplicationWorkspaceNav>
                        <SaveButton onClick={handleSave}>Save as Draft</SaveButton>
                        <TextField id="standard-basic" value={templateName} label="Template name" onChange={(e) => setTemplateName(e.target.value)} />
                        <SaveButton onClick={handleSave}>Save</SaveButton>
                    </ApplicationWorkspaceNav>
                    <ApplicationWorkspaceSheet id='workSpaceSheet'>
                        <WorkSpaceElementSVG id='imageElement'/>
                        <WorkSpaceElementText id='textElement'/>
                    </ApplicationWorkspaceSheet>
                    {/*<WorkSpaceSideNav>*/}
                    {/*    <FontColor isSelected={true} showColorPalate={true}/>*/}
                    {/*</WorkSpaceSideNav>*/}
                </ApplicationWorkspace>
            </Application>
        </MainContainer>
    )
}

/*****************************************************/
export default PostCreator;
/*****************************************************/
