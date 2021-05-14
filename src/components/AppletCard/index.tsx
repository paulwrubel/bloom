import {
    Button,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
} from '@material-ui/core';
import AppletInfo from 'interfaces/AppletInfo';
import React from 'react';
import { Link } from 'react-router-dom';
import { AppletCardWrapper, StyledCard, StyledCardMedia } from './styles';

interface OwnProps {
    appletInfo: AppletInfo;
}

const AppletCard: React.FC<OwnProps> = ({ appletInfo }) => {
    const appletTagsString = appletInfo.tags
        .map((tag) => tag.toLowerCase())
        .sort()
        .join(' | ');

    return (
        <Grid item>
            <AppletCardWrapper>
                <StyledCard>
                    <CardHeader
                        color="textPrimary"
                        title={appletInfo.displayName}
                        subheader={appletTagsString}
                    />
                    {appletInfo.cardImagePath && (
                        <StyledCardMedia
                            title={appletInfo.displayName}
                            image={appletInfo.cardImagePath}
                        />
                    )}
                    <CardContent>{appletInfo.description}</CardContent>
                    <CardActions>
                        <Button
                            size="small"
                            color="primary"
                            component={Link}
                            to={`/a/${appletInfo.name}`}
                        >
                            Select
                        </Button>
                    </CardActions>
                </StyledCard>
            </AppletCardWrapper>
        </Grid>
    );
};

export default AppletCard;
