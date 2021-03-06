import { Paper } from '@material-ui/core';
import styled from 'styled-components';

export const StyledSliderPaper = styled(Paper)`
    padding 45px 25px 5px 25px;
    background-color: ${(props) => props.theme.custom.palette.lightGrey};
`;
