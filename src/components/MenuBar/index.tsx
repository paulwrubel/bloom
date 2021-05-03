import {
    AppBar,
    Drawer,
    IconButton,
    Tooltip,
    Typography,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import React, { useState } from 'react';
import AppletInfo from 'interfaces/AppletInfo';

import {
    ExpandingWrapper,
    AppBarWrapper,
    SpaceBox,
    FlexWrapper,
    StyledToolbar,
} from './styles';
import AppletList from 'components/AppletList';

interface OwnProps {
    appletInfo?: AppletInfo;
    bloomVersion: string;
    setSelectedApplet: (appletName: string) => void;
}

const MenuBar: React.FC<OwnProps> = ({
    appletInfo,
    bloomVersion,
    setSelectedApplet,
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

                        {appletInfo && (
                            <ExpandingWrapper>
                                <FlexWrapper>
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
                                </FlexWrapper>
                            </ExpandingWrapper>
                        )}
                        <FlexWrapper>
                            <SpaceBox>
                                <Typography variant="h6">Bloom</Typography>
                            </SpaceBox>
                            <SpaceBox>
                                <Typography variant="subtitle1">
                                    {bloomVersion}
                                </Typography>
                            </SpaceBox>
                        </FlexWrapper>
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
