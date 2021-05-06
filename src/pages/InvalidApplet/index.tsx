import React from 'react';
import MenuBar from 'components/MenuBar';
import { useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';

interface InvalidAppletParams {
    invalidAppletName: string;
}

interface OwnProps {
    bloomVersion: string;
    setShouldRedirect: (shouldRedirect: boolean) => void;
    setRedirectLocation: (redirectLocation: string) => void;
}

const InvalidApplet: React.FC<OwnProps> = ({
    bloomVersion,
    setShouldRedirect,
    setRedirectLocation,
}) => {
    const { invalidAppletName } = useParams<InvalidAppletParams>();

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
                {`Oh no! "${invalidAppletName}" doesn't seem to be a valid Applet. :(`}
            </Typography>
        </>
    );
};

export default InvalidApplet;
