import {
    Button,
    CardActions,
    CardContent,
    CardHeader,
    Collapse,
    Grid,
    Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppletInfo from 'interfaces/AppletInfo';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    AppletCardWrapper,
    StyledCard,
    StyledCardMedia,
    StyledTransformingIconButton,
} from './styles';

interface OwnProps {
    appletInfo: AppletInfo;
}

const AppletCard: React.FC<OwnProps> = ({ appletInfo }) => {
    const [isCardExpanded, setIsCardExpanded] = useState(false);

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
                    {appletInfo.cardImage && (
                        <StyledCardMedia
                            title={appletInfo.displayName}
                            image={appletInfo.cardImage}
                        />
                    )}
                    <CardContent>
                        <Typography>{appletInfo.tagline}</Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Button
                            size="small"
                            color="primary"
                            component={Link}
                            to={`/a/${appletInfo.name}`}
                        >
                            Select
                        </Button>
                        <StyledTransformingIconButton
                            color="inherit"
                            isCardExpanded={isCardExpanded}
                            onClick={() => setIsCardExpanded(!isCardExpanded)}
                            aria-expanded={isCardExpanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </StyledTransformingIconButton>
                    </CardActions>
                    <Collapse in={isCardExpanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography>{appletInfo.description}</Typography>
                        </CardContent>
                    </Collapse>
                </StyledCard>
            </AppletCardWrapper>
        </Grid>
    );
};

export default AppletCard;
