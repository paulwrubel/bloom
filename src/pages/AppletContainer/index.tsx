import { useParams } from 'react-router-dom';
import applets from 'Applets';
import MenuBar from 'components/MenuBar';
import P5Container from 'components/P5Container';
import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import AppletInfo from 'interfaces/AppletInfo';
import { StyledAppletContainer } from './styles';

interface AppletParams {
    appletName: string;
}

interface OwnProps {
    bloomVersion: string;
    shouldRedirect: boolean;
    setShouldRedirect: (shouldRedirect: boolean) => void;
    redirectLocation: string;
    setRedirectLocation: (redirectLocation: string) => void;
}

const AppletContainer: React.FC<OwnProps> = ({ bloomVersion }) => {
    const { appletName } = useParams<AppletParams>();
    const appletInfo = applets.find(
        (appletInfo) => appletInfo.name === appletName,
    ) as AppletInfo;

    const [isControlDrawerOpen, setIsControlDrawerOpen] = useState(true);

    return (
        <StyledAppletContainer>
            <MenuBar
                bloomVersion={bloomVersion}
                appletInfo={appletInfo}
                isControlDrawerOpen={isControlDrawerOpen}
                setIsControlDrawerOpen={setIsControlDrawerOpen}
            />
            <Grid
                container
                spacing={0}
                direction="row"
                alignItems="stretch"
                wrap="nowrap"
            >
                <Grid container item xs={isControlDrawerOpen ? 9 : 12}>
                    <P5Container
                        sketchInstance={appletInfo.sketchInstance}
                        appletInfo={appletInfo}
                    />
                </Grid>
                <Grid container item xs>
                    <appletInfo.controlDrawerComponent
                        isControlDrawerOpen={isControlDrawerOpen}
                    />
                </Grid>
            </Grid>
        </StyledAppletContainer>
    );
};

export default AppletContainer;
