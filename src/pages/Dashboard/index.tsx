import React from 'react';
import MenuBar from 'components/MenuBar';
import { Grid } from '@material-ui/core';
import AppletCard from 'components/AppletCard';
import applets from 'Applets';
import { CardGridWrapper } from './styles';

interface OwnProps {
    bloomVersion: string;
    setShouldRedirect: (shouldRedirect: boolean) => void;
    setRedirectLocation: (redirectLocation: string) => void;
}

const Dashboard: React.FC<OwnProps> = ({ bloomVersion }) => {
    return (
        <>
            <MenuBar
                bloomVersion={bloomVersion}
                isControlDrawerOpen={false}
                setIsControlDrawerOpen={() => {}}
            />
            <CardGridWrapper>
                <Grid container spacing={2} justify="space-evenly">
                    {applets.map((appletInfo) => {
                        return (
                            <AppletCard
                                key={appletInfo.name}
                                appletInfo={appletInfo}
                            ></AppletCard>
                        );
                    })}
                </Grid>
            </CardGridWrapper>
        </>
    );
};

export default Dashboard;
