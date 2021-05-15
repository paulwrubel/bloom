import { Collapse, List, ListItem, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

import applets from 'Applets';
import AppletInfo from 'interfaces/AppletInfo';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ListItemWrapper, StyledDrawer } from './styles';

interface OwnProps {
    isMenuDrawerOpen: boolean;
    setIsMenuDrawerOpen: (isMenuDrawerOpen: boolean) => void;
}

const MenuDrawer: React.FC<OwnProps> = ({
    isMenuDrawerOpen,
    setIsMenuDrawerOpen,
}) => {
    const [isAppletListOpen, setIsAppletListOpen] = useState(false);

    const sortedApplets = [...applets].sort((a: AppletInfo, b: AppletInfo) => {
        const isABeforeB =
            a.displayName.toLowerCase() < b.displayName.toLowerCase();
        return isABeforeB ? -1 : 1;
    });

    return (
        <StyledDrawer
            open={isMenuDrawerOpen}
            onClose={() => setIsMenuDrawerOpen(false)}
            anchor="left"
        >
            <List>
                <ListItem button component={Link} to={`/`}>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem
                    button
                    onClick={() => {
                        setIsAppletListOpen(!isAppletListOpen);
                    }}
                >
                    <ListItemText primary="Applets" />
                    {isAppletListOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={isAppletListOpen} timeout="auto">
                    <List
                        onClick={() => setIsMenuDrawerOpen(false)}
                        disablePadding
                    >
                        {sortedApplets.map((appletInfo: AppletInfo) => (
                            <ListItemWrapper key={appletInfo.name}>
                                <ListItem
                                    button
                                    component={Link}
                                    to={`/a/${appletInfo.name}`}
                                >
                                    <ListItemText
                                        primary={appletInfo.displayName}
                                    />
                                </ListItem>
                            </ListItemWrapper>
                        ))}
                    </List>
                </Collapse>
                <ListItem button component={Link} to={`/about`}>
                    <ListItemText primary="About" />
                </ListItem>
                <ListItem
                    button
                    component={'a'}
                    href={'https://github.com/paulwrubel/bloom'}
                    target={'_blank'}
                >
                    <ListItemText primary="GitHub" />
                </ListItem>
            </List>
        </StyledDrawer>
    );
};

export default MenuDrawer;
