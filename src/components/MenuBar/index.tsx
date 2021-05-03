import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import React from 'react';
import AppletInfo from 'interfaces/AppletInfo';

import {
    ExpandingWrapper,
    AppBarWrapper,
    SpaceBox,
    FlexWrapper,
} from './styles';

interface OwnProps {
    appletInfo?: AppletInfo;
    bloomVersion: string;
}

const MenuBar: React.FC<OwnProps> = ({ appletInfo, bloomVersion }) => {
    return (
        <AppBarWrapper>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
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
                </Toolbar>
            </AppBar>
        </AppBarWrapper>
    );
};

export default MenuBar;
