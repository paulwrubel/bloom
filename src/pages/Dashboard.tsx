import React from 'react';
import MenuBar from 'components/MenuBar';

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
            <p>This is the Dashboard!</p>
        </>
    );
};

export default Dashboard;
