import {
    AppBar,
    Drawer,
    IconButton,
    Tooltip,
    Typography,
} from '@material-ui/core';
import {
    Menu as MenuIcon,
    ArrowBack as ArrowBackIcon,
    ArrowForward as ArrowForwardIcon,
} from '@material-ui/icons';
import React, { useState } from 'react';
import AppletInfo from 'interfaces/AppletInfo';

import {
    AppBarWrapper,
    SpaceBox,
    StyledToolbar,
    AppletBoxWrapper,
    ExpandingFlexWrapper,
} from './styles';
import AppletList from 'components/AppletList';

interface OwnProps {
    appletInfo?: AppletInfo;
    bloomVersion: string;
    setSelectedApplet: (appletName: string) => void;
    isControlDrawerOpen: boolean;
    setIsControlDrawerOpen: (newValue: boolean) => void;
}

const MenuBar: React.FC<OwnProps> = ({
    appletInfo,
    bloomVersion,
    setSelectedApplet,
    isControlDrawerOpen,
    setIsControlDrawerOpen,
}) => {
    const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);

    return (
        <>
            <AppBarWrapper>
                <AppBar position="static">
                    <StyledToolbar>
                        <Tooltip title="Open Menu">
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={() => setIsMenuDrawerOpen(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Tooltip>
                        <ExpandingFlexWrapper>
                            <SpaceBox>
                                <Typography variant="h6">Bloom</Typography>
                            </SpaceBox>
                            <SpaceBox>
                                <Typography variant="subtitle1">
                                    {bloomVersion}
                                </Typography>
                            </SpaceBox>
                        </ExpandingFlexWrapper>

                        {appletInfo && (
                            <AppletBoxWrapper>
                                <ExpandingFlexWrapper>
                                    <SpaceBox>
                                        <Typography variant="h6">
                                            {appletInfo.displayName}
                                        </Typography>
                                    </SpaceBox>
                                    <SpaceBox>
                                        <Typography variant="subtitle1">
                                            {appletInfo.version}
                                        </Typography>
                                    </SpaceBox>
                                </ExpandingFlexWrapper>
                                <SpaceBox>
                                    {isControlDrawerOpen ? (
                                        <Tooltip title="Collapse Control Drawer">
                                            <IconButton
                                                edge="start"
                                                color="inherit"
                                                aria-label="drawer"
                                                onClick={() =>
                                                    setIsControlDrawerOpen(
                                                        false,
                                                    )
                                                }
                                            >
                                                <ArrowForwardIcon />
                                            </IconButton>
                                        </Tooltip>
                                    ) : (
                                        <Tooltip title="Expand Control Drawer">
                                            <IconButton
                                                edge="start"
                                                color="inherit"
                                                aria-label="drawer"
                                                onClick={() =>
                                                    setIsControlDrawerOpen(true)
                                                }
                                            >
                                                <ArrowBackIcon />
                                            </IconButton>
                                        </Tooltip>
                                    )}
                                </SpaceBox>
                            </AppletBoxWrapper>
                        )}
                    </StyledToolbar>
                </AppBar>
            </AppBarWrapper>
            <Drawer
                open={isMenuDrawerOpen}
                onClose={() => setIsMenuDrawerOpen(false)}
                anchor="left"
            >
                <AppletList
                    setIsMenuDrawerOpen={setIsMenuDrawerOpen}
                    setSelectedApplet={setSelectedApplet}
                />
            </Drawer>
        </>
    );
};

export default MenuBar;
