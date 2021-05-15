import React from 'react';
import MenuBar from 'components/MenuBar';
import { Link, Typography } from '@material-ui/core';

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
                Coming soon!
            </Typography>
            <Typography color="textPrimary" variant="body1">
                {`(In the meantime, if you found a bug you would like me to fix or
                you have a feature suggestion, please feel free to `}
                <Link
                    href="https://github.com/paulwrubel/bloom/issues/new"
                    target="_blank"
                    rel="noreferrer"
                >
                    {`open an issue on GitHub`}
                </Link>
                {`.)`}
            </Typography>
        </>
    );
};

export default About;
