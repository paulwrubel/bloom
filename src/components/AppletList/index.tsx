import { List, ListItem, ListItemText } from '@material-ui/core';

import appletMap from 'AppletMap';
import AppletInfo from 'interfaces/AppletInfo';
import React from 'react';

interface OwnProps {
    setSelectedApplet: (appletName: string) => void;
    setIsMenuDrawerOpen: (isMenuDrawerOpen: boolean) => void;
}

const AppletList: React.FC<OwnProps> = ({
    setSelectedApplet,
    setIsMenuDrawerOpen,
}) => {
    const appletInfoArray = Array.from(appletMap.values());

    appletInfoArray.sort((a: AppletInfo, b: AppletInfo) => {
        const isABeforeB =
            a.displayName.toLowerCase() < b.displayName.toLowerCase();
        return isABeforeB ? -1 : 1;
    });

    return (
        <List onClick={() => setIsMenuDrawerOpen(false)}>
            {appletInfoArray.map((appletInfo: AppletInfo) => (
                <ListItem
                    button
                    key={appletInfo.name}
                    onClick={() => setSelectedApplet(appletInfo.name)}
                >
                    <ListItemText primary={appletInfo.displayName} />
                </ListItem>
            ))}
        </List>
    );
};

export default AppletList;
