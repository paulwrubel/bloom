import { Card, CardMedia } from '@material-ui/core';
import styled from 'styled-components';

export const AppletCardWrapper = styled.div`
    // margin: 5px;
    min-width: 275px;
    max-width: 375px;

    .MuiPaper-root {
        color: white;
    }
`;

export const StyledCard = styled(Card)`
    background-color: ${(props) => props.theme.custom.palette.lightGrey};
`;

export const StyledCardMedia = styled(CardMedia)`
    height: 200px;
`;
