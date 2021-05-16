import { Card, CardMedia, IconButton } from '@material-ui/core';
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
    color: white;
    background-color: ${(props) => props.theme.custom.palette.lightGrey};
`;

export const StyledCardMedia = styled(CardMedia)`
    height: 200px;
`;

interface OwnProps {
    isCardExpanded: boolean;
}

export const StyledTransformingIconButton = styled(IconButton)<OwnProps>`
    transform: rotate(${(props) => (props.isCardExpanded ? 180 : 0)}deg);
    margin-left: auto;
    transition: ${(props) =>
        props.theme.transitions.create('transform', {
            duration: props.theme.transitions.duration.shortest,
        })};
`;
