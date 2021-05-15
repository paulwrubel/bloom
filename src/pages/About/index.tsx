import React from 'react';
import MenuBar from 'components/MenuBar';
import { Typography } from '@material-ui/core';

interface OwnProps {
    bloomVersion: string;
    setShouldRedirect: (shouldRedirect: boolean) => void;
    setRedirectLocation: (redirectLocation: string) => void;
}

const About: React.FC<OwnProps> = ({ bloomVersion }) => {
    return (
        <>
            <MenuBar
                bloomVersion={bloomVersion}
                isControlDrawerOpen={false}
                setIsControlDrawerOpen={() => {}}
            />
            <Typography color="secondary" variant="h1">
                {`Coming soon!`}
            </Typography>
        </>
    );
};

export default About;
