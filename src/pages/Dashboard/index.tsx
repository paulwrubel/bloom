import React from 'react';
import MenuBar from 'components/MenuBar';
import { Grid } from '@material-ui/core';
import AppletCard from 'components/AppletCard';
import applets from 'Applets';
import { CardGridWrapper } from './styles';
import AppletInfo from 'interfaces/AppletInfo';

interface OwnProps {
    bloomVersion: string;
    setShouldRedirect: (shouldRedirect: boolean) => void;
    setRedirectLocation: (redirectLocation: string) => void;
}

const Dashboard: React.FC<OwnProps> = ({ bloomVersion }) => {
    const sortedApplets = [...applets].sort((a: AppletInfo, b: AppletInfo) => {
        const isABeforeB =
            a.displayName.toLowerCase() < b.displayName.toLowerCase();
        return isABeforeB ? -1 : 1;
    });

    return (
        <>
            <MenuBar
                bloomVersion={bloomVersion}
                isControlDrawerOpen={false}
                setIsControlDrawerOpen={() => {}}
            />
            <CardGridWrapper>
                <Grid container spacing={2} justify="space-evenly">
                    {sortedApplets.map((appletInfo) => {
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
