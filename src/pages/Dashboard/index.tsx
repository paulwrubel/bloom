import React from 'react';
import MenuBar from 'components/MenuBar';
import { Typography } from '@material-ui/core';

interface OwnProps {
    bloomVersion: string;
    setShouldRedirect: (shouldRedirect: boolean) => void;
    setRedirectLocation: (redirectLocation: string) => void;
}

const Dashboard: React.FC<OwnProps> = ({
    bloomVersion,
    setShouldRedirect,
    setRedirectLocation,
}) => {
    return (
        <>
            <MenuBar
                bloomVersion={bloomVersion}
                setSelectedApplet={(appletName: string) => {
                    setShouldRedirect(true);
                    setRedirectLocation(appletName);
                }}
                isControlDrawerOpen={false}
                setIsControlDrawerOpen={() => {}}
            />
            <Typography color="secondary" variant="h1">
                {`This is the Dashboard!`}
            </Typography>
        </>
    );
};

export default Dashboard;
